export function signInRequest(userId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { userId }
  }
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}
