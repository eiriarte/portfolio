import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

class WorkCard extends React.Component {
  renderSkills(skills) {
    return skills.map(skill => {
      return (
        <span
          className="badge badge-secondary"
          key={skill}>
          {skill}
        </span>
      );
    });
  }

  renderLinks(links) {
    return links.map(link => {
      return (
        <a
          href={link.url}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
          key={link.url}>
          <small>{ link.anchor } <FaExternalLinkAlt /></small>
        </a>
      );
    });
  }

  render() {
    const work = this.props.work;
    const image = process.env.PUBLIC_URL + '/images/' + work.screenshot;
    return (
      <div className="card shadow-sm my-3 mx-auto work-card">
        <img src={image} width="300" height="150" alt="" className="card-image-top" />
        <div className="card-body">
          <h5 className="card-title">{ work.title }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ work.position }</h6>
          <p className="card-text">{ work.description }</p>
          <p className="card-text">{ this.renderSkills(work.skills) }</p>
          { this.renderLinks(work.links) }
        </div>
      </div>
    );
  }
}

export default WorkCard;