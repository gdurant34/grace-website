// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function NavBar() {
//   const location = useLocation();
//   const activeClass =
//     'bg-amber-800 bg-opacity-10 text-cyan-700  px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
//   const inactiveClass =
//     'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md';

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
//       <div>
//         <div className="mt-8 text-center hidden md:block">
//           <img
//             src="/assets/images/headshot.jpg"
//             alt=""
//             className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
//           />
//           <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
//             Grace Durant
//           </h5>
//           <span className="hidden text-gray-400 lg:block">
//             Software Engineer
//           </span>
//         </div>

//         <ul className="space-y-2 tracking-wide mt-8">
//           <li>
//             <Link
//               to="/"
//               className={
//                 location.pathname === '/' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Home</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/resume"
//               className={
//                 location.pathname === '/resume' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Resume</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/projects"
//               className={
//                 location.pathname === '/projects' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Projects</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blog"
//               className={
//                 location.pathname === '/blog' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Blog</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className={
//                 location.pathname === '/contact' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Contact</span>
//             </Link>
//           </li>
//           {/* <li>
//             <Link
//               to="/youtube"
//               className={location.pathname === '/youtube' ? activeClass : inactiveClass}
//             >
//               <span className="group-hover:text-gray-700">YouTube</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/dancer"
//               className={location.pathname === '/dancer' ? activeClass : inactiveClass}
//             >
//               <span className="group-hover:text-gray-700">Dancer</span>
//             </Link>
//           </li> */}
//         </ul>
//       </div>
//       {/* <div>
//       <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleNav}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isNavOpen ? (
//                   <path
//                     className="inline-flex"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     className="inline-flex"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       {isNavOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 sm:px-3">
//             <Link
//               to="/"
//               className={
//                 location.pathname === '/' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Home</span>
//             </Link>
//             <Link
//               to="/resume"
//               className={
//                 location.pathname === '/resume' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Resume</span>
//             </Link>
//             <Link
//               to="/projects"
//               className={
//                 location.pathname === '/projects' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Projects</span>
//             </Link>
//             <Link
//               to="/blog"
//               className={
//                 location.pathname === '/blog' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Blog</span>
//             </Link>
//             <Link
//               to="/contact"
//               className={
//                 location.pathname === '/contact' ? activeClass : inactiveClass
//               }
//             >
//               <span className="group-hover:text-gray-700">Contact</span>
//             </Link>
//           </div>
//         </div>
//       )} */}
//     </aside>
//   );
// }

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  const location = useLocation();
  const activeClass =
    'bg-amber-800 bg-opacity-10 text-cyan-700  px-4 py-3 flex items-center space-x-4 rounded-md font-bold';
  const inactiveClass =
    'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md';

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className=" w-20 h-20 m-auto rounded-full object-cover lg:w-28 lg:h-28 mt-16"
                src="/assets/images/headshot.jpg"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <p className="text-cyan-700">
                  <span className=" text-lg font-bold">Grace Durant</span>
                  <br />
                  Software Engineer
                </p>
                <Link
                  to="/"
                  className={
                    location.pathname === '/' ? activeClass : inactiveClass
                  }
                >
                  <span className="group-hover:text-gray-700">Home</span>
                </Link>
                <Link
                  to="/resume"
                  className={
                    location.pathname === '/resume'
                      ? activeClass
                      : inactiveClass
                  }
                >
                  <span className="group-hover:text-gray-700">Resume</span>
                </Link>
                <Link
                  to="/projects"
                  className={
                    location.pathname === '/projects'
                      ? activeClass
                      : inactiveClass
                  }
                >
                  <span className="group-hover:text-gray-700">Projects</span>
                </Link>
                <Link
                  to="/blog"
                  className={
                    location.pathname === '/blog' ? activeClass : inactiveClass
                  }
                >
                  <span className="group-hover:text-gray-700">Blog</span>
                </Link>
                <Link
                  to="/contact"
                  className={
                    location.pathname === '/contact'
                      ? activeClass
                      : inactiveClass
                  }
                >
                  <span className="group-hover:text-gray-700">Contact</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isNavOpen ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-10 pb-3 sm:px-3">
            <Link
              to="/"
              className={
                location.pathname === '/' ? activeClass : inactiveClass
              }
              onClick={handleLinkClick}
            >
              <span className="group-hover:text-gray-700">Home</span>
            </Link>
            <Link
              to="/resume"
              className={
                location.pathname === '/resume' ? activeClass : inactiveClass
              }
              onClick={handleLinkClick}
            >
              <span className="group-hover:text-gray-700">Resume</span>
            </Link>
            <Link
              to="/projects"
              className={
                location.pathname === '/projects' ? activeClass : inactiveClass
              }
              onClick={handleLinkClick}
            >
              <span className="group-hover:text-gray-700">Projects</span>
            </Link>
            <Link
              to="/blog"
              className={
                location.pathname === '/blog' ? activeClass : inactiveClass
              }
              onClick={handleLinkClick}
            >
              <span className="group-hover:text-gray-700">Blog</span>
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === '/contact' ? activeClass : inactiveClass
              }
              onClick={handleLinkClick}
            >
              <span className="group-hover:text-gray-700">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
