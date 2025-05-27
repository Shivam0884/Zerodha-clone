import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row mt-5">
        <div className="col-6 ">
          <img
            src="media\education.svg"
            style={{ width: "75%" }}
            className="pl-5"
          ></img>
        </div>

        <div className="col-6">
          <h2 className="mt-2">Free and open market education</h2>
          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            <br />
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="# "
            className=" mt-3"
            style={{ textDecoration: "none", fontSize: "17px" }}
          >
            Varsity&nbsp;<i class="fa-solid fa-arrow-right "></i>
          </a>
          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            <br />
            India for all your market related queries.
          </p>
          <a
            href="# "
            className=" mt-3"
            style={{ textDecoration: "none", fontSize: "17px" }}
          >
            TradingQ&A&nbsp;<i class="fa-solid fa-arrow-right "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
