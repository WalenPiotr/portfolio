import { AnyAction } from 'redux';
import { SET_CURRENT_PAGE } from '@actions/page';
import IPage from '@typings/IPage';

const initialState: IPage = {
    current: 0,
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return { ...state, current: action.current };
        default:
            return state;
    }
};
