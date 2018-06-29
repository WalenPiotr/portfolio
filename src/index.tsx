import App from '@containers/App';
import rootReducer from '@reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        font-family: 'Roboto Condensed';
        margin: 0;
        padding: 0;
    }
`;

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
