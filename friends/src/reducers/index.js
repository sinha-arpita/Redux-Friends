import { combineReducers } from 'redux';
import { friendsReducer,friendsUpdateReducer} from './FriendsReducer';

export default combineReducers({
    friendsReducer,
    friendsUpdateReducer
});
