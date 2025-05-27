import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row px-4">
        <div className="col-4 mt-5">
          <h1>Unbeatable pricing</h1>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="# "
            style={{ textDecoration: "none", fontSize: "17px" }}
            className="mt-3"
          >
            See pricing &nbsp;
            <i class="fa-solid fa-arrow-right "></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row mt-5">
            <div className="col text-center border p-3">
              <h2 className="mt-3">
                <i
                  class="fa-solid fa-indian-rupee-sign"
                  style={{ fontSize: "25px" }}
                ></i>
                0
              </h2>
              <p className="mt-4 text-muted">
                Free equity delivery and
                <br /> direct mutual funds
              </p>
            </div>
            <div className="col text-center border p-3">
              {" "}
              <h2 className="mt-3">
                <i
                  class="fa-solid fa-indian-rupee-sign"
                  style={{ fontSize: "25px" }}
                ></i>
                20
              </h2>
              <p className="mt-4 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
