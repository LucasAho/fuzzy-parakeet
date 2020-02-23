import React, { Component } from 'react';
import Title from "./components/Title";
import BeastCard from "./components/BeastCard";
import Wrapper from "./components/Wrapper";
import beasts from "./bestiary.json";


class App extends Component {
  state = {
    beasts: beasts,
    pickedBeasts: [],
    topScore: 0,
    alertMessage: ""
  };

  handleClick = event => {
    const name = event.target.attributes.getNamedItem("alt").value;
    this.shuffleCharacters();
    this.checkGuess(name, this.updateTopScore);  
  }
  
  shuffleCharacters = () => {
    this.setState(this.state.beasts = this.shuffleArray(this.state.beasts))
  }
  shuffleArray = (a) => {
    var j, x, i;
    for (i=a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i]=a[j];
      a[j]=x;
    }
    return a;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedBeasts.includes(name)) {

      newState.alertMessage = `YOU ALREADY PICKED "${name}"!`;
      newState.pickedBeasts = [];
      this.setState(this.state = newState);
    } else {
      newState.pickedBeasts.push(name);
      console.log(newState.pickedBeasts)
      newState.alertMessage = `GOOD CHOICE`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner);
  }

  updateTopScore = (newState, cb) => {
    if  (newState.pickedBeasts.length > newState.topScore) {
      newState.topScore++;
      this.setState(this.state = newState);
    }
    cb(newState);
  }

  alertWinner = (newState) => {
    if (newState.pickedBeasts.length === 12) {
      newState.alertMessage = "CHAMPION!";
      newState.pickedBeasts = [];
      this.setState(this.state = newState)
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        {this.state.beasts.map(beast => (
          <BeastCard
            id={beast.id}
            key={beast.id}
            name={beast.name}
            image={beast.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
