import React from "react";

function Cast({ cast }) {
  return (
    <>
      <h2 className="text-3xl py-4">Casts</h2>
      <div className="relative flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="w-full h-full">
          {cast.map((person, index) => (
            <div key={person.id} className="relative w-[100px] inline-block rounded-md shadow-md text-center overflow-hidden m-2">
              <img
                src={`https://media.themoviedb.org/t/p/w138_and_h175_face${person.profile_path}`}
                alt={`${person.name}`}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="font-semibold">
                  {person.character}
                </h2>
                <h2 className="font-semibold text-gray-400">{person.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cast;
