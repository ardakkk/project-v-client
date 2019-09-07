import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Layout } from './components/templates/Layout/Layout';
import * as classes from './App.scss';
interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <Layout />
    );
};

export default hot(App);