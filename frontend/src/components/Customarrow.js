import React from 'react';

const CustomPrevArrow = (props) => (
  <div className="custom-arrow prev-arrow prev-arrow-overlay absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full" onClick={props.onClick}>
    <img src={props.arrowImage} className='rotate-90 h-12 cursor-pointer' alt="Previous" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow next-arrow next-arrow-overlay absolute top-1/2 transform -translate-y-1/2 right-0 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full" onClick={props.onClick}>
    <img src={props.arrowImage} className='-rotate-90 h-12 cursor-pointer' alt="Next" />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
