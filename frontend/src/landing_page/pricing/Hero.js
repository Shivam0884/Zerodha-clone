import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center mb-5" style={{ marginTop: "100px" }}>
        <h1 style={{ color: "#444444" }}>Charges</h1>
        <h5 className="text-muted mt-3">List of all charges and taxes</h5>
      </div>
      <div className="row " style={{ marginTop: "180px" }}>
        <div className="col-4 text-center" style={{ paddingLeft: "70px" }}>
          <img src="media\pricingEquity.svg" style={{ width: "80%" }}></img>
          <h3 className="mt-3" style={{ color: "#444444" }}>
            Free equity delivery
          </h3>
          <p className="mt-5 text-muted" style={{ fontSize: "17px" }}>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center" style={{ paddingLeft: "10px" }}>
          {" "}
          <img src="media\intradayTrades.svg" style={{ width: "70%" }}></img>
          <h3 className="mt-2" style={{ color: "#444444" }}>
            Intraday and F&O trades
          </h3>
          <p className="mt-5 text-muted" style={{ fontSize: "17px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          {" "}
          <img src="media\pricingMF.svg" style={{ width: "67%" }}></img>
          <h3 className="mt-3" style={{ color: "#444444" }}>
            Free direct MF
          </h3>
          <p className="mt-5 text-muted" style={{ fontSize: "17px" }}>
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP
            <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
