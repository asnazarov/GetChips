import React from 'react';
import './downloadExcelBtn.scss';

const DownloadExcelBtn = () => {

  const search = (e) => {
    e.preventDefault()
  }

  return (
    <button className="download-btn" onClick={e => search(e)}>
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="18" height="16" rx="2" stroke="#969696" strokeWidth="2"/>
        <path d="M1 2C1 1.44772 1.44772 1 2 1H18C18.5523 1 19 1.44772 19 2V5H1V2Z" stroke="#969696" strokeWidth="2"/>
        <path d="M10 2V16" stroke="#969696" strokeWidth="2"/>
        <path d="M3.8125 9H7.75" stroke="#969696" strokeLinecap="round"/>
        <path d="M12.25 9H16.1875" stroke="#969696" strokeLinecap="round"/>
        <path d="M3.8125 12.375H7.75" stroke="#969696" strokeLinecap="round"/>
        <path d="M12.25 12.375H16.1875" stroke="#969696" strokeLinecap="round"/>
      </svg>
    </button>

  )
}

export default DownloadExcelBtn;