import React, { useState } from 'react';
import './ComparePic.css';

function PictureCompare({pic1, pic2}) {
  return (
    <div className="ComparisonPage">
      <div className="picture-container">
        <div className="picture">
          <img src="left_picture.jpg" alt="Left Picture" />
          <p>왼쪽</p>
        </div>
        <div className="picture">
          <img src="right_picture.jpg" alt="Right Picture" />
          <p>오른쪽</p>
        </div>
      </div>
    </div>
  );
}

export default PictureCompare;