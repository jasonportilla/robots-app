import { 
  CHANGE_SEARCH_FIELD, 
} from '../actions/types/constants';

const initialStateSearch = {
  input: ''
};

const searchRobots = (state = initialStateSearch, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state, 
        input: action.payload
      };
      default:
        return state;
  }
};

export default searchRobots;