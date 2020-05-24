import produce from 'immer';

const INITIAL_STATE = {
  init: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@init': {
        break;
      }
      default:
        break;
    }
  });
}
