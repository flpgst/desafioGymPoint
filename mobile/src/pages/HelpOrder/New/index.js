import React, { useState } from 'react'
import { TouchableOpacity, Alert, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, SubmitButton, TInput } from './styles'

import api from '~/services/api'

export default function HelpOrderNew({ navigation }) {
  const [question, setQuestion] = useState('')

  async function handleSubmit() {
    try {
      await api.post('help-orders', { question })
      Alert.alert('Sucesso', 'Pedido de ajuda enviado')
      navigation.navigate('HelpOrder', { question })
    } catch (response) {
      Alert.alert(
        'Ocorreu um problema',
        'Tente enviar seu pedido de ajuda novamente'
      )
    }
  }

  return (
    <>
      <Container>
        <TInput
          multiline
          textAlignVertical="top"
          placeholder="Inclua seu pedido de auxílio"
          autoCorrect={false}
          autoCaptalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={question}
          onChangeText={setQuestion}
        />
      </Container>
      <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
    </>
  )
}

HelpOrderNew.navigationOptions = ({ navigation }) => ({
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
