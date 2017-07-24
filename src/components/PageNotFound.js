import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../static/404.jpg';

function PageNotFound() {
  return (
    <div>
      <h2><Link to="/">Phone Home!</Link></h2>
      <img src={Image} alt="404 Page Not Found" />
    </div>
  );
}

export default PageNotFound;
