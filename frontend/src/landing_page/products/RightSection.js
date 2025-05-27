import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "80px" }}>
        <div
          className="col-6 mt-5"
          style={{
            paddingLeft: "150px",
            width: "500px",
            paddingTop: "100px",
          }}
        >
          <h2 style={{ color: "#444444" }}>{productName}</h2>
          <br />
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more &nbsp; <i class="fa-solid fa-arrow-right "></i>
          </a>
        </div>
        <div
          className="col-6"
          style={{
            paddingLeft: "80px",
          }}
        >
          <a href="#">
            <img src={imageURL} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
