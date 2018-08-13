import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import { people } from "./people";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card person={people[0]}/>, document.getElementById('root'));
registerServiceWorker();
