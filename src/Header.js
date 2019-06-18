import React, { useContext } from 'react';
import LangContext from './context';
import strings from './data/Header.str.json';

export default function Header(props) {
  const str = strings[useContext(LangContext)];
  return (
    <header className="navbar navbar-expand navbar-light bg-white shadow sticky-top">
      <div className="container flex-column flex-sm-row">
        <h1 className="navbar-brand m-0 p-0">eIriarte</h1>
        <ul className="navbar-nav text-nowrap">
          <li className="nav-item">
            <a href="#work" className="nav-link">{str.work}</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">{str.about}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">{str.contact}</a>
          </li>
          <li className="nav-item">
            <a href="#0" className="nav-link" onClick={props.onLangClick}>{str.lang}</a>
          </li>
        </ul>
      </div>
    </header>
  );
}