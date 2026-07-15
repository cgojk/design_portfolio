import React from "react"
import { Link } from "react-router-dom"
import Button from "./UI/Buttons";



export default function Booking() {
    return (
 
          
            <section className="Booking__section ">
                <div className="Booking__container">
                    <h2 className="title__booking text-preset-2">Book a call with me</h2>
                    <p className="text_booking text-preset-4"> I'd love to have a chat
                         to see how I can help you. The best first steps is 
                        for us to discuss your project during a
                         free consultation. 
                         Then we can move foward from there.</p>
             
            <Link to="/consultation" className="button__consultation">
                <Button variant="primary ">
                    Free Consultation
                </Button>
            </Link>
        </div>

          
        </section>   
          
     
    )
}