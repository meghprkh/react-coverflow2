import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from './App';

ReactDOM.render(<Coverflow onActiveClick={(x)=>console.log(x)}>
  <img src="images/winter.jpg"></img>
  <img src="images/14.jpg"></img>
  <img src="images/cloudatlas.jpg"></img>
  <img src="images/dancewithdragons.jpg"></img>
  <img src="images/fiftyshades.jpg"></img>
  <img src="images/greatgatsby.jpg"></img>
  <img src="images/inferno.jpg"></img>
  <img src="images/koban.jpg"></img>
  <img src="images/renegade.jpg"></img>
</Coverflow>, document.getElementById('root'));
