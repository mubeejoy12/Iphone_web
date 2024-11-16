import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

// import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { hightlightsSlides } from "../constant";
