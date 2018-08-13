import React from 'react';
import './Card.css';

const Card = ({person}) => {
  const {first, last } = person.name;
  const imgSrc = person.picture.large;

  return (
    <div className="card">
      <div className="card-header">
        <img src={imgSrc} className="card-img"/>
        <div className="avatar">
          <h3 className="avatar-name">{`${first} ${last}`}</h3>
          <p className="avatar-handle">{`@${first}${last}`}</p>
        </div>
        <div className="card-btn">FRIEND</div>
      </div>
      <div className="card-body">
        <div className="locked-profile-badge">
          <i className="material-icons md-16">lock</i>
          <p>This profile is locked</p>
        </div>
      </div>
    </div>
  )
}

export default Card;