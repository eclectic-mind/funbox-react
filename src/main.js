import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.component';
import * as data from './data.json';

const goods = data.goods;

ReactDOM.render(
  <React.StrictMode>
    <>
      {goods.map(item => <Card key={item.id}>{item}</Card>)}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);