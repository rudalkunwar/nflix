import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function Slider({ shiftval, onShiftChange }) {
  const leftShift = () => {
    if (shiftval === 0) return false;
    onShiftChange(shiftval - 3);
  };

  const rightShift = () => {
    if (shiftval === 12) return false;
    onShiftChange(shiftval + 3);
  };

  return (
    <>
      <button className="h-full px-2 absolute left-0 hidden lg:block" onClick={leftShift}>
        <RiArrowLeftSLine size={50} className="text-gray-400" />
      </button>
      <button className="h-full px-2 absolute right-0 hidden lg:block" onClick={rightShift}>
        <RiArrowRightSLine size={50} className="text-gray-400" />
      </button>
    </>
  );
}

export default Slider;
