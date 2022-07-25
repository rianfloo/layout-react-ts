import { Fragment } from "react";

import NavBar from "../Components/Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  renderHeader: boolean;
}

const Layout = ({ renderHeader, children }: LayoutProps) => {
  return (
    <Fragment>
      {renderHeader && <NavBar />}
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
