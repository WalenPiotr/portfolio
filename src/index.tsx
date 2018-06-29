import App from '@components/App';
import rootReducer from '@reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal, ThemeProvider } from 'styled-components';

injectGlobal`
    body {
        font-family: 'Roboto Condensed';
        margin: 0;
        padding: 0;
    }
`;

const store = createStore(rootReducer);

const theme = {
    fontPrimaryColor: 'rgb(230, 230, 255)',
    fontHighlightColor: 'rgb(250, 250, 255)',
    backgroundColor: 'rgb(80, 80, 200)',
};

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
