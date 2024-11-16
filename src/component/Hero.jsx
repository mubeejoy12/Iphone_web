import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videosrc, setVideosrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideosrc = () => {
    if (window.innerWidth < 760) {
      setVideosrc(smallHeroVideo);
    } else {
      setVideosrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideosrc);
    return () => {
      window.removeEventListener("resize", handleVideosrc);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iphone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videosrc}
            className="pointer-events-none"
          >
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
