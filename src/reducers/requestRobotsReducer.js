import { 
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_FAILED 
} from '../actions/types/constants';

const initialStateRobots = {
  isPending: false,
  data: [],
  error: ''
};

const requestRobots = (state = initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      }
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        data: action.payload, 
        isPending: false
      }
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    default: 
      return state;
  }
}

export default requestRobots;