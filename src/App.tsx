import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as classes from './App.css';
import { Description } from './components/Description/Description';
interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <React.Fragment>
            <h1 className={ classes.title }>Hello World!</h1>
            <Description />
        </React.Fragment>
    );
};

export default hot(module)(App);