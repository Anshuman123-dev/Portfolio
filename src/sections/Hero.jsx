import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Reveal from '../components/Reveal.jsx';



const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative max-w-7xl mx-auto" id="home">
      
      {/* Heading Section */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-black dark:text-white text-center font-generalsans">
          <Reveal >
          Hi, I am <span className='p-0 font-bold'>Anshuman</span> <span className="waving-hand">👋</span>
          </Reveal>
        </p>
        <div className='flex flex-col items-center'>
          <Reveal className="flex justify-center">
            <p className="hero_tag dark:text-gray_gradient  text-black-500 " style={{ margin: "0 auto" }}>
              From Code to Customer
            </p>
          </Reveal>

        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full scroll-">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center items-center">
  <a href="#about" className="w-fit">
    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
  </a>
</div>

    </section>
  );
};

export default Hero;
