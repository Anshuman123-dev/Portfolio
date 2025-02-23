import React from 'react';


const NumberDisplay = () => {
  // Define the center and radius for the semi-circular arc
  const cx = 300; // Center x-coordinate (half of container width)
  const cy = 450; // Center y-coordinate (slightly below container to position arc at top)
  const r = 250;  // Radius for the arc and button positions

  // Tick marks: 13 ticks from -60° to 60° in 10° increments
  const tickAngles = Array.from({ length: 13 }, (_, i) => -60 + i * 10);

  // Buttons: Angles for the 5 buttons (-45°, -15°, 0°, 15°, 45°)
  const buttonAngles = [-45, -15, 0, 15, 45];
  const buttonNumbers = ['7', '8', '8', '9', '10']; // Numbers for each button

  return (
    <div className="container">
      {/* Render tick marks along the semi-circular arc */}
      {tickAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180; // Convert angle to radians
        const x = cx + r * Math.sin(rad);    // Calculate x-position
        const y = cy - r * Math.cos(rad);    // Calculate y-position (y increases downward in CSS)
        return (
          <div
            key={`tick-${i}`}
            className="tick"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          />
        );
      })}

      {/* Render buttons: central pill and circular buttons */}
      {buttonAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = cx + r * Math.sin(rad);
        const y = cy - r * Math.cos(rad);
        const isCentral = i === 2; // Central pill at index 2
        return (
          <div
            key={`button-${i}`}
            className={isCentral ? 'pill' : 'circle'}
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            {buttonNumbers[i]}
          </div>
        );
      })}
    </div>
  );
};

export default NumberDisplay;