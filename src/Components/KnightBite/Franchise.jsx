import React, { useRef, useEffect } from "react";
import "./franchise.css";

const Franchise = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const onCanPlay = () => console.log("Video can play (canplay)");
    const onError = (e) => console.warn("Video error", e);

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("error", onError);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="franchise-container">
      <video
        ref={vidRef}
        className="franchise-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls 
      >
        <source src="/videos/knightbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="franchise-content">
        <h1>FRANCHISE WITH KNIGHT BITE</h1>
        <p>Get started with the modern way of doing business</p>

        <button className="apply-btn">APPLY NOW</button>
      </div>
    </div>
  );
};

export default Franchise;
