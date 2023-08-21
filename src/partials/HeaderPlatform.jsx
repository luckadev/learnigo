import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function HeaderPlatform() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Learnigo">
            <svg width="32" height="32" viewBox="0 0 540 540" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_216_594)">
                <rect width="540" height="540" fill="#5D5DFF"/>
                <path d="M64.9942 198.137H91.0435V243.773H143.192V264.95H64.9942V198.137ZM158.199 265.05V198.236H236.396V215.337H184.248V223.888H236.396V239.348H184.248V247.899H236.396V265.05H158.199ZM295.896 217.575L286.699 237.31H305.043L295.896 217.575ZM244.543 265.05L280.385 198.236H311.356L347.199 265.05H317.868L312.599 253.616H279.143L273.873 265.05H244.543ZM355.345 198.187H419.723C433.493 198.038 445.175 209.621 444.977 223.441C444.977 228.462 443.634 233.035 440.95 237.111C438.315 241.138 434.786 244.22 430.411 246.258L444.977 265H417.237L404.66 248.694H381.395V265H355.345V198.187ZM413.161 217.724H381.395V229.108H413.161C414.752 229.108 416.094 228.561 417.187 227.467C418.331 226.324 418.878 224.982 418.878 223.441C418.878 220.259 416.342 217.724 413.161 217.724ZM130.167 318.532V283.137H156.266V349.95H126.936L91.0435 309.137V349.95H64.9942V283.137H100.837L130.167 318.532ZM177.586 283.137H203.636V349.95H177.586V283.137Z" fill="#FBFBFB"/>
                <path d="M272.358 316.42V301.246H332.591V352.111H315.306L313.591 338.323C303.299 348.483 287.663 352.111 272.621 352.111C239.239 351.979 211.926 342.347 212.058 308.833V302.367C211.926 268.787 239.239 259.155 272.621 259.089C303.365 259.089 328.699 267.467 332.591 294.78H295.844C293.667 291.812 290.5 289.832 286.41 288.777C282.32 287.721 277.701 287.193 272.621 287.193C258.437 287.391 246.43 290.03 246.628 304.478V306.656C246.43 321.236 258.437 323.743 272.621 323.941C286.278 323.941 294.986 323.149 300.198 316.42H272.358ZM412.147 259.089C445.529 259.089 472.644 268.853 472.644 302.367V308.833C472.776 342.347 445.463 352.045 412.147 352.111C378.764 352.045 351.452 342.347 351.583 308.833V302.367C351.452 268.787 378.764 259.155 412.147 259.089ZM438.074 306.656V304.478C438.272 290.03 426.265 287.391 412.147 287.193C397.963 287.391 385.956 290.03 386.153 304.478V306.656C385.956 321.17 397.963 323.809 412.147 324.007C426.265 323.809 438.272 321.17 438.074 306.656Z" fill="#B0B0FB"/>
                </g>
                <defs>
                <clipPath id="clip0_216_594">
                <rect width="540" height="540" rx="270" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/homePlatform" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/dictionary" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Dictionary</Link>
              </li>
              <li>
                <Link to="/tasks" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Go to tasks</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/homePlatform" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Home</Link>
                </li>
                <li>
                  <Link to="/dictionary" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Dictionary</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Go to tasks</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default HeaderPlatform;
