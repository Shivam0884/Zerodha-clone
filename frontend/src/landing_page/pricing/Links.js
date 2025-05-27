import React from "react";

function Links() {
  return (
    <div className="container mt-5 Links ">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-5"
        style={{ marginLeft: "80px", marginRight: "80px" }}
      >
        <div className="link text-center">
          <h3>
            <a
              className="navbar-brand fs-3"
              href="#"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              Equity
            </a>
          </h3>
        </div>
        <div className="link text-center" style={{ marginLeft: "20px" }}>
          <h3>
            <a
              className="navbar-brand fs-3"
              href="#"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              Currency
            </a>
          </h3>
        </div>
        <div className="link px-3">
          <h3>
            <a
              className="navbar-brand fs-3"
              href="#"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              Commodity
            </a>
          </h3>
        </div>
      </nav>
    </div>
  );
}

export default Links;
