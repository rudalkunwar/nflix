// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="nfLoader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
      <div className="w-full h-full bg-center bg-no-repeat bg-cover animate-spin rounded-full" style={{ backgroundImage: `url('https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png')` }}></div>
    </div>
  );
};

export default Loader;
