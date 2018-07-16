import { combineReducers } from 'redux';
import requestRobots from './requestRobotsReducer';
import searchRobotsReducer from './searchRobotsReducer';

export default combineReducers({
  searchField: searchRobotsReducer,
  robots: requestRobots,
  error: requestRobots,
  isPending: requestRobots
});
