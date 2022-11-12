import './404.css';

import React from 'react';
import { Link } from 'react-router-dom';

import GalleryStyled from '../ui/GalleryStyled';
import H2Styled from '../ui/H2Styled';

const NotFound = () => {
  return (
    <GalleryStyled className="notFoundStyle">
      <div className="notFound">
        <h1>Error 404</h1>
        <H2Styled>Page Not Found</H2Styled>
        <p>
          We could not find the page you were looking for; sorry for the inconvinience
        </p>
        <p>
          Try going back to our <Link to="">Home Page</Link> or to our{' '}
          <Link to="phones">Gallery</Link>
        </p>
      </div>
    </GalleryStyled>
  );
};

export default NotFound;
