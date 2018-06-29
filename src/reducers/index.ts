import { combineReducers } from 'redux';
import theme from '@reducers/theme';
import page from '@reducers/page';
const rootReducer = combineReducers({
    theme,
    page,
});

export default rootReducer;
