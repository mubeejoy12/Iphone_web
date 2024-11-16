import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
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
