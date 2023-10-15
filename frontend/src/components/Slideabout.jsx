import { useEffect, useState } from "react";
const Slider = () => {
    const [position, setPosition] = useState(0);
  
    useEffect(() => {
      const scrollInterval = setInterval(() => {
        setPosition(prevPosition => {
          const newPosition = prevPosition - 1;
          return newPosition <= -1500 ? 0 : newPosition; 
        });
      }, 10);       
  
      return () => clearInterval(scrollInterval);
    }, []);
      
    return (
        <div className="flex flex-row gap-20  container pt-16 pb-16" style={{ transform: `translateX(${position}px)` }}>
            <div className="flex-shrink-0 item ">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">0+</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>
            <div className="flex-shrink-0  item">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">1+</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>
            <div className="flex-shrink-0  item">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">1 Mission</p>
                <p className="text-white text-base">Make It Memorable</p>
            </div>
            <div className="flex-shrink-0  item">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">2+</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>
            <div className="flex-shrink-0  item"  >
                <p className="text-5xl font-bold text-violet-600 flex justify-center">5+</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>
            <div className="flex-shrink-0  item">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">4</p>
                <p className="text-white text-base">Make It Memorable</p>
            </div>
            <div className="flex-shrink-0  item">
                <p className="text-5xl font-bold text-violet-600 flex justify-center">5</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>
            <div className="flex-shrink-0  item"  >
                <p className="text-5xl font-bold text-violet-600 flex justify-center">6</p>
                <p className="text-white text-base">Cummulative Years of Experience</p>
            </div>

        </div>
    );  
}

export default Slider
    ;