import React from "react";
import styles from "../../styles/Layout/Layout.module.scss";
import { LayoutProps } from "../../typings/typings";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
