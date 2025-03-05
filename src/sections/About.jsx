// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(' adrian@jsmastery.pro');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20 max-w-7xl mx-auto" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Hi, I’m Anshuman Panda</p>
//               <p className="grid-subtext">
//               A dedicated software developer and full-stack developer with a passion for creating 
//               impactful and efficient solutions. Skilled in both front-end and back-end development, 
//               I thrive on solving complex problems, embracing challenges, and continuously learning to deliver innovative, high-quality applications that make a meaningful difference.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full scale-125 sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="dark:grid-headtext">Tech Stack</p>
//               <p className=" dark:grid-subtext">
//                 I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
//                 applications. Such as given below:
//               </p>
//               <br></br>
//               <ul className='dark:grid-subtext'>
//                 <li><strong>Languages:</strong> C++, HTML, CSS, JavaScript, Python</li>
//                 <li><strong>Operating Systems:</strong> Windows, Linux</li>
//                 <li><strong>Developer Tools:</strong> VS Code, Sublime, MySQL</li>
//                 <li><strong>Technologies/Frameworks:</strong> React.js, MongoDB, Express.js, Node.js, Tailwind</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-4">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
//               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import { useState, useRef } from 'react';
// import Globe from 'react-globe.gl';
// import Button from '../components/Button.jsx';
// import toast from 'react-hot-toast';
// import { useTheme } from '../context/ThemeContext.jsx';
// import { useInView } from 'framer-motion';
// import { motion } from 'framer-motion';

// const AnimatedContent = ({children, delay=0})=>{
//   const ref = useRef(null);
//   const isInView = useInView(ref,{once:true, margin:"-100px"})

//   return (
//     <motion.div
//       ref={ref}
//       initial={{x:0, y:50}}
//       animate={isInView ?{opacity: 1, y: 0} : {opacity: 0, y: 50}}
//       transition={{duration:0.8, delay}}
//     >
//     {children}
//     </motion.div>
//   )

// }


// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);
//   const globeRef = useRef();

//   const { darkMode, toggleDarkMode } = useTheme();

//   // Copy email to clipboard
//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText('anshumanpanda742@gmail.com');
//     setHasCopied(true);
//     toast.success("Copied to Clipboard")
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };
//   const handleCopyNumber = () => {
//     navigator.clipboard.writeText('7008700362');
//     setHasCopied(true);
//     toast.success("Copied to Clipboard")
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   // Zoom to Odisha, India on hover with increased zoom
//   const handleHover = () => {
//     if (globeRef.current) {
//       globeRef.current.pointOfView(
//         { lat: 20.9517, lng: 85.0985, altitude: 1.2 }, // Increased zoom by reducing altitude
//         1000 // Animation duration in milliseconds
//       );
//     }
//   };

//   const handleHoverOut = () => {
//     if (globeRef.current) {
//       globeRef.current.pointOfView(
//         { lat: 0, lng: 0, altitude: 2.5 }, // Reset to default view
//         1000
//       );
//     }
//   };

//   return (
//     <section className="c-space my-20 max-w-7xl mx-auto" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         {/* Personal Introduction */}
//         <div className="col-span-1 xl:row-span-3">
//           <AnimatedContent delay={0.2}>
//           <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
//             <div>
//               <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Hi, I'm Anshuman Panda</p>
//               <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
//                 A dedicated software developer and full-stack developer with a passion for creating impactful and
//                 efficient solutions. Skilled in both front-end and back-end development, I thrive on solving complex
//                 problems and delivering high-quality applications.
//               </p>
//             </div>
//           </div>
//           </AnimatedContent>
//         </div>

//         {/* Tech Stack */}
//         <div className="col-span-1 xl:row-span-3">
//           <AnimatedContent delay={0.4}>
//           <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full scale-125 sm:h-[276px] h-fit object-contain" />
//             <div>
//               <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Tech Stack</p>
//               <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
//                 I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
//                 applications:
//               </p>
//               <br />
//               <ul className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
//                 <li><strong>Languages:</strong> C++, HTML, CSS, JavaScript, Python</li>
//                 <li><strong>Operating Systems:</strong> Windows, Linux</li>
//                 <li><strong>Developer Tools:</strong> VS Code, Sublime, MySQL</li>
//                 <li><strong>Technologies/Frameworks:</strong> React.js, MongoDB, Express.js, Node.js, Tailwind</li>
//               </ul>
//             </div>

//           </div>
//           </AnimatedContent>
//         </div>

//         {/* Globe Component */}
//         <div className="col-span-1 xl:row-span-4">
//           <AnimatedContent delay={0.6}>
//           <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
//             <div
//               className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
//               onMouseEnter={handleHover}
//               onMouseLeave={handleHoverOut}
//             >
//               <Globe
//                 ref={globeRef}
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl={darkMode ? 
//                   "//unpkg.com/three-globe/example/img/earth-night.jpg" : 
//                   "//unpkg.com/three-globe/example/img/earth-day.jpg"}
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[
//                   {
//                     lat: 20.9517,
//                     lng: 85.0985,
//                     text: 'Odisha, India',
//                     color: 'red',
//                     size: 30,
//                     fontSize: 16,
//                     fontWeight: 'bold'
//                   },
//                 ]}
//                 labelColor={() => darkMode ? 'blue' : 'black'}
//                 labelSize={2}
//                 labelDotRadius={0.5}
//                 labelAltitude={0.05}
//               />
//             </div>
//             <div>
//               <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Flexible with Time Zones</p>
//               <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">I am proudly based in Odisha, India, a vibrant and culturally rich region. Embracing flexibility, I am open to collaborating on remote projects globally and can also work on-site within India, ensuring seamless communication and adaptability across time zones.</p>
//               <a href='#contact' className='w-fit'>
//                 <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//               </a>
              
//             </div>
//           </div>
//           </AnimatedContent>
//         </div>

//         {/* Passion for Coding */}
//         <div className="xl:col-span-2 xl:row-span-3">
//           <AnimatedContent delay={0.8}>
//           <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain hover:scale-125 transition-all duration-500 " />
//             <div>
//               <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">My Passion for Coding</p>
//               <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
//               I love solving problems and bringing ideas to life through code. Programming isn’t 
//               just a profession for me—it’s my true passion and creative outlet. I thrive on tackling 
//               complex challenges, breaking them down into manageable solutions, and building impactful applications. Exploring new 
//               technologies excites me, and I’m constantly enhancing my skills to stay ahead in this ever-evolving field. For me, coding 
//               is a journey of continuous learning and meaningful innovation.
//               </p>
//             </div>
//           </div>
//           </AnimatedContent>
//         </div>

//         {/* Contact Section */}
//         <div className="xl:col-span-1 xl:row-span-2 -translate-y-8">
//           <AnimatedContent delay={1}>
//           <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />
//             <div className="space-y-2">
//               <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopyEmail} >
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-xl md:text-xl font-medium text-black-300 dark:text-gray_gradient dark:text-white ">
//                   anshumanpanda742@gmail.com
//                 </p>
//               </div>
//               <div className="copy-container" onClick={handleCopyNumber}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-xl md:text-xl font-medium text-black-300 dark:text-gray_gradient dark:text-white">
//                   7008700362
//                 </p>
//               </div>
//             </div>
//           </div>
//           </AnimatedContent>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext.jsx';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import HoverCard from '../components/common/HoverCard.jsx';

const AnimatedContent = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const ImageWithTooltip = ({ src, name, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipAngle, setTooltipAngle] = useState({ x: 0, y: 0 });
  const [shake, setShake] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setTooltipAngle({
      x: y * 15, // Vertical tilt
      y: -x * 30 // Horizontal tilt
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div 
      className="relative group"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsHovered(false);
        setShake(false);
        setTooltipAngle({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.img
        src={src}
        alt={name}
        className="w-full h-24 object-contain cursor-pointer"
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotate: isHovered ? 2 : 0,
          filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      
      {isHovered && (
        <motion.div
          className={`absolute -top-16 left-2 -translate-x-1/2 px-4 py-2 rounded-lg ${
    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
  } shadow-2xl pointer-events-none origin-bottom`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            scale: 1.1,
            rotateX: tooltipAngle.x,
            rotateY: tooltipAngle.y,
            translateZ: '50px'
          }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
          }}
        >
          <div className="relative z-10">
            <motion.span
              animate={shake ? { x: [-5, 5, -3, 3, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.span>
          </div>
          {/* 3D Pointer */}
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 
            w-4 h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-800'} 
            transform rotate-45 shadow-lg`} />
        </motion.div>
      )}
    </div>
  );
};

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedNumber, setHasCopiedNumber] = useState(false);
  const globeRef = useRef();
  const { darkMode } = useTheme();

  const technologies = [
    { name: 'Node.js', src: '/assets/nodejs.png' },
    { name: 'tailwindCSS', src: '/assets/tailwindcss.png' },
    { name: 'MySQL', src: '/assets/mySQL.png' },
    { name: 'React', src: '/assets/reactjs.png' },
    { name: 'MongoDB', src: '/assets/mongoDB.png' },
    { name: 'JavaScript', src: '/assets/javascript.png' }
  ];

  const handleCopy = (content, setter) => {
    navigator.clipboard.writeText(content);
    setter(true);
    toast.success("Copied to Clipboard");
    setTimeout(() => setter(false), 2000);
  };

  const handleGlobeView = (shouldZoom) => {
    if (globeRef.current) {
      const view = shouldZoom 
        ? { lat: 20.9517, lng: 85.0985, altitude: 1.2 }
        : { lat: 0, lng: 0, altitude: 2.5 };
      globeRef.current.pointOfView(view, 1000);
    }
  };

  return (
    <section className="c-space my-20 max-w-7xl mx-auto px-4" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-min">
        {/* Personal Introduction */}
        <div className="col-span-1 xl:row-span-3">
  <AnimatedContent delay={0.2}>
    <HoverCard
      className={`w-full h-full rounded-xl p-6 flex flex-col gap-4 transition-all 
        ${darkMode ? 'bg-black-200 border-gray-700' : 'bg-white border-gray-200'} 
        border hover:shadow-lg`}
    >
      <img
        src="/assets/grid1.png"
        alt="Introduction"
        className="w-full h-56 object-contain"
      />
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Reveal>Hi, I'm Anshuman Panda</Reveal>
        </h3>
        <Reveal>
          <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A dedicated full-stack developer passionate about creating impactful solutions.
            Skilled in both front-end and back-end development with focus on efficiency and quality.
          </p>
        </Reveal>
      </div>
    </HoverCard>
  </AnimatedContent>
</div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
  <AnimatedContent delay={0.4}>
    <HoverCard
      className={`w-full h-full rounded-xl p-6 flex flex-col gap-4 transition-all 
        ${darkMode ? 'bg-black-200 border-gray-700' : 'bg-white border-gray-200'} 
        border hover:shadow-lg`}
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4">
        {technologies.map((tech, index) => (
          <ImageWithTooltip key={index} {...tech} darkMode={darkMode} />
        ))}
      </div>
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Reveal>Tech Stack</Reveal>
        </h3>
        <ul className={`space-y-2 text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Reveal>
            <ul className="space-y-2">
              <li><strong>Languages:</strong> C++, JavaScript, Python</li>
              <li><strong>Frontend:</strong> React, Tailwind</li>
              <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
              <li><strong>Tools:</strong> VS Code, Git, Linux</li>
            </ul>
          </Reveal>
        </ul>
      </div>
    </HoverCard>
  </AnimatedContent>
</div>

        {/* Globe Component */}
        <div className="col-span-1 xl:row-span-4">
  <AnimatedContent delay={0.6}>
    <HoverCard
      className={`w-full h-full rounded-xl p-6 flex flex-col gap-4 transition-all 
        ${darkMode ? 'bg-black-200 border-gray-700' : 'bg-white border-gray-200'} 
        border hover:shadow-lg`}
    >
      <div
        className="relative w-full h-72"
        onMouseEnter={() => handleGlobeView(true)}
        onMouseLeave={() => handleGlobeView(false)}
      >
        <Globe
          ref={globeRef}
          height={326}
          width={326}
          backgroundColor="rgba(0, 0, 0, 0)"
          showAtmosphere
          showGraticules
          globeImageUrl={
            darkMode
              ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
              : "//unpkg.com/three-globe/example/img/earth-day.jpg"
          }
          labelsData={[
            {
              lat: 20.9517,
              lng: 85.0985,
              text: 'Odisha, India',
              color: 'red',
              size: 30,
              fontSize: 16,
              fontWeight: 'bold'
            },
          ]}
          labelColor={() => (darkMode ? 'blue' : 'black')}
          labelSize={2}
          labelDotRadius={0.5}
          labelAltitude={0.05}
        />
      </div>
      <div className="mt-4">
        <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Reveal>Flexible Collaboration</Reveal>
        </h3>
        <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
          <Reveal>
            Based in Odisha, India. Open to remote global projects or on-site work in India,
            with flexibility across time zones.
          </Reveal>
        </p>
        <div className="mt-auto">
          <a href="#contact" className="inline-block w-full">
            <Button
              name="Contact Me"
              isBeam
              containerClass="w-full hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </HoverCard>
  </AnimatedContent>
</div>

        {/* Passion Section */}
        <div className="xl:col-span-2 xl:row-span-3">
  <AnimatedContent delay={0.8}>
    <HoverCard
      className={`w-full h-full rounded-xl p-6 flex flex-col gap-4 transition-all 
        ${darkMode ? 'bg-black-200 border-gray-700' : 'bg-white border-gray-200'} 
        border hover:shadow-lg`}
    >
      <img
        src="/assets/grid3.png"
        alt="Passion"
        className="w-full h-56 object-contain hover:scale-105 transition-transform"
      />
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Reveal>Coding Passion</Reveal>
        </h3>
        <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Reveal>
            Transforming ideas into solutions through code. Continuously learning and
            innovating to solve complex problems and build impactful applications.
          </Reveal>
        </p>
      </div>
    </HoverCard>
  </AnimatedContent>
</div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
  <AnimatedContent delay={1}>
    <HoverCard
      className={`w-full h-full rounded-xl p-6 flex flex-col gap-4 transition-all 
        ${darkMode ? 'bg-black-200 border-gray-700' : 'bg-white border-gray-200'} 
        border hover:shadow-lg`}
    >
      <img
        src="/assets/grid4.png"
        alt="Contact"
        className="w-full h-32 object-cover rounded-lg"
      />
      <div className="space-y-4">
        <h3 className={`text-center text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Reveal>Contact Me</Reveal>
        </h3>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer
            ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          onClick={() => handleCopy('anshumanpanda742@gmail.com', setHasCopiedEmail)}
        >
          <img
            src={hasCopiedEmail ? '/assets/tick.svg' : '/assets/copy.svg'}
            alt="Copy"
            className="w-5 h-5"
          />
          <span className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Reveal>anshumanpanda742@gmail.com</Reveal>
          </span>
        </div>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer
            ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          onClick={() => handleCopy('7008700362', setHasCopiedNumber)}
        >
          <img
            src={hasCopiedNumber ? '/assets/tick.svg' : '/assets/copy.svg'}
            alt="Copy"
            className="w-5 h-5"
          />
          <span className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Reveal>7008700362</Reveal>
          </span>
        </div>
      </div>
    </HoverCard>
  </AnimatedContent>
</div>
      </div>
    </section>
  );
};

export default About;