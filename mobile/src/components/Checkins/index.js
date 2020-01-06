import React, { useMemo } from 'react'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Container, Checkin, Time } from './stlyes'

export default function Checkins({ data }) {
  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data[0].createdAt), new Date(), {
      locale: pt,
      addSuffix: true
    })
  })

  return (
    <Container>
      <Checkin>Checkin #{data[1] + 1} </Checkin>
      <Time>{dateParsed}</Time>
    </Container>
  )
}
