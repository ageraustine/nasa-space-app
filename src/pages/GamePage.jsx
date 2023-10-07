import React, { Component } from "react";
import Bubble from "./Bubble";

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      bubbles: [],
    };
  }

  componentDidMount() {
    // Generate initial bubbles
    this.generateBubbles();

    // Start the bubble movement timer
    this.startBubbleMovement();
  }

  generateBubble = () => {
    const bubbleColors = ["red", "blue", "green", "purple"];
    const bubble = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      popped: false,
      color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    };

    this.setState((prevState) => ({
      bubbles: [...prevState.bubbles, bubble],
    }));
  };

  // Function to generate bubbles periodically
  generateBubbles = () => {
    this.generateBubble();
    setTimeout(this.generateBubbles, 2000);
  };

  // Function to update bubble positions
  moveBubbles = () => {
    this.setState((prevState) => ({
      bubbles: prevState.bubbles.map((bubble) => ({
        ...bubble,
        y: bubble.y - 2,
      })),
    }));
  };

  handleBubbleClick = (id) => {
    // Find the clicked bubble and mark it as popped
    const bubbles = this.state.bubbles.map((bubble) =>
      bubble.id === id ? { ...bubble, popped: true } : bubble
    );

    this.setState({ bubbles });

    // Delay the removal of the clicked bubble to allow time for animation
    setTimeout(() => {
      this.removeBubble(id);
    }, 1000); // Adjust the delay as needed for your animation duration
  };

  removeBubble = (id) => {
    // Remove the clicked bubble from the state
    const updatedBubbles = this.state.bubbles.filter(
      (bubble) => bubble.id !== id
    );
    this.setState({ bubbles: updatedBubbles });
  };

  // Function to start the bubble movement timer
  startBubbleMovement = () => {
    setInterval(this.moveBubbles, 50);
  };

  render() {
    return (
      <div className="vh-100" style={{ backgroundColor: "skyblue" }}>
        <div className="w-95">
          {this.state.bubbles.map((bubble) => (
            <Bubble
              key={bubble.id}
              id={bubble.id}
              x={bubble.x}
              y={bubble.y}
              popped={bubble.popped}
              onClick={this.handleBubbleClick}
              color={bubble.color}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GamePage;
