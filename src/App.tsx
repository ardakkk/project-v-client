import * as React from 'react';
import { hot } from 'react-hot-loader'
interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <div>Hello React!</div>
    )
};

export default hot(module)(App);