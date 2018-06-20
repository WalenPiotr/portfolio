import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@components/App';
import './index.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
body {
    font-family: 'Roboto Condensed';    
    margin: 0;
    padding: 0;
}
html {
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
