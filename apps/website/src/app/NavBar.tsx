import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const activeClass =
    'bg-sky-600 bg-cyan-400 text-white px-4 py-3 flex items-center space-x-4 rounded-md';
  const inactiveClass =
    'relative px-4 py-3 flex items-center space-x-4 text-gray-600 group rounded-md';

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        {/* <div className="-mx-6 px-6 py-4">
          <Link to="/" title="home"></Link>
        </div> */}

        <div className="mt-8 text-center">
          <img
            src="/assets/images/headshot.jpg"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Grace Durant
          </h5>
          <span className="hidden text-gray-400 lg:block">
            Software Engineer
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? activeClass : inactiveClass}
            >
              <span className="group-hover:text-gray-700">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === '/resume' ? activeClass : inactiveClass}
            >
              <span className="-mr-1 font-medium">Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about-me"
              className={
                location.pathname === '/about-me' ? activeClass : inactiveClass}
            >
              <span className="group-hover:text-gray-700">About Me</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={location.pathname === '/blog' ? activeClass : inactiveClass}
            >
              <span className="group-hover:text-gray-700">Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/youtube"
              className={location.pathname === '/youtube' ? activeClass : inactiveClass}
            >
              <span className="group-hover:text-gray-700">YouTube</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dancer"
              className={location.pathname === '/dancer' ? activeClass : inactiveClass}
            >
              <span className="group-hover:text-gray-700">Dancer</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
