// components/NotificationBar.tsx
"use client";

import React, { useState, useEffect } from 'react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 40000); // Show after 30 seconds

    let hideTimer: NodeJS.Timeout;
    if (isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Hide after 3 seconds
    }

    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black p-4 flex justify-between items-center z-50 shadow-lg">
      <div className="flex items-center">
        <img src="/scooter-svgrepo-com.svg" alt="Scooter" className="w-8 h-8 mr-2" />
        <p className="text-lg font-semibold">
          Ready to rent a scooter? Call Now!
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-black font-bold text-xl ml-4"
      >
        &times;
      </button>
    </div>
  );
};

export default NotificationBar;
