

import { useState } from "react";
import {imagesData} from "../ImagesData";
import { useEffect } from "react";

import arrowPrevious from "../assets/images/icon-arrow-left.svg";
import arrowNext from "../assets/images/icon-arrow-right.svg";



export default function ImagesBox() {

const [currentImageIndex, setCurrentImageIndex] = useState(0);

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



return (
<section className="images-boxContent container">

    <section className="wrapper__images">
        <div className="image-carousel container">
            <div className="image-container">
               

                {imagesData.map((image, index) => (
                    <img 
                        src={image.imageSrc} 
                        alt={image.alt} 
                        className={ currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id} 
                    />
                ))}
        
              
            </div>

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