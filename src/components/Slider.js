import React, { useState, useEffect } from "react";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";

// Import statements...

const Slider = () => {
    const [imageIndex, setImageIndex] = useState(1);
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
      "LAW FIRM MOST FEARED GLOBALLY BY LARGE BUSINESSES BTI CONSULTING GROUP SURVEY",
      "A GlOBAL FORCE IN BUSINESS ILITIGATION THE WALL STREET JOURNAL"
    ];
    const [currentText, setCurrentText] = useState(texts[0]);
  
    useEffect(() => {
      const imageSwitchTimer = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex % 3) + 1);
        setTextIndex((prevIndex) => (prevIndex % 3) + 1);
      }, 5000); // Switch every 5 seconds
  
      return () => clearInterval(imageSwitchTimer);
    }, []);
  
    useEffect(() => {
      setCurrentText(texts[textIndex - 1]);
    }, [textIndex]);
  
    const words = currentText ? currentText.split(" ") : [];
  
    return (
      <div
        className="hero-section transition-opacity duration-1000 ease-in-out"
        style={{
          position: "relative", // Set position to relative
          zIndex: -1, // Set z-index to 0
          backgroundImage: `url(${getImagePath(imageIndex)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          transition: "background-image 1s ease-in-out"
        }}
      >
        <div
          className="text-container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            transition: "opacity 1s ease-in-out",
            zIndex: 1, // Set z-index to 1
          }}
        >
          <div className="text-container">
            <p className="text">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`word-${index === 1 || index === 2 ? "even" : "odd"} ${
                    word.toUpperCase() === "WALL" ? "wall-street" : ""
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  // Function to get the correct image path based on the index
  const getImagePath = (index) => {
    switch (index) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      default:
        return image1;
    }
  };
  
  export default Slider;
  