// src/Header.js
import './Header.css';

import React from 'react'

function Header() {
  return (
    <div className="Header">
      <h2>Spore Finance</h2>
      <div className="SubHeader">
        <h2><a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noopener noreferrer"> Trade </a></h2>
        <h2><a href="https://info.pangolin.exchange/#/token/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noopener noreferrer"> Analytics </a></h2>
      </div>

    </div>
  )
}

export default Header
