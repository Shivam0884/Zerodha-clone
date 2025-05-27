import React from "react";

function Notfound() {
  return (
    <div className="container ">
      {/* text-center in bootstrap  */}
      <div className="row text-center mt-5 p-5">
        <h2 className="mb-3 ">404 Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default Notfound;
