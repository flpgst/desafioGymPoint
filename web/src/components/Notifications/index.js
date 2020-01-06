import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '~/services/api'

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from './styles'

export default function Notifications() {
  const [visible, setVisible] = useState(false)

  const [notifications, setNotifications] = useState([])

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification),
    [notifications]
  )
  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('help-orders')

      const data = response.data.map(helpOrder => ({
        ...helpOrder,
        timeDistance: formatDistance(
          parseISO(helpOrder.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }))

      setNotifications(data)
    }

    loadNotifications()
  }, [])

  function handleToggleVisible() {
    setVisible(!visible)
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#ee4d64" size={20} />
      </Badge>
      ´
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id}>
              <p>{notification.question}</p>
              <time>{notification.timeDistance}</time>
              <Link to={`/ajuda/${notification._id}`}>
                <button type="button" onClick={handleToggleVisible}>
                  Responder
                </button>
              </Link>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  )
}
