import React from 'react'

function Genre({movie}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-2">
    <div>
      <h2 className="text-2xl font-semibold">Genres</h2>
      <ul className="flex flex-wrap gap-2 mt-4">
        {movie &&
          movie.genres.map((genre) => (
            <li
              key={genre.id}
              className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold"
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  </div>
  )
}

export default Genre