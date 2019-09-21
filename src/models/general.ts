import * as React from 'react';

export interface IRoutesModel {
    path: string;
    exact?: boolean;
    component: React.SFC<any>;
}
