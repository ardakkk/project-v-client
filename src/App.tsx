import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as classes from './App.css';
interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <h1 className={ classes.title }>Hello React121212!</h1>
    );
};

export default hot(module)(App);