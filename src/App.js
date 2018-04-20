import React, {Component}from 'react';
import "App.css";
import images from "./images.json";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


class App extends Component {

  state = {
    message:"Click an image to start playing!",
    topScore:0,
    currentScore:0,
    images:images,
    unSelectedImages:images
  }

  randomImage = image =>{
    for(let i = image.length -1; i >0; --i) {
      let x = Math.floor(Math.random() * (i + 1));
    [image[i]], [image[x]] = [image[x]], [image[i]];
    }
  }

  selectImage = image => {
    const soccerPlayer = this.state.unSelectedImages.find(item => item.image === image);

    if (soccerPlayer === undefined){
      this.setState({
        message:"Incorrect Guess!",
        topScore:(this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore:0,
        images:images,
        unSelectedImages:images
      })
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
