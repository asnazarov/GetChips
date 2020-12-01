import React from 'react';
import './phoneBtn.scss';

const PhoneBtn = () => {
  return (
    <a className="phone" href="tel:+78007001863">
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M2.965 6.79245C4.045 8.91495 5.785 10.6475 7.9075 11.735L9.5575 10.085C9.76 9.88245 10.06 9.81495 10.3225 9.90495C11.1625 10.1825 12.07 10.3325 13 10.3325C13.4125 10.3325 13.75 10.67 13.75 11.0825V13.7C13.75 14.1125 13.4125 14.45 13 14.45C5.9575 14.45 0.25 8.74245 0.25 1.69995C0.25 1.28745 0.5875 0.949951 1 0.949951H3.625C4.0375 0.949951 4.375 1.28745 4.375 1.69995C4.375 2.63745 4.525 3.53745 4.8025 4.37745C4.885 4.63995 4.825 4.93245 4.615 5.14245L2.965 6.79245Z"
              fill="#439B24"/>
      </svg>

      <p className="phone__number">8-800-700-18-63</p>
    </a>
  )
}

export default PhoneBtn;