import React from "react";

function Hero() {
  return (
    <div className="container Openaccount">
      {/* text-center in bootstrap  */}
      <div className="row text-center ">
        <img
          src="media/homeHero.png"
          alt="HEro image"
          className="mb-5 w-75 mx-auto "
        />
        <h1 className="mb-3 ">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <a href="http://localhost:3000/signup">
          <button
            className="p-2  btn btn-primary fs-5 mt-4 button"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
