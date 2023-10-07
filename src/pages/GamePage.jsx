import React, { Component } from "react";
import "./GamePage.css";
import Bubble from "./Bubble";

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      bubbles: [],
      pinAngle: 0,
    };
  }

  handlePinClick = () => {
    // Increment the pin angle on each click (you can adjust the step)
    const newAngle = this.state.pinAngle + 10;
    this.setState({ pinAngle: newAngle });
  };

  componentDidMount() {
    // Generate initial bubbles
    this.generateBubbles();

    // Start the bubble movement timer
    this.startBubbleMovement();
  }

  // Function to generate a new bubble
  generateBubble = () => {
    const bubble = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      popped: false,
    };

    this.setState((prevState) => ({
      bubbles: [...prevState.bubbles, bubble],
    }));
  };

  // Function to generate bubbles periodically
  generateBubbles = () => {
    this.generateBubble();
    setTimeout(this.generateBubbles, 2000); // Adjust the interval as needed
  };

  // Function to update bubble positions
  moveBubbles = () => {
    this.setState((prevState) => ({
      bubbles: prevState.bubbles.map((bubble) => ({
        ...bubble,
        y: bubble.y - 5, // Adjust the speed as needed
      })),
    }));
  };

  handleBubbleClick = (id) => {
    // Mark the clicked bubble as popped
    const bubbles = this.state.bubbles.map((bubble) =>
      bubble.id === id ? { ...bubble, popped: true } : bubble
    );
    this.setState({ bubbles });

    // Display some info on the screen (you can replace this with your own logic)
    alert("You popped a bubble!");
  };

  // Function to start the bubble movement timer
  startBubbleMovement = () => {
    setInterval(this.moveBubbles, 50); // Adjust the interval as needed
  };

  render() {
    return (
      <div className="container">
        <div className="pin" onClick={this.handlePinClick}></div>
        {this.state.bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            id={bubble.id}
            x={bubble.x}
            y={bubble.y}
            popped={bubble.popped}
            onClick={this.handleBubbleClick}
            pinAngle={this.state.pinAngle}
          />
        ))}
      </div>
    );
  }
}

export default GamePage;
