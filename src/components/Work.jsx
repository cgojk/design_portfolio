

import { useState } from "react";
import {imagesData} from "../ImagesData";
import { useEffect } from "react";

import arrowPrevious from "../assets/images/icon-arrow-left.svg";
import arrowNext from "../assets/images/icon-arrow-right.svg";




export default function ImagesBox() {
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

     useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

const [currentImageIndex, setCurrentImageIndex] =  useState(0);

console.log(currentImageIndex);
console.log(imagesData[currentImageIndex].imageSrc);

// previous and next navigaiton handlers
const handlePreviousClick = () => {
    setCurrentImageIndex(
        currentImageIndex === 0 ? imagesData.length - 1 : currentImageIndex - 1
    );
};

const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagesData.length);
};

useEffect(() => {
    const timer = setTimeout(() => {
        handleNextClick();
    }, 5000);

    return () => clearTimeout(timer);
},
[currentImageIndex]);

     console.log(currentImageIndex);

const visibleImages = [];

for (let i = 0; i < 4; i++) {
  visibleImages.push(
    imagesData[(currentImageIndex + i) % imagesData.length]
  );
}

return (
<section className="images-boxContent">

    <section className="wrapper__images">
 <div className="image-carousel">
          

             {isLargeScreen ? (
  <div className="image-container desktop">
    {visibleImages.map((image) => (
      <div className="image-slide" key={image.id}>
        <img src={image.imageSrc} alt={image.alt} />
      </div>
    ))}
  </div>
) : (
  <div
    className="image-container mobile"
    style={{
      transform: `translateX(calc(-${currentImageIndex * 85}% - ${currentImageIndex * 16}px))`,
    }}
  >
    {imagesData.map((image) => (
      <div className="image-slide" key={image.id}>
        <img src={image.imageSrc} alt={image.alt} />
      </div>
    ))}
  </div>
)}   

     


              
    </div>

       
        <div className="wrapper__buttons">
                <button className="nav-button left" onClick={handlePreviousClick}>
                    <img src={arrowPrevious} alt="Previous" />
                </button>

                  <button className="nav-button right" onClick={handleNextClick}>
                    <img src={arrowNext} alt="Next" />
                </button>
        </div>
    </section>

       


</section>


)
}