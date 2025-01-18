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



import { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import toast from 'react-hot-toast';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anshumanpanda742@gmail.com');
    setHasCopied(true);
    toast.success("Copied to Clipboard")
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const handleCopyNumber = () => {
    navigator.clipboard.writeText('7008700362');
    setHasCopied(true);
    toast.success("Copied to Clipboard")
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Zoom to Odisha, India on hover with increased zoom
  const handleHover = () => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 20.9517, lng: 85.0985, altitude: 1.2 }, // Increased zoom by reducing altitude
        1000 // Animation duration in milliseconds
      );
    }
  };

  const handleHoverOut = () => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 0, lng: 0, altitude: 2.5 }, // Reset to default view
        1000
      );
    }
  };

  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Personal Introduction */}
        <div className="col-span-1 xl:row-span-3">
          <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Hi, I'm Anshuman Panda</p>
              <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
                A dedicated software developer and full-stack developer with a passion for creating impactful and
                efficient solutions. Skilled in both front-end and back-end development, I thrive on solving complex
                problems and delivering high-quality applications.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid2.png" alt="grid-2" className="w-full scale-125 sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Tech Stack</p>
              <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications:
              </p>
              <br />
              <ul className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
                <li><strong>Languages:</strong> C++, HTML, CSS, JavaScript, Python</li>
                <li><strong>Operating Systems:</strong> Windows, Linux</li>
                <li><strong>Developer Tools:</strong> VS Code, Sublime, MySQL</li>
                <li><strong>Technologies/Frameworks:</strong> React.js, MongoDB, Express.js, Node.js, Tailwind</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Globe Component */}
        <div className="col-span-1 xl:row-span-4">
          <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
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
                labelColor={() => 'blue'}
                labelSize={2}
                labelDotRadius={0.5}
                labelAltitude={0.05}
              />
            </div>
            <div>
              <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">Flexible with Time Zones</p>
              <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">I am proudly based in Odisha, India, a vibrant and culturally rich region. Embracing flexibility, I am open to collaborating on remote projects globally and can also work on-site within India, ensuring seamless communication and adaptability across time zones.</p>
              <a href='#contact' className='w-fit'>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Passion for Coding */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain hover:scale-125 transition-all duration-500 " />
            <div>
              <p className="dark:grid-headtext text-xl font-semibold mb-2 text-black font-generalsans">My Passion for Coding</p>
              <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans">
              I love solving problems and bringing ideas to life through code. Programming isn’t 
              just a profession for me—it’s my true passion and creative outlet. I thrive on tackling 
              complex challenges, breaking them down into manageable solutions, and building impactful applications. Exploring new 
              technologies excites me, and I’m constantly enhancing my skills to stay ahead in this ever-evolving field. For me, coding 
              is a journey of continuous learning and meaningful innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="dark:grid-container w-full h-full border border-white bg-white-600 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="dark:grid-subtext  text-[#030305] text-base font-generalsans text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopyEmail} >
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-black-300 dark:text-gray_gradient dark:text-white ">
                  anshumanpanda742@gmail.com
                </p>
              </div>
              <div className="copy-container" onClick={handleCopyNumber}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-black-300 dark:text-gray_gradient dark:text-white">
                  7008700362
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;