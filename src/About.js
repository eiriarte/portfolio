import React, { useContext } from 'react';
import LangContext from './context';
import strings from './data/About.str.json';
import { FaGithub, FaStackOverflow, FaRegFilePdf } from 'react-icons/fa';

export default function About() {
  const lang = useContext(LangContext);
  const str = strings[lang];
  const esClass = lang === 'es' ? 'lead' : 'd-none';
  const enClass = lang === 'en' ? 'lead' : 'd-none';
  return (
    <section id="about" className="border-bottom p-3">
      <div className="container">
        <h2 className="text-center my-4">{ str.about }</h2>
        <p className={esClass}>Me llamo <strong>Eduardo I. Iriarte Gahete</strong>.</p>
        <p className={esClass}>Soy desarrollador web casi desde que existe la web.
          He trabajado tanto en empresas del sector como por libre. Para terceros y en proyectos propios.
          Toda esta experiencia me ha enseñado cómo se deben hacer las cosas y también como <em>no
          se deben</em> hacer. Desde la definición de requisitos hasta el mantenimiento.</p>
        <p className={esClass}>Aunque tengo experiencia en muy diversas tecnologías, soy principalmente
          programador JavaScript: ESNext, Node.js, MEAN stack, AngularJS, React… Apasionado de la tecnología y
          el software libre. Observación: escribo esto usando un emulador de Vim para Visual Studio Code en un MacBook.</p>
        <p className={enClass}>My name is <strong>Eduardo I. Iriarte Gahete</strong>.</p>
        <p className={enClass}>I've worked at firms and as a freelance. Both for third parties and in my own projects.
          All this experience has taught me how things should be done and how they <em>should not</em>.
          From requirements definition to maintenance.</p>
        <p className={enClass}>Though I have experience with many diverse technologies, I am, at heart, a
          JavaScript developer: ESNext, Node.js, MEAN stack, AngularJS, React… Passionate about technology
          and free software. Note: I'm writing this using a Vim emulator for Visual Studio Code in a MacBook.</p>
        <ul className="list-inline mt-5 about-list">
          <li className="list-inline-item">
            <a href="https://github.com/eiriarte" className="about-btn"><FaGithub /></a>
          </li>
          <li className="list-inline-item">
            <a href="https://stackoverflow.com/users/1637846/" className="about-btn"><FaStackOverflow /></a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.dropbox.com/s/9idy995ndppgmmb/curriculum.pdf?dl=1" className="about-btn"><FaRegFilePdf /></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
