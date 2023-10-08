import React, { useState } from "react";
import styles from "../style";
import { nasaimage1, nasaimage2, nasaimage3 } from "../assets"
import { Link } from "react-router-dom";
import { Footer } from "../component/Footer";

function HomePage(p) {
  const [steps] = useState([
    {
      title: "WHAT IS EMIT",
      description:
        "A NASA Earth Venture Instrument on the International Space Station",
      icon: "bi-receipt",
      image: nasaimage1, // Use the imported image here
    },
    {
      title: "EMIT's Mission",
      description: "To map the mineral composition of arid dust source regions",
      icon: "bi-check-circle",
      image: nasaimage2, // Use the imported image here
    },
    {
      title: "EMIT For the Community",
      description:
        "Venture into how you can use EMIT's rich Dataset to Curb Climate Change & Food Shortage",
      icon: "bi-check-circle",
      image: nasaimage3, // Use the imported image here
    },
  ]);

  return (
    <div className="d-flex flex-column  justify-content-center align-items-center">
      <div className="h3 mt-3" style={{ fontFamily: "sans-serif" }}>
        INTRODUCING EMIT
      </div>
      <div
        id="process"
        className="carousel carousel-dark slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {steps.map((val, index) => (
            <React.Fragment key={index}>
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="3000"
              >
            <div
            className="mb-2 ms-1 me-1"
            style={{
              height: "15em",
              border: "2px solid indigo",
              borderRadius: "5px",
              backgroundImage: `url(${val.image})`, // Set background image here
              backgroundSize: "cover", // Adjust the background image size
              backgroundPosition: "center", // Center the background image
            }}
            ></div>

            <div className="carousel-caption mt-5 align-self-center">
              <h5 style={{ color: "blue" }}>
                {index + 1}. {val.title}
              </h5>
              <p style={{ color: "blue" }}>{val.description}</p>
            </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#process"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#process"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />

      {/* <div className="row justify-content-center">
        <div
          className="card btn mt-2 mb-2 ms-1"
          onClick={() => {
            props.navigate("/");
          }}
          style={{
            background: "linear-gradient(135deg, skyblue, blue)",
            textAlign: "center",
            color: "white",
            zIndex: 100,
            width: "20em",
          }}
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">BLOGS</h5>
            <p className="card-text">
              Get Insights on how to Create Value Using EMIT Datasets
            </p>
          </div>
        </div>
        <div
          className="card btn mt-2 mb-2 ms-1"
          onClick={() => {
            props.navigate("/game");
          }}
          style={{
            background: "linear-gradient(135deg, skyblue, blue)",
            textAlign: "center",
            color: "white",
            zIndex: 100,
            width: "20em",
          }}
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">EMITHUB GAME</h5>
            <p className="card-text">Play and Enjoy EMITHUB Bubble Game</p>
          </div>
        </div>
        <div
          className="card btn mt-2 mb-2 ms-1"
          onClick={() => {
            props.navigate("/");
          }}
          style={{
            background: "linear-gradient(135deg, skyblue, blue)",
            textAlign: "center",
            color: "white",
            zIndex: 100,
            width: "20em",
          }}
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">COMMUNITY</h5>
            <p className="card-text">
              Join Communities on Climate Change & Make a Change
            </p>
          </div>
        </div>
      </div> */}

<div className={`flex space-y-4 sm:space-y-0 sm:space-x-4 m-2`}>
  <div className="card-container">
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title text-primary">What is emit?</h2>
        <p>
        EMIT is an imaging spectrometer that analyses light in the visible and shortwave...
        </p>
        <div className="card-actions justify-end">
          <Link to="/whatisemit">
          <button className="btn btn-primary">Read More</button>
          </Link>

        </div>
      </div>
    </div>
  </div>



  <div className="card-container">
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title text-primary">What can it used for?</h2>
        <p>
         ESRL Global Monitoring Laboratory - Data Visualization Helps view the localized
          area of high...
        </p>
        <div className="card-actions justify-end">
          <Link to="/whatisusedfor">
          <button className="btn btn-primary">Read More</button>
          </Link>

        </div>
      </div>
    </div>
  </div>

  <div className="card-container">
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title text-primary">Achievements</h2>
        <p>
        With the assistance of the NASA EMIT satellite, significant accomplishments....
        </p>
        <div className="card-actions justify-end">
          <Link to="/acheivement">
          <button className="btn btn-primary">Read More</button>
          </Link>

        </div>
      </div>
    </div>
  </div>
</div>



      <div className="row justify-content-center">
        <img src="guide.gif" className="mb-2" alt="Guide" />
      </div>
    </div>
  );
}

export default HomePage;
