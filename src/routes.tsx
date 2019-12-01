import * as React from 'react';

import { IRoutesModel } from './types/general';

const IceBox = React.lazy(() => import('./pages/Icebox/Icebox'));
const Today = React.lazy(() => import('./pages/Today/Today'));

export const routes: IRoutesModel[] = [
    {
        component: () => <Today />,
        exact: true,
        path: '/',
    },
    {
        component: () => <IceBox />,
        path: '/icebox',
    },
];
