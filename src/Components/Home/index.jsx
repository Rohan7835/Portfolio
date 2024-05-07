import React from "react";

const Home = () => {
  return (
    <div className="scroll-container">
      <div className="flex scroll-animate h-100">
        <div className="hero-section scroll-up-tag">
          <div className=" hero-support-text left">We are</div>
          <div className="hero-name">Techmate</div>
          <div className="hero-support-text right">your web developer</div>
        </div>
      </div>
      <div className="flex scroll-animate h-100">
        <div className="hero-section scroll-up-tag">
          <div className=" hero-support-text left">I am</div>
          <div className="hero-name">PROJECTS</div>
          <div className="hero-support-text right">your web developer</div>
        </div>
      </div>
      <div className="flex scroll-animate h-100">
        <div className="hero-section scroll-up-tag">
          <div className=" hero-support-text left">I am</div>
          <div className="hero-name">CONTACT</div>
          <div className="hero-support-text right">your web developer</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
