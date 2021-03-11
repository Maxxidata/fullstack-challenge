import { types } from './actions';
import { ActionPayload, IProfessionalReducer } from './interfaces/reducer.interface';

const INITIAL_STATE: IProfessionalReducer = {
  data: [],
  loading: false,
};

// eslint-disable-next-line func-names
export default function (state = INITIAL_STATE, action: ActionPayload): IProfessionalReducer {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SET_PROFESSIONALS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
