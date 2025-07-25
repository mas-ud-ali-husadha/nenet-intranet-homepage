'use client';
import React, { useState, useEffect } from 'react';

const WeeklyProgress = () => {
  const [progress, setProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const targetProgress = 52;
  const radius = 70;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const dotAngle = (progress / 100) * (2 * Math.PI);
  const dotX = radius + normalizedRadius * Math.sin(dotAngle);
  const dotY = radius - normalizedRadius * Math.cos(dotAngle);

  useEffect(() => {
    const entryTimer = setTimeout(() => {
      setStartAnimation(true);

      let currentProgress = 0;
      const progressInterval = setInterval(() => {
        currentProgress += 1;
        if (currentProgress > targetProgress) {
          clearInterval(progressInterval);
        } else {
          setProgress(currentProgress);
        }
      }, 15); 
    }, 500);

    return () => {
      clearTimeout(entryTimer);
    };
  }, []); 

  return (
    <>
      <div className={`flex md:flex-col items-center justify-center mx-auto h-fit w-fit px-2 py-4 rounded-2xl bg-card text-foreground ${startAnimation ? 'animate' : ''}`}>
        <div className="relative container-fade-in">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            <circle
              stroke="var(--color-btn-2)"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              className="progress-circle"
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              style={{ strokeDashoffset }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d293d" />
                <stop offset="100%" stopColor="#62748e" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold progress-text">
              {Math.round(progress)}%
            </span>
          </div>

          <div
            className="absolute w-3 h-3 bg-card outline-4 outline-slate-500 rounded-full progress-dot"
            style={{
              top: `${dotY - 6}px`,
              left: `${dotX - 6}px`, 
              willChange: 'transform, opacity', 
            }}
          />
        </div>

        <div className="text-center info-text">
          <h3 className="text-sm font-bold mb-1">
            Weekly progress
          </h3>
          <p className="text-xs">
            3/6 tasks done
          </p>
        </div>
      </div>
    </>
  );
};

export default WeeklyProgress;
