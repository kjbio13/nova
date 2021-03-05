import React, { useState, useEffect } from "react";
import "./navigation.styles.scss";

const Navigation: React.FC = () => {
  
  const navigationList = [
    `home`,
    `services`,
    `games`,
    `about`,
    `contact`,
    `careers`,
  ];

  return (
    <div className="navigation">
      <ul>
        {navigationList.map((list) => (
          <li>
            <a href={`/${list}`}>
              {list.charAt(0).toUpperCase() + list.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navigation;
