import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row " style={{ marginTop: "100px" }}>
        <div
          className="col-6"
          style={{
            paddingLeft: "150px",
          }}
        >
          <a href="#">
            {" "}
            <img src={imageURL} />
          </a>
        </div>
        <div
          className="col-6 mt-3"
          style={{
            paddingLeft: "200px",
            width: "550px",
          }}
        >
          <h2 style={{ color: "#444444" }}>{productName}</h2>
          <br />
          <p>{productDescription}</p>
          <br />
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo &nbsp; <i class="fa-solid fa-arrow-right "></i>
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more &nbsp;<i class="fa-solid fa-arrow-right "></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg" />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={appStore}>
              <img src="media\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
