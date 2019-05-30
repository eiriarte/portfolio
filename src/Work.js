import React from 'react';
import WorkCard from './WorkCard';
import strings from './data/Work.str.json';

class Work extends React.Component {
  renderWorks() {
    return this.props.works.map(work => 
      <div key={work.id} className="col">
        <WorkCard work={work} />
      </div>
    );
  }

  render() {
    const str = strings[this.props.lang];
    return (
      <section id="work" className="border-bottom border-top p-3 bg-light">
        <div className="container">
          <h2 className="text-center my-4">{ str.heading }</h2>
          <div className="row">{ this.renderWorks() }</div>
        </div>
      </section>
    );
  }
}

export default Work;