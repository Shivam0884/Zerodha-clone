import React from "react";

function Hero() {
  return (
    <div className="container text-center " style={{ marginTop: "100px" }}>
      <h1 style={{ color: "#444444", fontSize: "45px" }}>Zerodha Products</h1>
      <p style={{ fontSize: "22px" }}>
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="mt-3" style={{ fontSize: "17px" }}>
        Check out our &nbsp;
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings<i class="fa-solid fa-arrow-right "></i>
        </a>
      </p>
      <br />
      <br />
      <br />
      <hr className="mt-3" style={{ width: "85%", margin: "0 auto" }} />
    </div>
  );
}

export default Hero;
