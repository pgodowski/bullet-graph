import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import BulletGraph from './BulletGraph'
import './index.css';

var label = 'Test Label';

ReactDOM.render(
  <BulletGraph
  width={400}
  height={400}
  low={100}
  mid={200}
  high={250}
  actual={130}
  target={220}
  label={label}
/>,
  document.getElementById('root')
);
