// import { useState } from 'react';

// import { navLinks } from '../constants/index.js';

// const NavItems = ({ onClick = () => {} }) => (
//   <ul className="nav-ul">
//     {navLinks.map((item) => (
//       <li key={item.id} className="nav-li">
//         <a href={item.href} className="nav-li_a" onClick={onClick}>
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-5 mx-auto c-space">
//           <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
//             Anshuman
//           </a>

//           <button
//             onClick={toggleMenu}
//             className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
//             aria-label="Toggle menu">
//             <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
//           </button>

//           <nav className="sm:flex hidden">
//             <NavItems />
//           </nav>
//         </div>
//       </div>

//       <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
//         <nav className="p-5">
//           <NavItems onClick={closeMenu} />
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// import { useState } from 'react';
// import { useTheme } from '../context/ThemeContext.jsx';
// import { navLinks } from '../constants/index.js';
// import { FaMoon } from 'react-icons/fa';
// import { IoIosSunny } from 'react-icons/io';


// const NavItems = ({ onClick = () => {} }) => (
//   <ul className="nav-ul">
//     {navLinks.map((item) => (
//       <li key={item.id} className="dark:nav-li text-black-500 hover:text-black font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
//         <a href={item.href} className="dark:nav-li_a text-lg md:text-base hover:text-black transition-colors" onClick={onClick}>
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { darkMode, toggleDarkMode } = useTheme();

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-colors bg-opacity-30 dark:bg-opacity-30 dark:bg-black-100 bg-white`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-5 mx-auto px-4">

//           <a href="/" className="font-bold text-xl hover:opacity-75 transition-opacity dark:text-white">
//             <span className=' font-extrabold text-4xl'>A</span>nshuman
//           </a>

//           <button
//             onClick={toggleMenu}
//             className="sm:hidden flex focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <img
//               src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
//               alt="toggle"
//               className="w-6 h-6"
//             />
//           </button>

//           <nav className="hidden sm:flex -translate-x-11 ">
//             <NavItems />
//           </nav>

//           <button onClick={toggleDarkMode} className="text-4xl mx-0 border-none">
//             {!darkMode ? (
//               <FaMoon className="text-black-500" />
//             ) : (
//               <IoIosSunny className="text-yellow-300" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div
//         className={`overflow-hidden transition-[max-height] duration-300 sm:hidden ${
//           isOpen ? 'max-h-screen' : 'max-h-0'
//         }`}>
//         <nav className="p-5">
//           <NavItems onClick={closeMenu} />
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { navLinks } from '../constants/index.js';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="dark:nav-li text-black-500 hover:text-black font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        {item.isFile ? (
          // Handle resume file
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:nav-li_a text-lg md:text-base hover:text-black transition-colors"
            onClick={(e) => {
              onClick();
              // Prevent default if you want to handle download programmatically
              // e.preventDefault();
              // window.open(item.href, '_blank');
            }}
          >
            {item.name}
          </a>
        ) : (
          // Handle regular navigation links
          <a 
            href={item.href} 
            className="dark:nav-li_a text-lg md:text-base hover:text-black transition-colors" 
            onClick={onClick}
          >
            {item.name}
          </a>
        )}
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors bg-opacity-80 dark:bg-opacity-30 dark:bg-black-100 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-4">
          <a href="/" className="font-bold text-xl hover:opacity-75 transition-opacity dark:text-white">
            <span className='font-extrabold text-4xl'>A</span>nshuman
          </a>

          <button
            onClick={toggleMenu}
            className="sm:hidden flex focus:outline-none"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex -translate-x-11">
            <NavItems />
          </nav>

          <button onClick={toggleDarkMode} className="text-4xl mx-0 border-none">
            {!darkMode ? (
              <FaMoon className="text-black-500" />
            ) : (
              <IoIosSunny className="text-yellow-300" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 sm:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;