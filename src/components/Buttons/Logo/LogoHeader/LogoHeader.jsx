import React from 'react';
import '../logo.scss';
import LogoIconHeader from "./LogoIconHeader";

const LogoHeader = () => {

  return (
    <>
      <LogoIconHeader />
      <h1 className="logo__title">Getchips</h1>
    </>
  )
}

export default LogoHeader;