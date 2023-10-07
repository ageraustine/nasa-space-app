import React, { Component } from "react";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          title: "Awareness One",
          description: "To create awareness",
        },
        {
          title: "Awareness Two",
          description: "To create awareness",
        },
        {
          title: "Awareness Three",
          description: "To create awareness",
        },
      ],
    };
  }

  render() {
    const { state } = this;
    return (
      <div className="container mt-1">
        <div className="row justify-content-center">
          <div
            class="card mt-2 mb-2 ms-1"
            style={{
              background: "linear-gradient(135deg, purple, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            {/* <div className="align-self-center">
              <i className={`bi ${val.icon}`} style={{ fontSize: "3rem" }} />
            </div> */}
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">BLOGS</h5>
              <p class="card-text">
                Get Insights on how to Create Value Using EMIT Datasets
              </p>
            </div>
          </div>
          <div
            class="card mt-2 mb-2 ms-1"
            style={{
              background: "linear-gradient(135deg, purple, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            {/* <div className="align-self-center">
              <i className={`bi ${val.icon}`} style={{ fontSize: "3rem" }} />
            </div> */}
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">EMITHUB GAME</h5>
              <p class="card-text">Play and Enjoy EMITHUB Bubble Game</p>
            </div>
          </div>
          <div
            class="card mt-2 mb-2 ms-1"
            style={{
              background: "linear-gradient(135deg, purple, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            {/* <div className="align-self-center">
              <i className={`bi ${val.icon}`} style={{ fontSize: "3rem" }} />
            </div> */}
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">COMMUNITY</h5>
              <p class="card-text">
                Join Communities on Climate Change & Make a Change
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ alignSelf: "center" }}>Navigate Emit Website</h4>
        </div>

        <div className="row justify-content-center">
          <img src="guide.gif" className="mb-2"/>
        </div>
      </div>
    );
  }
}

export default HomePage;
