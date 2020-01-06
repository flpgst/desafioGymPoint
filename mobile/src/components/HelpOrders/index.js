import React, { useMemo } from 'react'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Question,
  Time,
  Answered,
  Header,
  AnsweredText
} from './stlyes'

export default function HelpOrders({ data, navigation }) {
  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true
    })
  })

  return (
    <Container>
      <Header>
        <Answered>
          <Icon
            name="check-circle"
            size={16}
            color={data.answer ? '#42cb59' : '#666'}
          />
          <AnsweredText color={data.answer ? '#42cb59' : '#666'}>
            {data.answer ? 'Respondido' : 'Sem Resposta'}
          </AnsweredText>
        </Answered>
        <Time>{dateParsed}</Time>
      </Header>
      <Question>{data.question} </Question>
    </Container>
  )
}
