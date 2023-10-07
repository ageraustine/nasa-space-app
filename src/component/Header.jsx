import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg"
        style={{
          backgroundColor: "white",
          zIndex: 100,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style={{ color: "indigo" }}>
            EMITHUB
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a
                  class="nav-link  active d-inline-flex justify-content-center mt-1"
                  aria-current="page"
                  href="/game"
                >
                  GAME
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  active d-inline-flex justify-content-center mt-1"
                  aria-current="page"
                  href="/blogs"
                >
                  BLOGS
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
