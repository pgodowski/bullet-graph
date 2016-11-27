import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import BulletGraph from './BulletGraph'
import './index.css';

ReactDOM.render(
  <BulletGraph
  width={400}
  height={400}
  low={100}
  mid={200}
  high={250}
  actual={130}
  target={220}
/>,
  document.getElementById('root')
);
