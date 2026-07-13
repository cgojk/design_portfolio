import React from "react";
import Features from "./components/Features";
import Information from "./components/Information";

export default function Home() {
  return (
    <section className="home container">
      <h1>Design solutions made easy</h1>
      <p>With over ten year of experience in various deisng disciplines. I'm your one -stop shop for your design needs.</p>
      <Features />
        <Information />
    </section>
  );
}
