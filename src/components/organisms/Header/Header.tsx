import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<div className='Header'>
			<AppBar>
				<Toolbar></Toolbar>
			</AppBar>
		</div>
	);
};
