import React from 'react';
import CardList from './CardList';
import {people} from './people';

const App = () => {
  return (
    <div>
      <h1>Friendster</h1>
      <CardList people={people} />
    </div>
  )
}

export default App;