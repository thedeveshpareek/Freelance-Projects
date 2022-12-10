import React, { useEffect, useState } from "react";
import HeaderIndex from "./Header/HeaderIndex";
import { Notify } from "react-redux-notify";
import LatestFooter from "./Footer/LatestFooter";

const MainLayout = (props) => {

  const [themeState, setThemeState] = useState(false);

  const toggleClass = () => {
    setThemeState(!themeState);
  };

  return (
    <div className={`${themeState ? "dark-mode" : ""}`} >
      <div className="app-admin-wrap layout-sidebar-large">
        <Notify position="TopRight" />
        <HeaderIndex toggleTheme={toggleClass}/>
        <div className="main-content-wrap sidenav-open d-flex flex-column">
          <div className="main-wrap-sec">
            {React.cloneElement(props.children)}
          </div>
          <LatestFooter />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
