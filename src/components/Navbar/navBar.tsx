import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Navbar(){

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from('.navbar',{
           y: 200,
           duration: 1,
        })

    })

    return(
        <nav className="font-bold w-full h-[10vh] p-4 navbar">
            <div className="w-full h-full text-white rounded-full">
                <ul className="flex justify-center items-center h-full shadow-lg shadow-[#27bc8e] rounded-full">
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Home</li>
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Education</li>
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Skillset</li>
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Projects</li>
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Contact</li>
                    <li className="text-white text-xl hover:text-3xl cursor-pointer mx-[5%] ease-in-out duration-300">Links</li>
                </ul>
            </div>
        </nav>
    );
}
