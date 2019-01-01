import React from 'react';
import styles from './../css/main.css';
// import image from '../images/cute-eyes.gif';

export default class App extends React.Component {
  render () {
    return (
      <div className='flower'>
        🌻
      <TobyGif />
      </div>
    );
  }
}

const TobyGif = () => {
  return (
    <div className='styles.polaroid'>
      <div className='styles.tint'>
        <img src={require('./../images/cute-eyes.gif')} className='styles.gifs' />
      </div>
    </div>
    );
};
