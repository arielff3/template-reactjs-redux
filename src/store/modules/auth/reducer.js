import produce from 'immer';

const INITIAL_STATE = {
  tokenApp: null,
  signed: false,
  loading: false,
  user: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.tokenApp = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.signed = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.tokenApp = null;
        draft.signed = false;
        break;
      }
      case '@user/DATA_USER_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      default:
    }
  });
}
