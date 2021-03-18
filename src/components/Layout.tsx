import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';
interface Props {
  children: any;
}
const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
