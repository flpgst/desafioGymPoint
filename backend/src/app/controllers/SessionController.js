import jwt from 'jsonwebtoken'

import User from '../models/User'
import authConfig from '../../config/auth'
import Permission from '../models/Permission'
import File from '../models/File'

class SessionController {
  async store(req, res) {
    const { email, password, userId } = req.body
    let user = {}
    if (userId) {
      user = await User.findByPk(userId, {
        include: [
          {
            model: Permission,
            as: 'permission',
            attributes: ['super_admin']
          },
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url']
          }
        ]
      })
    } else {
      user = await User.findOne({
        where: { email },
        include: [
          {
            model: Permission,
            as: 'permission',
            attributes: ['super_admin']
          },
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url']
          }
        ]
      })
    }

    if (!user) return res.status(401).json({ error: 'Usuário não existe' })

    if (password && !(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' })
    }

    const { id, name, avatar } = user
    const { super_admin } = user.permission

    return res.json({
      user: {
        id,
        name,
        email,
        super_admin,
        avatar
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}
export default new SessionController()
