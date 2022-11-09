import React from 'react';
import { NavLink } from 'react-router-dom';

import NavStyled from '../ui/NavStyled';

const NavBar = () => {
  return (
    <NavStyled>
      <div className="home">
        <NavLink to="">
          <h1>
            <strong>
              <span>P</span>hone
            </strong>
            <span>M</span>arket
          </h1>
        </NavLink>
      </div>

      <div className="right">
        <NavLink to="phones">Gallery</NavLink>

        <NavLink to="about">About us</NavLink>
      </div>
    </NavStyled>
  );
};

export default NavBar;
