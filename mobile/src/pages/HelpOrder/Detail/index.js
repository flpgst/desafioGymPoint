import React, { useMemo } from 'react'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Content,
  Header,
  HeaderText,
  Time,
  ContentText
} from './styles'

export default function HelpOrderDetail({ navigation }) {
  const data = navigation.getParam('item')
  const questionParsed = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true
    })
  })

  const answerParsed = useMemo(() => {
    return formatDistance(parseISO(data.updatedAt), new Date(), {
      locale: pt,
      addSuffix: true
    })
  })

  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>Pergunta</HeaderText>
          <Time>{questionParsed}</Time>
        </Header>
        <ContentText>{data.question} </ContentText>
      </Content>
      <Content>
        <Header>
          <HeaderText>Resposta</HeaderText>
          <Time>{data.answer && answerParsed}</Time>
        </Header>
        <ContentText>{data.answer || 'Sem Resposta'} </ContentText>
      </Content>
    </Container>
  )
}
HelpOrderDetail.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HelpOrder')
      }}
    >
      <Icon name="chevron-left" size={20} color="#666" />
    </TouchableOpacity>
  )
})
