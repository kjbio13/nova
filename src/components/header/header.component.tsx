import React from "react";
import NovaLogo from "../../assets/icons/nova-logo.svg";
import "./header.styles.scss";

import Navigation from "../navigation/navigation.component";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={NovaLogo} alt="" />
        </a>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
