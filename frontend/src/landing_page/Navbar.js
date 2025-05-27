import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ height: "70px" }}
    >
      <div class="container ">
        <Link class="navbar-brand " to={"/"}>
          <img
            src="media\logo.svg"
            alt="logo"
            style={{ width: "22%", marginLeft: "80px" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  aria-current="page"
                  to={"signup"}
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to={"about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to={"product"}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to={"pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to={"support"}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
