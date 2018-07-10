import App from '@containers/App';
import rootReducer from '@reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';
import theme from '@constants/theme';
injectGlobal`
    body {
        font-family: 'Roboto Condensed';
        font-weight: 300;
        margin: 0;
        padding: 0;
        color: ${theme.fontPrimaryColor}; 
    }
    button {
        font-family: 'Roboto Condensed';
        font-weight: 300;
    }
`;

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
