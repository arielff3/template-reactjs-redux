export function signInRequest(username, password) {
  return {
    type: '@init',
    payload: { username, password },
  };
}
