
import { AUTH_USER } from '../../constants';

const INITIAL_STATE = { authenticated: false };

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { authenticated: true };
    default:
            return state
  }
}