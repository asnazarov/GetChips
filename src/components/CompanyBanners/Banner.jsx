import React from 'react';
import './banner.scss';

const Banner = ({children}) => {

  return (
    <section className="banner">
      {children}
    </section>
  )
}

export default Banner;