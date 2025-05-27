import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div
        className="zerodhaTech text-center  mb-5 text-muted"
        style={{ marginTop: "120px" }}
      >
        <h4 style={{ fontSize: "20px" }}>
          Want to know more about our technology stack? Check out the&nbsp;
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h4>
      </div>
      <div className="row " style={{ marginTop: "120px" }}>
        <div className="text-center">
          <h2 style={{ color: "#444444" }}>The Zerodha Universe</h2>
          <br />
          <p style={{ fontSize: "17px" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="row">
            <div
              className="col-4"
              style={{
                paddingLeft: "150px",
                paddingTop: "70px",
                paddingBottom: "70px",
              }}
            >
              <img src="media\zerodhaFundhouse.png" style={{ width: "65%" }} />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 mb-5 text-muted fw-medium"
              >
                Our asset management venture
                <br /> that is creating simple and transparent index
                <br /> funds to help you save for your goals.
              </p>
              <img
                src="media\streakLogo.png"
                className=" mt-5"
                style={{ width: "55%" }}
              />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 text-muted fw-medium"
              >
                Systematic trading platform
                <br /> that allows you to create and backtest
                <br />
                strategies without coding.
              </p>
            </div>
            <div
              className="col-4"
              style={{
                paddingTop: "75px",
                paddingBottom: "70px",
              }}
            >
              <img src="media\sensibullLogo.svg" style={{ width: "55%" }} />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 mb-5 text-muted fw-medium"
              >
                Options trading platform that lets you
                <br /> create strategies, analyze positions, and examine
                <br /> data points like open interest, FII/DII, and more.
              </p>
              <img
                src="media\smallcaseLogo.png"
                style={{ width: "50%", marginTop: "15px" }}
                className="mt-5"
              />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 mb-5 text-muted fw-medium"
              >
                Thematic investing platform
                <br /> that helps you invest in diversified
                <br />
                baskets of stocks on ETFs.
              </p>
            </div>
            <div
              className="col-4"
              style={{
                paddingTop: "70px",
                paddingBottom: "70px",
                paddingRight: "200px",
              }}
            >
              <img src="media\goldenpiLogo.png" style={{ width: "80%" }} />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 mb-5 text-muted fw-medium"
              >
                Investment research platform
                <br /> that offers detailed insights on stocks
                <br />, sectors, supply chains, and more.
              </p>
              <img
                src="media\dittoLogo.png"
                style={{ width: "55%" }}
                className="mt-5"
              />
              <p
                style={{ fontSize: "12px" }}
                className="mt-4 text-muted fw-medium"
              >
                Personalized advice on life
                <br /> and health insurance. No spam
                <br /> and no mis-selling.
              </p>
            </div>
          </div>
          <button
            className="p-2  btn btn-primary fs-5 mb-5 "
            style={{
              width: "15%",
              margin: "0 auto",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
