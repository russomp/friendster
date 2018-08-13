import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import { people } from "./people";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList people={people} />, document.getElementById('root'));
registerServiceWorker();
