import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="work">
      <div className="w-full dark:text-white-600">
        <p className="dark:head-text sm:text-4xl text-3xl font-semibold dark:text-black-500">My Certification & Achievements</p>

        <div className="dark:work-container grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="dark:work-canvas col-span-1 rounded-lg bg-gray-500 border border-white">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="dark:work-content col-span-2 rounded-lg bg-gray-500 border border-white">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="dark:work-content_container group grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-white-600 rounded-lg sm:px-5 px-2.5">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="dark:work-content_logo rounded-3xl w-16 h-16 p-2 bg-black-500">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="dark:work-content_bar flex-1 w-0.5 mt-4 h-full bg-gray-400 group-hover:bg-gray-200 group-last:hidden" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-black-100 dark:text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="dark:group-hover:text-white group-hover:text-black-300 transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
