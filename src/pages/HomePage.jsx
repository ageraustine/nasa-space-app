import React, { Component } from "react";
import { withRouter } from "../component/withRouter";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          title: "WHAT IS EMIT",
          description:
            "A NASA Earth Venture Instrument on the International Space Station",
          icon: "bi-receipt",
        },
        {
          title: "EMIT's Mission",
          description:
            "To map the mineral composition of arid dust source regions",
          icon: "bi-check-circle",
        },
        {
          title: "EMIT For the Community",
          description:
            "Venture into how you can use EMIT's rich Dataset to Curb Climate Change & Food Shortage",
          icon: "bi-check-circle",
        },
      ],
    };
  }

  render() {
    const { state } = this;
    return (
      <div className="d-flex flex-column  justify-content-center align-items-center">
        <div className="h3 mt-3" style={{ fontFamily: "sans-serif" }}>
          INTRODUCING EMIT
        </div>
        <div
          id="process"
          class="carousel carousel-dark slide w-100"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {state.steps.map((val, index) => (
              <React.Fragment>
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="10000"
                >
                  <div
                    className="mb-2 ms-1 me-1"
                    style={{
                      height: "15em",
                      border: "2px solid indigo",
                      borderRadius: "5px",
                    }}
                  ></div>
                  <div class="carousel-caption mt-5 align-self-center">
                    <h5 style={{ color: "blue" }}>
                      {index + 1}. {val.title}
                    </h5>
                    <p style={{ color: "black" }}>{val.description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#process"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#process"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row justify-content-center">
          <div
            class="card btn mt-2 mb-2 ms-1"
            onClick={() => {
              this.props.navigate("/");
            }}
            style={{
              background: "linear-gradient(135deg, skyblue, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">BLOGS</h5>
              <p class="card-text">
                Get Insights on how to Create Value Using EMIT Datasets
              </p>
            </div>
          </div>
          <div
            class="card btn mt-2 mb-2 ms-1"
            onClick={() => {
              this.props.navigate("/game");
            }}
            style={{
              background: "linear-gradient(135deg, skyblue, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">EMITHUB GAME</h5>
              <p class="card-text">Play and Enjoy EMITHUB Bubble Game</p>
            </div>
          </div>
          <div
            class="card btn mt-2 mb-2 ms-1"
            onClick={() => {
              this.props.navigate("/");
            }}
            style={{
              background: "linear-gradient(135deg, skyblue, blue)",
              textAlign: "center",
              color: "white",
              zIndex: 100,
              width: "20em",
            }}
          >
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">COMMUNITY</h5>
              <p class="card-text">
                Join Communities on Climate Change & Make a Change
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <img src="guide.gif" className="mb-2" />
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
