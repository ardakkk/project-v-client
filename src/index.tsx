import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const devMode: boolean = process.env.NODE_ENV !== 'prod';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

if (!devMode) {
    registerServiceWorker();
}