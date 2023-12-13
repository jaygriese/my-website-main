import React, { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

type ImageSlideProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSlideProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }

  useEffect(() => {
    let timeoutId;

    if (autoPlay) {
      timeoutId = setTimeout(() => {
        showNextImage();
      }, 2200); // Adjust the auto slide interval in milliseconds
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [imageIndex, autoPlay]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        // outline: "3px solid orange",
      }}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeoutId);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          objectPosition: "74% 33%",
          objectFit: "contain",
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{
          
              transform: `translateX(${-100 * imageIndex}%)`,
            }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: ".25rem",
          visibility: "hidden",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
