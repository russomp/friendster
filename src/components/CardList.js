import React from 'react';
import './CardList.css';
import Card from './Card';
import gradients from '../gradients';

const CardList = ({ people }) => {
  const cardColors = gradients.filter(gradient => gradient.colors.length == 2);

  const cardList = people.map((person, i) => {
    return (
      <Card
        key={i}
        person={person}
        colors={cardColors[i % cardColors.length].colors}
      />
    );
  });

  return <div>{cardList}</div>;
};

export default CardList;
