import { combineReducers } from 'redux';
import { friendsReducer,friendsAddReducer} from './FriendsReducer';

export default combineReducers({
    friendsReducer,
    friendsAddReducer
});
