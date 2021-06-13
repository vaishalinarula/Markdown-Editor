import React from "react";

const Section = () => {
  return (
    <div>
      <div className="flex pt-6 px-6">
        <div className="w-80">
          <h3 className="text-blue-600 font-semibold">Sections</h3>
          <h4 className=" text-xs leading-6 text-gray-900">
            Click on a section below to edit the contents
          </h4>
        </div>
        <div className="flex flex-1">
          <div className="w-1/2 px-3">
            <h3 className="text-blue-600 font-semibold">Editor</h3>
          </div>
          <div className="px-3">
            <h3 className="text-blue-600 text-initial font-semibold focus:outline-none outline-none hover:text-blue-700 ">
              Preview
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
