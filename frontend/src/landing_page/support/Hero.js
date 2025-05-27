import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid hero"
      style={{ backgroundColor: "#387ed1" }}
    >
      <div className="row">
        <div className="col-6 p-5" style={{ marginLeft: "150px" }}>
          <h4>
            <a href="#">Support portal</a>
          </h4>
          <h4 className="mt-5">
            Search for an answer or browse help topics to create a<br /> ticket
          </h4>
          <input
            type="search"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ... "
          />
          <div style={{ display: "flex" }}>
            {" "}
            <p
              className=" mt-3"
              id="tickets"
              style={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                fontSize: "16px",
              }}
            >
              <a href="#">Track account opening</a>
            </p>
            &nbsp;&nbsp;&nbsp;
            <p
              className=" mt-3"
              id="tickets"
              style={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                fontSize: "16px",
              }}
            >
              <a href="#">Track segment activation</a>&nbsp;
            </p>
            &nbsp;&nbsp;&nbsp;
            <p
              className=" mt-3"
              id="tickets"
              style={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                fontSize: "16px",
              }}
            >
              <a href="#">Intraday margins</a>&nbsp;
            </p>
          </div>
          <p
            className=" mt-1"
            id="tickets"
            style={{
              color: "white",
              textDecoration: "underline",
              textUnderlineOffset: "8px",
              fontSize: "16px",
            }}
          >
            <a href="#">Track account opening</a>&nbsp;
          </p>
        </div>
        <div className="col-4 mt-5">
          <p
            className="fs-5"
            id="tickets"
            style={{
              color: "white",
              textAlign: "right",
              textDecoration: "underline",
              textUnderlineOffset: "8px",
              marginRight: "40px",
            }}
          >
            <a href="#">Kite user manual</a>
          </p>
          <h4 className="mt-5">Featured</h4>
          <ol
            type="1"
            style={{
              color: "white",
              textDecoration: "underline",
              fontSize: "17px",
            }}
          >
            <li>
              Revision in expiry dates of Copper and Zinc March <br />
              2025 options contracts
            </li>
            <br />
            <li>
              Adjustment of F&O contracts of HEROMOTOCO due
              <br />
              to dividend
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
