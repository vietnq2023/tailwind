import React from "react";

const Gradient = () => {
  return (
    <div>
      <div className="mb-10 p-10 w-1/2 bg-gradient-to-r from-gray-50 to-black">
        <button className="mx-10 p-10 bg-white">One</button>
        <button className="mx-10 p-10 bg-white">Two</button>
      </div>

      <div className="mb-10 p-10 w-1/2 bg-gradient-to-r from-gray-50 via-black to-gray-50">
        <button className="mx-10 p-10 bg-white">Three</button>
        <button className="mx-10 p-10 bg-white">Four</button>
      </div>
    </div>
  );
};

export default Gradient;
