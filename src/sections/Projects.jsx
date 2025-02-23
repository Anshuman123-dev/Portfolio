import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import Reveal from '../components/Reveal.jsx';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20 max-w-7xl mx-auto">
      <Reveal>

      <p className="dark:head-text sm:text-4xl text-3xl font-semibold text-black">My Selected Work</p>
      </Reveal>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

        {/* content */}

        <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-400 dark:shadow-black-200"
  >
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-black-300 dark:text-white-600 my-5">
            <p className="dark:text-white text-2xl font-semibold animatedText"><Reveal>
              {currentProject.title}
              </Reveal>
              </p>
            <Reveal>

            <p className="animatedText">{currentProject.desc}</p>
            </Reveal>
            <Reveal>
            <p className="animatedText">{currentProject.subdesc}</p>
            </Reveal>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="dark:tech-logo w-10 h-10 rounded-md p-2 bg-black-500 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer dark:text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Website</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="dark:arrow-btn bg-black-500 w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="dark:arrow-btn w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient bg-black-500" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 3D Model */}
        <motion.div
    variants={slideIn("right", "tween", 0.2, 1)}
    className="border dark:border-black-300 bg-gray-400 dark:bg-black-200 rounded-lg h-96 md:h-full">

    
        
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
      </motion.div>
        </div>
    </section>
  );
};

export default Projects;
