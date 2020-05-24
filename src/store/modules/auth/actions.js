export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function dataUser(token) {
  return {
    type: '@user/DATA_REQUEST',
    payload: { token },
  };
}

export function dataSuccess(user) {
  return {
    type: '@user/DATA_USER_SUCCESS',
    payload: { user },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
