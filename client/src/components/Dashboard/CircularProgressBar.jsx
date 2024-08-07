import React from 'react';

const CircularProgressBar = ({ value, max, size, strokeWidth, color }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        strokeWidth={strokeWidth}
        className="text-red-500"
        stroke="currentColor"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={color}
        stroke="currentColor"
        style={{ transition: 'stroke-dashoffset 0.3s' }}
      />
    </svg>
  );
};

export default CircularProgressBar;