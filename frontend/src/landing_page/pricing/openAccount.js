import React from "react";

function OpenAccount() {
  return (
    <div className="container Openaccount">
      {/* text-center in bootstrap  */}
      <div className="row text-center mt-5 p-5">
        <h2 className="mb-3 ">Open a Zerodha account</h2>
        <p className=" text-muted mt-2" style={{ fontSize: "17px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
        </p>
        <button
          className="p-2  btn btn-primary fs-5 mt-4 button"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
