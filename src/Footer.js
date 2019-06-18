import React, { useContext } from 'react';
import LangContext from './context';
import { FaGithub } from 'react-icons/fa';
import strings from './data/Footer.str.json';

function Footer() {
  const str = strings[useContext(LangContext)];
  const githubURL = 'https://github.com/eiriarte/portfolio';
  return (
    <section className="p-5 text-center bg-dark text-muted">
      <p><small>{ str.tech }</small></p>
      <p><small>
        <FaGithub />&nbsp;
        <a className="text-muted" href={githubURL}>{ str.github }</a>
      </small></p>
      <p><small>{ str.copyright }</small></p>
    </section>
  );
}

export default Footer;