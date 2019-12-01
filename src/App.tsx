import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch, withRouter } from 'react-router-dom';

import './assets/styles/general.scss';
import Layout from './components/templates/Layout/Layout';
import { routes } from './routes';

const App: React.FunctionComponent<any> = props => {
    return (
        <Layout>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </React.Suspense>
        </Layout>
    );
};

export default hot(withRouter(App));
