import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({people}) => {
  const cardList = people.map( (person, i) => {
    return <Card key={i} person={person} />
  });

  return (
    <div>{cardList}</div>
  );
}

export default CardList;