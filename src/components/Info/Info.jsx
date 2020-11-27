import React from 'react';
import './info.scss';

const Info = ({children}) => {

  return (
    <section className="info">
      {children}
    </section>
  )
}

export default Info;