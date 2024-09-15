import React from "react";

function Info({ movie }) {
  return (
      <div>
        <h2 className="text-2xl font-semibold">More Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Release Date</h3>
            <p>{movie && movie.release_date}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Runtime</h3>
            <p>{movie && movie.runtime} minutes</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Budget</h3>
            <p>${movie && movie.budget.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p>${movie && movie.revenue.toLocaleString()}</p>
          </div>
        </div>
      </div>
  );
}

export default Info;
