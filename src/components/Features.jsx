import React from "react"
import { Link } from "react-router-dom"


const  graphicDesign = ("/assets/images/pattern-graphic-design.svg");


 const uiUx = ("../assets/images/pattern-ui-ux.svg");
const apps =("../assets/images/pattern-apps.svg");
const illustrations= ("../assets/images/pattern-illustrations.svg");
const motion = ( "../assets/images/pattern-motion-graphics.svg");
const fotography= ("../assets/images/pattern-photography.svg");




export default function Features(){
    return (
        <section className="features">
            <div className="features__container container">
                <div className="features__item graphic">
                    <img src={graphicDesign} className="features__image" loading="lazy" alt="graphic design pattern" />
                    <h2 className="features__title">Graphic Design</h2>
                </div>
                <div className="wrapper__ui_apps">
                        <div className="features__item ui">
                            <img src={uiUx} className="features__image" loading="lazy" alt="ui ux pattern" />
                            <h2 className="features__title">UI/UX</h2>
                        </div>
                        <div className="features__item apps">
                            <img src={apps} className="features__image" loading="lazy" alt="apps pattern" />
                            <h2 className="features__title">Apps</h2>
                        </div>
                </div>
              
                
                <div className="features__item illustrations">
                    <img src={illustrations} className="features__image" loading="lazy" alt="illustrations pattern" />
                    <h2 className="features__title">Illustrations</h2>
                </div>
                <div className="features__item fotography">
                    <img src={fotography} className="features__image" loading="lazy" alt="fotography pattern" />
                    <h2 className="features__title">Fotography</h2>
                </div>
                <div className="features__item motion">
                    <img src={motion} className="features__image" loading="lazy" alt="motion graphics pattern" />
                    <h2 className="features__title">Motion Graphics</h2>
                </div>
            </div>
        </section>
    )
}