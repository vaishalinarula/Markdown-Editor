import React from "react";

const Section = () => {
  return (
    <div>
      <div class="flex pt-6 px-6">
        <div class="w-80">
          <h3 class="text-blue-600 font-semibold">Sections</h3>
          <h4 class=" text-xs leading-6 text-gray-900">
            Click on a section below to edit the contents
          </h4>
        </div>
        <div class="flex flex-1">
          <div class="w-1/2 px-3">
            <h3 class="text-blue-600 font-semibold">Editor</h3>
          </div>
          <div class="px-3">
            <button class="text-blue-600 text-initial font-semibold focus:outline-none outline-none hover:text-blue-700 cursor-pointer">
              Preview
            </button>
            <button class="pl-3 text-gray-500 font-semibold focus:outline-none outline-none hover:text-gray-700 cursor-pointer">
              Raw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
