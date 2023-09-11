import React from "react";

const Grid = () => {
  return (
    // <div className="grid grid-cols-2 w-1/4 gap-4">
    //   <div className="border bg-gray-300 text-center">A</div>
    //   <div className="border bg-gray-300 text-center">B</div>
    //   <div className="border bg-gray-300 text-center">C</div>
    //   <div className="border bg-gray-300 text-center">D</div>
    // </div>
    // <div className="grid grid-rows-2 w-1/4 gap-4 grid-flow-col">
    //   <div className="border bg-gray-300 text-center">A</div>
    //   <div className="border bg-gray-300 text-center">B</div>
    //   <div className="border bg-gray-300 text-center">C</div>
    //   <div className="border bg-gray-300 text-center">D</div>
    // </div>
    <div className="grid grid-cols-2 w-1/4 gap-4 grid-flow-row">
      <div className="col-start-1 col-end-2 border bg-gray-300 text-center">
        A
      </div>
      <div className="border bg-gray-300 text-center">B</div>
      <div className="border bg-gray-300 text-center">C</div>
      <div className="border bg-gray-300 text-center">D</div>
    </div>
  );
};

export default Grid;
