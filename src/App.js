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

  selectImage = name => {
    const soccerPlayer = this.state.unSelectedImages.find(item => item.name === name);

    if (soccerPlayer === undefined){
      this.setState({
        message:"Incorrect Guess!",
        topScore:(this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore:0,
        images:images,
        unSelectedImages:images
      });
    }
    else{
      //if the the guess is correct, select a new image.
      const newImage = this.state.unSelectedImages.filter(item => item.name !== name);

      this.setState({
        message:"Correct Guess!",
        currentScore:this.state.currentScore+1,
        images:images,
        unSelectedImages:newImage
      });
    }
    this.randomImage(images);
  }

  render() {
    return (
      <Wrapper>
        <Nav 
        message = {this.state.message}
        topScore = {this.state.topScore}
        currentScore = {this.state.currentScore}
        />
        <Title />
        {
          this.state.images.map(soccerPlayers => (
            <Card 
              name ={soccerPlayers.name}
              image = {soccerPlayers.image}
              selectImage = {this.selectImage}
              currentScore = {this.state.currentScore}
            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;
