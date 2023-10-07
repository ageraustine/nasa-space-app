import React, { Component } from "react";
import Bubble from "./Bubble";

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      bubbles: [],
      hasPopped: false,
      info: "SO2 Gas Projected to Increase by 0.2% this year",
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

    this.setState({ bubbles, hasPopped: true });

    const infos = [
      "CO2 Emission 8% up",
      "Kalahari Desert Methane is 3% down",
      "EMIT Datasets waiting for you",
    ];

    const info = infos[Math.floor(Math.random() * infos.length)];

    setInterval(() => {
      this.setState({ hasPopped: false, info: info });
    }, 5000);

    this.removeBubble(id);
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
        <div
          class="alert alert-warning"
          role="alert"
          hidden={!this.state.hasPopped}
        >
          {this.state.info}
        </div>

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
