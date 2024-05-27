import React, { useEffect, useState } from 'react';

const FrameComponent1 = ({ className = "" }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    // Calculate the size of the blue circle
    const blueCircle = document.getElementById('blueCircle');
    const blueCircleWidth = blueCircle.offsetWidth;

    // Set the size of the new circle to be 1.5 times the size of the blue circle
    setCircleSize(blueCircleWidth * 1.5);
  }, []);

  const circleStyle1 = {
    position: 'absolute', // Set position to absolute
    width: '100%', // Example width
    height: '100%', // Example height
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 100, 201, 1)', // steelblue with opacity
    animation: 'scaleUp1 5s infinite', // Apply the new animation
    zIndex: 9,
  };

  const circleStyle2 = {
    ...circleStyle1, // Inherit common styles
    animation: 'scaleUp2 2.5s infinite', // Apply the new animation
    backgroundColor: 'rgba(0, 128, 201, 1)', // steelblue with opacity
    zIndex: 8,
  };

  const keyframes = `
    @keyframes scaleUp1 {
      0%, 100% { transform: scale(1.8); }
      20% { transform: scale(2.1); }
      40% { transform: scale(1.95); }
      60% { transform: scale(2); }
      90% { transform: scale(1.7); }
    }
    @keyframes scaleUp2 {
      0%, 100% { transform: scale(2.3); }
      20% { transform: scale(2.5); }
      40% { transform: scale(2.3); }
      60% { transform: scale(2.7); }
      100% { transform: scale(2.3); }
    }
  `;

  return (
    <div
      className={`w-[23.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[0.563rem] text-white font-inter ${className}`}
    >
      <div className="h-[5rem] w-[5rem] relative">
        <b className="absolute top-[3.34rem] left-[1.5rem] font-bold inline-block w-[2rem] h-[1rem] min-w-[2rem] z-[11]">
          747
        </b>
        <div className="absolute top-[0rem] left-[0rem] w-full h-full">
          <div className="absolute top-0 left-0 w-20 h-20 z-[0]" id="blueCircle" style={{ borderRadius: '50%', backgroundColor: 'rgba(0, 128, 201, 1)', border: '25px solid white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
          <img
            className="absolute top-[1rem] left-[1.5rem] w-[2rem] h-[2rem] object-contain z-[11]"
            loading="lazy"
            alt=""
            src="/bus-1@2x.png"
          />
          <img
            className="absolute top-[3.438rem] left-[3rem] w-[0.438rem] h-[0.563rem] object-contain z-[11]"
            loading="lazy"
            alt=""
            src="/plane-1@2x.png"
          />
          <style>
            {keyframes}
          </style>
          {/* Blue Circle with Scaling Animation */}
          <div style={circleStyle1}></div>
          <div style={circleStyle2}></div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
