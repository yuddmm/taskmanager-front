import { ReactNode } from 'react';
import Header from '../header/header';

interface IProps {
  children?: ReactNode;
}

const Layout = (props: IProps) => {
  return (
    <div className="wrapper">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
