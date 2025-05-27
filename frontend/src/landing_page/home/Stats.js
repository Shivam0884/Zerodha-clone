import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-4">
        <div className="col-6 p-5">
          <h1>Trust with confidence</h1>
          <h5 className="mt-5">Customer-first always</h5>
          <p className="mt-2 text-muted ">
            That's why 1.5+ crore customers trust Zerodha with <br />
            ₹4.5+ lakh crores of equity investments and contribute to <br />
            15% of daily retail exchange volumes in India.
          </p>
          <h5 className="mt-4 ">No spam or gimmicks</h5>
          <p className="mt-2 text-muted">
            No gimmicks, spam, "gamification", or annoying push <br />
            notifications. High quality apps that you use at your pace,
            <br /> the way you like.
          </p>
          <h5 className="mt-4">The Zerodha universe</h5>
          <p className="mt-2 text-muted">
            Not just an app, but a whole ecosystem. Our investments <br />
            in 30+ fintech startups offer you tailored services <br />
            specific to your needs.
          </p>
          <h5 className="mt-4">Do better with money</h5>
          <p className="mt-2 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            <br />
            facilitate transactions, but actively help you do better
            <br /> with your money.
          </p>
        </div>

        <div className="col-6">
          <img
            src="media\ecosystem.png"
            style={{ width: "90%" }}
            className="mt-5 ml-5"
          />
          <div className="links mt-4 text-center">
            <a
              href="# "
              className="mx-5 "
              style={{ textDecoration: "none", fontSize: "17px" }}
            >
              Explore our products&nbsp;<i class="fa-solid fa-arrow-right "></i>
            </a>
            <a href="# " style={{ textDecoration: "none", fontSize: "17px" }}>
              Try Kite demo &nbsp;
              <i class="fa-solid fa-arrow-right "></i>
            </a>
          </div>
        </div>
        <img
          src="media\pressLogos.png"
          alt="news"
          style={{ width: "60%" }}
          className=" mx-auto"
        />
      </div>
    </div>
  );
}

export default Stats;
