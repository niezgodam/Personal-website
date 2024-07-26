import { useState } from "react";
import Slider from "../ui/slider";
import { ExpandableCardDemo } from "./card";
import './education.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './education.css'

export default function Education() {
  const [triggerCard, setTriggerCard] = useState(null);

  const handleCardTrigger = (index) => {
    setTriggerCard(index);
  };

  const handleCardClose = () => {
    setTriggerCard(null);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.slider-container',
        start: 'top 110%',
        end: 'bottom 1%',
        scrub: 4,
        toggleActions: 'play none none reverse' 
      }
    });

    tl.from('.slider', {
        y: 500,
        x: -200,
        duration: 4,
        ease: "power3.inOut",
        autoAlpha: 0, 
      })
      .to('.slider', {
        y: 0,
        x: 0,
        autoAlpha: 1,
        duration: 3,
      })
      .to('.slider-container', {
        autoAlpha: 0, 
        duration: 1,
        ease: "power1.inOut"
      });

  }, []);

  return (
    <nav className="h-[90vh] w-full bg-black slider-container">
      <div className="w-[95%] h-[55px] bg-gray-500 mx-auto mb-4 line"></div>
      <div className="flex items-center justify-center">
        <h1 className="py-8 text-6xl text-education">Education</h1>
      </div>
      <div className="cursor-pointer slider">
        <Slider onCardClick={handleCardTrigger} />
        <ExpandableCardDemo triggerCard={triggerCard} onCardClose={handleCardClose} />
      </div>
    </nav>
  );
}
