import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { Container } from '~/components/Form/styles'
import { signOut } from '~/store/modules/auth/actions'
import { updateProfileRequest } from '~/store/modules/user/actions'
import AvatarInput from './AvatarInput'

export default function Profile() {
  const profile = useSelector(state => state.user.profile)

  const dispatch = useDispatch()

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container inversedButton>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a nova senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  )
}
