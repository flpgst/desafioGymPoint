import React, { useState } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Background from '~/components/Background'

import { Container, Form, FormInput, SubmitButton } from './styles'
import logo from '~/assets/logo.png'
import { signInRequest } from '~/store/modules/auth/actions'

export default function SignIn() {
  const dispatch = useDispatch()
  const [userId, setUserId] = useState('')
  const loading = useSelector(state => state.auth.loading)
  function handleSubmit() {
    dispatch(signInRequest(userId))
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Informe seu ID de cadastro"
            keyboardType="numeric"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={userId}
            onChangeText={setUserId}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  )
}
