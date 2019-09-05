import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Description from './components/Description/Description';
import * as classes from './App.scss';
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

export default hot(App);