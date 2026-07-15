import React from "react"
import { Link } from "react-router-dom"
import foto from "../assets/images/image-amy.webp"
import Button from "./UI/Buttons";









export default function Information(){
    return (
        <section className="information_Amy ">
            <div className="wrapper__photo--info container">
                <div className="photo__container">
                  <img src={foto} alt="Amy's photo" />
               </div>
               <div className="info__container">
                    <h2 className="title__info text-preset-2">I'm Amy, and I'd love to work on your next project</h2>
                    <p className="text_info text-preset-4"> I love working wiht others to create beautiful design solution. I've designed everything from brand illustrations to ocmplete mobile apps. I'm also handy with a camera!</p>
             
            <Link to="/consultation" className="button__consultation">
                <Button variant="primary">
                    Free Consultation
                </Button>
            </Link>
        </div>
    </div>
           
</section>
    )
}