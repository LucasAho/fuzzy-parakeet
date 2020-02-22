import React, { Component } from 'react';
import Title from "./components/Title";
import BeastCard from "./components/BeastCard";
import Wrapper from "./components/Wrapper";
import beasts from "./bestiary.json";


class App extends Component {
  state = {
    beasts
  };

  removeFriend = id => {
    const beasts = this.state.beasts.filter(beast => beast.id !== id);
    this.setState({ beasts });
  };


  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        {this.state.beasts.map(beast => (
          <BeastCard
            removeBeast={this.removeBeast}
            id={beast.id}
            key={beast.id}
            name={beast.name}
            image={beast.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
