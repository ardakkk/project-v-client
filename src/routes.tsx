import * as React from 'react';

import { IRoutesModel } from './models/general';

const IceBox = React.lazy(() => import('./pages/Icebox/Icebox'));
const Today = React.lazy(() => import('./pages/Today/Today'));

export const routes: IRoutesModel[] = [
    {
        component: () => <IceBox />,
        path: '/icebox',
    },
    {
        component: () => <Today />,
        path: '/today',
    },
    {
        component: () => <div>Home</div>,
        exact: true,
        path: '/',
    },
];
