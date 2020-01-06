import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

import { Container, List, SubmitButton } from './styles'
import Checkins from '~/components/Checkins'

import api from '~/services/api'

export default function Checkin() {
  const userId = useSelector(state => state.user.profile.id)
  const [checkins, setCheckins] = useState()

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${userId}/checkins`)
      setCheckins(response.data)
    }
    loadCheckins()
  }, [userId])

  async function createCheckin() {
    try {
      const response = await api.post('checkins')
      setCheckins([...checkins, response.data])
    } catch (response) {
      Alert.alert('Erro', 'Excedido número máximo de checkins na semana')
    }
  }
  return (
    <Container>
      <SubmitButton onPress={createCheckin}>Novo Checkin</SubmitButton>
      <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => <Checkins data={[item, index]} />}
      />
    </Container>
  )
}

Checkin.navigationOptions = {
  tabBarLabel: 'Checkins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="location-on" size={20} color={tintColor} />
  )
}
