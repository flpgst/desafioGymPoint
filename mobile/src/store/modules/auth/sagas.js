import { takeLatest, call, put, all } from 'redux-saga/effects'
import { Alert } from 'react-native'

import api from '~/services/api'
import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { userId } = payload

    const response = yield call(api.post, 'sessions', {
      userId
    })

    const { token, user } = response.data

    if (user.super_admin) {
      Alert.alert('Erro de Login', 'Administradores devem usar o GymPoint WEB')
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))

    // history.push('/matriculas')
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {
  // history.push('/')
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut)
])
