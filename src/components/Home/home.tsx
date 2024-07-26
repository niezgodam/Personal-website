import { ThreeDCardDemo } from "./card";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffectDemo } from "./text";
import '../ui/text.css'



export default function Home(){

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from('.card',{
            xPercent: 110,
           duration: 2,
           opacity: 0,
        })

    })

    return (
        <div className="h-[90vh] w-full flex">
            <div className="flex items-center justify-center w-full h-full">
                <div className="">
                    <TextGenerateEffectDemo words={"Michał"} />
                    <TextGenerateEffectDemo words={"Niezgoda"} />
                </div>
            </div>
            <div className="w-full h-full card">
                <ThreeDCardDemo/>
            </div>
        </div>
    );
}