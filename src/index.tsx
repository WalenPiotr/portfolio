import App from '@containers/App';
import rootReducer from '@reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider, injectGlobal } from '@styled-components/index';
import theme from '@styled-components/theme';

injectGlobal`
    body {
        font-family: 'Roboto Condensed';
        font-weight: 300;
        margin: 0;
        padding: 0;
        color: ${theme.fontPrimaryColor.stringify()}; 
    }
    button {
        font-family: 'Roboto Condensed';
        font-weight: 300;
        color: ${theme.fontPrimaryColor.stringify()};
        &:hover: {
            color: ${theme.fontHighlightColor.stringify()};
        }
        border: none;
        background-color: rgba(0, 0, 0,0.0);   
        &:focus {   
            outline: none;
        }     
    }
    a {
        font-family: 'Roboto Condensed';
        font-weight: 300;
        color: ${theme.fontPrimaryColor.stringify()};
        &:hover: {
            color: ${theme.fontHighlightColor.stringify()};
        }     
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
