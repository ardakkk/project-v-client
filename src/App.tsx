import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import * as classes from './App.scss';
import { Layout } from './components/templates/Layout/Layout';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
    return <Layout />;
};

export default hot(App);
