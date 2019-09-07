import * as React from 'react';
import { Header } from '../../organisms/Header/Header';

interface ILayoutProps {
}

export const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
      <div className='Layout'>
          <Header/>
      </div>
  );
};
