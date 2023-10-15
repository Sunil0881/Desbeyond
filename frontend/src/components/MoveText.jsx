import React, { useEffect, useRef } from 'react';
import './MovingText.css';

function MovingText() {
  const contentRef = useRef(null);

  useEffect(() => {
    const contentElement = contentRef.current;

    const restartAnimation = () => {
      // Pause the animation
      contentElement.style.animationPlayState = 'paused';

      // Wait for a delay (e.g., 5 seconds)
      setTimeout(() => {
        // Restart the animation
        contentElement.style.animationPlayState = 'running';
      }, 5000); // Adjust the delay duration as needed (in milliseconds)
    };

    // Listen for animation iteration to restart the animation
    contentElement.addEventListener('animationiteration', restartAnimation);

    // Clean up the event listener
    return () => {
      contentElement.removeEventListener('animationiteration', restartAnimation);
    };
  }, []);

  return (
    <div className='text-white'>
      <div className='moving-text' ref={contentRef}>
        <div className='flex gap-4'>
          {/* Your content here */}
          <div className="flex-shrink-0 item ">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">0+</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          <div className="flex-shrink-0  item">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">1+</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          <div className="flex-shrink-0  item">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">1 Mission</p>
            <p className="text-white text-base">Make It Memorable</p>
          </div>
          <div className="flex-shrink-0  item">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">2+</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          <div className="flex-shrink-0  item"  >
            <p className="text-3xl font-bold text-violet-600 flex justify-center">3+</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          <div className="flex-shrink-0  item">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">4</p>
            <p className="text-white text-base">Make It Memorable</p>
          </div>
          <div className="flex-shrink-0  item">
            <p className="text-3xl font-bold text-violet-600 flex justify-center">5</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          <div className="flex-shrink-0  item"  >
            <p className="text-3xl font-bold text-violet-600 flex justify-center">6</p>
            <p className="text-white text-base">Cummulative Years of Experience</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MovingText;
