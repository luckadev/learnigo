import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
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
              <div className="text-gray-400">Nossa missão é facilitar a aprendizagem do idioma e criar uma comunidade de alunos, seja iniciante ou fluente no idioma.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Ebook</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nossos cursos</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Comunidade</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Desenvolvedor Web</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Feedback</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Política de privacidade</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link to="https://github.com/devlucaspro" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="https://www.instagram.com/ribeiroo.dev" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="https://www.linkedin.com/in/devlucaspro" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Learnigo.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
