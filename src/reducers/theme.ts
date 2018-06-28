import { AnyAction } from 'redux';
import { LOAD_BACKGROUND } from '@actions/theme';
import ITheme from '@typings/ITheme';

const initialState: ITheme = {
    fontPrimaryColor: 'rgb(230, 230, 255)',
    fontHighlightColor: 'rgb(250, 250, 255)',
    backgroundColor: 'rgb(80, 80, 200)',
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_BACKGROUND:
            return { ...state, backgroundColor: action.backgroundColor };
        default:
            return state;
    }
};
