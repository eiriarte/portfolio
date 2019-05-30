import React from 'react';
import me from "./images/yo.jpg";
import strings from './data/Intro.str.json';

function Intro(props) {
  const str = strings[props.lang];
  return (
    <section className="px-3 py-5 my-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img className="resp-img" src={me} alt="Portátil" />
          </div>
          <div className="col text-center d-flex align-items-center">
            <div>
              <h2 className="mb-3">{str.tagline}</h2>
              <p className="lead mb-4">{str.lead}</p>
              <a href="#contact" className="btn btn-lg btn-outline-primary">{str.contact}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;