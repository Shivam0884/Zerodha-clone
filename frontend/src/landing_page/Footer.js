import React from "react";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250,250,250" }}
    >
      <div className="container  footer  mt-3">
        <div className="row mt-5">
          <div className="col" style={{ marginLeft: "80px" }}>
            <img src="media\logo.svg" alt="logo" style={{ width: "50%" }} />
            <p
              className="mt-3 text-muted fw-medium"
              style={{ fontSize: "14px" }}
            >
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
            <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <br />
            <hr />
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </div>
          <div className="col series " style={{ marginLeft: "10px" }}>
            <h5>Company</h5>
            <a className=" fw-medium " href="#">
              About
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Products
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Pricing
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Referral programme
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Careers
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Zerodha.tech
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Open source
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Press & media
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Zerodha Cares (CSR)
            </a>
          </div>

          <div className="col series">
            <h5>Support</h5>
            <a className="fw-medium" href="#">
              Contact us
            </a>
            <br />
            <a className=" fw-medium " href="#">
              Support portal
            </a>
            <br />
            <a className="fw-medium" href="#">
              Z-Connect blog
            </a>
            <br />
            <a className=" fw-medium" href="#">
              List of charges
            </a>
            <br />
            <a className=" fw-medium" href="#">
              Downloads & resources
            </a>
            <br />
            <a className=" fw-medium" href="#">
              Videos
            </a>
            <br />
            <a className=" fw-medium" href="#">
              Market overview
            </a>
            <br />
            <a className=" fw-medium" href="#">
              How to file a complaint?
            </a>
            <br />
            <a className=" fw-medium" href="#">
              Status of your complaints
            </a>
          </div>
          <div className="col series ">
            <h5>Account</h5>
            <a className=" fw-medium " href="#">
              Open an account
            </a>
            <br />
            <a className="fw-medium " href="#">
              Fund transfer
            </a>
          </div>
        </div>
        <div className="row pt-5">
          <div style={{ marginLeft: "80px" }}>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through <br />
              Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th
              <br /> Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to -
              <a href="#">complaints@zerodha.com</a>, for DP related to{" "}
              <a href="#">dp@zerodha.com</a>. Please ensure you carefully read
              the Risk
              <br /> Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy
              <br /> redressal of the grievances
            </p>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              <a href="#">
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </a>
            </p>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker /<br /> depository participant and
              receive OTP directly from depository on your e-mail and/or mobile
              number to create pledge. 3) Check your securities / MF / bonds in
              the consolidated account statement issued by NSDL/CDSL
              <br /> every month.
            </p>
            <p className="text-muted fw-normal" style={{ fontSize: "11px" }}>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the
              <br /> day. Issued in the interest of investors. KYC is one time
              exercise while dealing in securities markets - once KYC is done
              through a SEBI registered intermediary (broker, DP, Mutual Fund
              etc.), you need not undergo the same
              <br />
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to
              <br /> authorize your bank to make payment in case of allotment.
              In case of non allotment the funds will remain in your bank
              account. As a business we don't give stock tips, and have not
              authorized anyone to trade on behalf of
              <br /> others. If you find anyone claiming to be part of Zerodha
              and offering such services, please{" "}
              <a href="#"> create a ticket here</a>.
            </p>
          </div>
        </div>
        <div className="linkss text-center pb-3">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & conditons</a>
          <a href="#">Policies & procedure</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
