import React from "react";

function People() {
  return (
    <div className="container people mb-5">
      <div className="row">
        <h2 className="mt-3 text-center">People</h2>
        <div
          className="col-6 mt-3 text-center"
          style={{ paddingLeft: "170px" }}
        >
          <img src="media\nithinKamath.jpg" className="founder mt-5 mb-3" />
          <h5>Nithin Kamath</h5>
          <p className="mt-4 text-muted">Founder, CEO</p>
        </div>
        <div
          className="col-6 "
          style={{
            paddingLeft: "20px",
            fontSize: "17px",
            marginTop: "60px",
          }}
        >
          <p className="mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br />
            hurdles he faced during his decade long stint as a trader. Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#"> Homepage </a> / <a href="#">TradingQnA</a> /
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
