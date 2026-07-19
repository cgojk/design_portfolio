import React from "react";
import Features from "./components/Features";
import Information from "./components/Information";
import Work from "./components/Work";
import Booking from "./components/Booking";

export default function Home() {
  return (
    <section className="home">
      <div className="container hero">
        <h1 className="title__home text-present-1">
          Design solutions made easy
        </h1>

        <p className="description__home text-present-5">
          With over ten years of experience in various design disciplines,
          I'm your one-stop shop for your design needs.
        </p>
      </div>
        <div className="home-content">
          <Features />
          <Information />
          <Work/>
          <Booking />
       </div>
    </section>
  );
}
