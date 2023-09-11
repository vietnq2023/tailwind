import React from "react";

const Flex = () => {
  return (
    <div className="flex">
      <div className="m-3 p-6 bg-blue-100 rounded-lg">
        <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
          “The success combination in business is: Do what you do better... and:
          do more of what you do.”
        </p>
        <span className="text-sm text-gray-500">VietBK</span>
      </div>

      <div className="m-3 p-6 bg-blue-100 rounded-lg">
        <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
          “Give out what you most want to come back.”
        </p>
        <span className="text-sm text-gray-500">VietBK</span>
      </div>

      <div className="m-3 p-6 bg-blue-100 rounded-lg">
        <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
          “You do not have to be great at something to start, but you have to
          start to be great at something.”
        </p>
        <span className="text-sm text-gray-500">VietBK</span>
      </div>
    </div>
  );
};

export default Flex;
