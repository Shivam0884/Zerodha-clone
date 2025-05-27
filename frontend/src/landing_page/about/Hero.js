import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row m-5 ">
        <h2 className=" text-center mt-5 mb-5">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
        <hr className="mt-5" style={{ width: "80%", margin: "0 auto" }} />
      </div>
      <div className="row m-5">
        <div
          className="col-6"
          style={{
            paddingLeft: "150px",
            fontSize: "17px",
          }}
        >
          <p>
            We kick-started operations on the 15th of August, 2010
            <br /> with the goal of breaking all barriers that traders and
            <br />
            investors face in India in terms of cost, support, and
            <br /> technology. We named the company Zerodha, a<br /> combination
            of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house
            <br /> technology have made us the biggest stock broker in
            <br /> India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day
            <br /> through our powerful ecosystem of investment
            <br /> platforms, contributing over 15% of all Indian retail
            <br /> trading volumes.
          </p>
        </div>
        <div
          className="col-6"
          style={{
            paddingLeft: "20px",
            fontSize: "17px",
          }}
        >
          <p>
            In addition, we run a number of popular open online
            <br /> educational and community initiatives to empower retail
            <br /> traders and investors.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested
            <br /> in several fintech startups with the goal of growing the
            <br /> Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. <br />
            Catch up on the latest updates on our
            <a href="#" style={{ textDecoration: "none" }}>
              blog or see what
            </a>
            <br /> the media is{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              saying about us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
