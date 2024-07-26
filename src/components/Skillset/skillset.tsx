import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Skillset() {
    
    gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-skillset',
        start:'top 90%',
        end:'end 50%',
        scrub: 4,
      }
    });
    tl1.from('.react', { x: 250, duration: 5,delay: 2 })
       .from('.java', { y: 200, duration: 5,delay: 2 })
       .from('.django', { x: 500, duration: 5,delay: 2 });


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-skillset',
        start:'top 90%',
        end:'end 50%',
        scrub: 4,
      }
    });
    tl2.from('.dsa', { x: 250, duration: 5,delay: 2 })
       .from('.tailwind', { y: 200, duration: 5,delay: 2 })
       .from('.css', { x: 50, duration: 5,delay: 2 });


    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-skillset',
        start:'top 90%',
        end:'end 50%',
        scrub: 4,
      }
    });
    tl3.from('.sql', { x: 350, duration: 5,delay: 2 })
       .from('.python', { y: 200, duration: 5,delay: 2 })
       .from('.java', { x: 750, duration: 5,delay: 2 })
       .from('.mongo', { x: 190, duration: 5,delay: 2 });
  });

  return (
    <nav className="h-[90vh] w-full bg-black">
      <div className="relative flex flex-col h-full px-5 py-8 container-skillset">
        <div className="mb-8">
          <h1 className="text-6xl text-education">Hard skills</h1>
        </div>

        <div className="relative flex items-start justify-start h-full">
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#08d9ff] rounded-full react" style={{ top: '15%', left: '10%' }}>
            ReactJS
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-blue-600 rounded-full tailwind" style={{ top: '25%', left: '30%' }}>
            TailwindCSS
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#fbd708] rounded-full python" style={{ top: '38%', left: '54%' }}>
            Python
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#0aaff0] rounded-full sql" style={{ top: '15%', left: '70%' }}>
            SQL
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#f16a30] rounded-full html" style={{ top: '51%', left: '0%' }}>
            HTML
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#7c52d0] rounded-full dsa" style={{ top: '65%', left: '20%' }}>
            Data Structures and Algorithms
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#ed272c] rounded-full java" style={{ top: '49%', left: '85%' }}>
            Java
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#183424] rounded-full django" style={{ top: '85%', left: '10%' }}>
            Django
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#31ade5] rounded-full css" style={{ top: '90%', left: '50%' }}>
            CSS
          </div>
          <div className="absolute px-16 py-2 text-2xl font-bold bg-[#55ad47] rounded-full mongo" style={{ top: '75%', left: '70%' }}>
            MongoDB
          </div>
        </div>
      </div>
    </nav>
  );
}
