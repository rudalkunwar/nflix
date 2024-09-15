import React, { useState } from "react";
import Slider from '../slider/Slider'; // Import the Slider component

function Cast({ cast }) {
  const [shiftValue, setShiftValue] = useState(0); // State for the slider position

  return (
    <>
      <h2 className="text-3xl py-4">Casts</h2>
      <div className="relative overflow-hidden">
      <div className="relative flex items-center overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hidden">
          <div className="flex items-center space-x-4">
            {cast.slice(shiftValue, shiftValue + 8).map((person) => (
              <div key={person.id} className="relative w-[100px] inline-block rounded-md shadow-md text-center overflow-hidden m-2">
                <img
                  src={`https://media.themoviedb.org/t/p/w138_and_h175_face${person.profile_path}`}
                  alt={person.name}
                  className="w-full h-auto"
                />
                <div className="p-2">
                  <h2 className="font-semibold text-sm">
                    {person.character}
                  </h2>
                  <h2 className="font-semibold text-gray-400 text-xs">{person.name}</h2>
                </div>
              </div>
            ))}
          </div>
          <Slider 
            shiftval={shiftValue} 
            onShiftChange={setShiftValue} 
            maxShift={cast.length - 8} // Adjust maxShift based on the number of cast items
            step={1} // Shift by one item at a time
          />
        </div>
      </div>
    </>
  );
}

export default Cast;
