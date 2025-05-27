import React from "react";

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row  mt-2">
        <div className="col-8 p-4">
          <div className="text-center">
            <h4>
              <a href="#" style={{ textDecoration: "none" }}>
                Brokerage Calculator
              </a>
            </h4>
          </div>
          <div className="p-4" style={{ marginLeft: "20px" }}>
            <ul style={{ lineHeight: "2.5" }} className="text-muted">
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.{" "}
              </li>

              <li>Digital contract notes will be sent via e-mail. </li>

              <li>
                Physical copies of contract notes, if required, shall be charged
                20 per contract note. Courier charges apply.{" "}
              </li>

              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).{" "}
              </li>

              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).{" "}
              </li>

              <li>
                If the account is in debit balance, any order placed will be
                charged 40 per executed order instead of 20 per executed order.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 p-4">
          <h4>
            <a href="#" style={{ textDecoration: "none" }}>
              List of charges
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
