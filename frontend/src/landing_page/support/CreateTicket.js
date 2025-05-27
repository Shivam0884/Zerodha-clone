import React from "react";

function CreateTicket() {
  return (
    <div className="container createTicket">
      <div className="row" style={{ marginLeft: "80px" }}>
        <p className="fs-4 text muted mt-5 text-muted">
          To create a ticket, select a relevant topic
        </p>
        <div className="col-4 mt-3 mb-5">
          <p className="fs-5 account">
            <a href="#">
              <i class="fa-solid fa-circle-plus"></i> &nbsp;Account opening
            </a>
          </p>
          <div className="links">
            <a href="#">Getting started</a>
            <br />
            <a href="#">Online</a>
            <br />
            <a href="#">offline</a>
            <br />
            <a href="#">Charges</a>
            <br />
            <a href="#">Company,Partnership and HUF</a>
            <br />
            <a href="#">Non Residental Indian(NRI) </a>
          </div>
          <p className="fs-5 account mt-5">
            <a href="#">
              <i class="fa-regular fa-envelope" /> &nbsp;Funds
            </a>
          </p>
          <div className="links">
            <a href="#">Fund withdrawl</a>
            <br />
            <a href="#">Adding fund</a>
            <br />
            <a href="#">Adding bank account</a>
            <br />
            <a href="#">eMandates</a>
            <br />
          </div>
        </div>
        <div className="col-4 mt-3 mb-5">
          <p className="fs-5 account">
            <a href="#">
              <i class="fa-regular fa-user"></i> &nbsp;Your Zerodha Account
            </a>
          </p>
          <div className="links">
            <a href="#">Login credentials</a>
            <br />
            <a href="#">Your Profile</a>
            <br />
            <a href="#">Account modification and segment addition</a>
            <br />
            <a href="#">CMR & DP ID</a>
            <br />
            <a href="#">Nomination</a>
            <br />
            <a href="#">Transfer and conversion of shares</a>
          </div>
          <p className="fs-5 account mt-5">
            <a href="#">
              <i class="fa-solid fa-bullseye"></i> &nbsp;Console
            </a>
          </p>
          <div className="links">
            <a href="#">IPO</a>
            <br />
            <a href="#">Portfolio</a>
            <br />
            <a href="#">Funds statement</a>
            <br />
            <a href="#">Profile</a>
            <br />
            <a href="#">Reports</a>
            <br />
            <a href="#">Referral program</a>
          </div>
        </div>
        <div className="col-4 mt-3 mb-5">
          <p className="fs-5 account">
            <a href="#">
              <i class="fa-solid fa-chart-simple"></i> &nbsp;Trading and Markets
            </a>
          </p>
          <div className="links">
            <a href="#">Tradinf FAQs</a>
            <br />
            <a href="#">Kite</a>
            <br />
            <a href="#">Margins</a>
            <br />
            <a href="#">Product and order types</a>
            <br />
            <a href="#">Corporate actions</a>
            <br />
            <a href="#">Kite features</a>
          </div>
          <p className="fs-5 account mt-5">
            <a href="#">
              <i class="fa-solid fa-bullseye"></i> &nbsp;Coin
            </a>
          </p>
          <div className="links">
            <a href="#">Understanding mutual funds and Coin</a>
            <br />
            <a href="#">Coin app</a>
            <br />
            <a href="#">Coin web</a>
            <br />
            <a href="#">Transaction and reports</a>
            <br />
            <a href="#">National Pansion Scheme (NPS)</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
