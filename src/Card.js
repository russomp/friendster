import React from 'react';
import './Card.css';

const Card = ({person, colors}) => {
  const {first, last} = person.name;
  const imgSrc = person.picture.large;

  
  const backgroundGradient = {
    backgroundImage: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
  }

  return (
    <div className="card">
      <div className="card-header" style={backgroundGradient}>
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