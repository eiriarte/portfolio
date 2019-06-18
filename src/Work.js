import React, { useContext } from 'react';
import LangContext from './context';
import WorkCard from './WorkCard';
import strings from './data/Work.str.json';

export default function Work(props) {
  const str = strings[useContext(LangContext)];

  return (
    <section id="work" className="border-bottom border-top p-3 bg-light">
      <div className="container">
        <h2 className="text-center my-4">{ str.heading }</h2>
        <div className="row">
          {
            props.works.map(work => 
              <div key={work.id} className="col">
                <WorkCard work={work} />
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}