import App from '@containers/App';
import rootReducer from '@reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from '@styled-components/index';
import theme from '@styled-components/theme';
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
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
