import React from 'react'
import { HashLink } from 'react-router-hash-link';
import chitkara from '../assets/chitkaralogo.png'
import logo from '../assets/favicon.png'
import line from '../assets/navline.svg'
import logo2 from '../assets/logo2.png'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="w-screen flex justify-center items-center">
        <nav className="px-4 py-4 w-full flex justify-between items-center">
          <HashLink
            smooth
            to="https://codingninjas-cuiet.in/"
            target='_blank'
          >
            <div className='flex items-center space-x-3'>
              <div className="flex items-center justify-center flex-row lg:p-2">
                <img
                  src={logo}
                  alt="codechef"
                  className="w-auto h-11 sm:h-12 lg:h-14 sm:ml-1"

                />
              </div>
              <div>
                <img src={line} alt="line" />
              </div>
              <div className="flex items-center justify-center flex-row lg:p-2">
                <img
                  src={logo2}
                  alt="codechef"
                  className="w-auto h-11 sm:h-12 lg:h-14 sm:ml-1"

                />
              </div>
            </div>
          </HashLink>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center justify-center font-black"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="flex items-center justify-center sm:p-1 object-scale-down">
                <div className="flex items-center justify-center text-white w-11 h-11 blob p-2 sm:mr-1">
                  <svg width="14" height="14" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0H6C6.2652 0 6.5196 0.10536 6.7071 0.29289C6.8946 0.48043 7 0.73478 7 1C7 1.26522 6.8946 1.51957 6.7071 1.70711C6.5196 1.89464 6.2652 2 6 2H1C0.73478 2 0.48043 1.89464 0.29289 1.70711C0.10536 1.51957 0 1.26522 0 1C0 0.73478 0.10536 0.48043 0.29289 0.29289C0.48043 0.10536 0.73478 0 1 0ZM8 8H13C13.2652 8 13.5196 8.1054 13.7071 8.2929C13.8946 8.4804 14 8.7348 14 9C14 9.2652 13.8946 9.5196 13.7071 9.7071C13.5196 9.8946 13.2652 10 13 10H8C7.7348 10 7.4804 9.8946 7.2929 9.7071C7.1054 9.5196 7 9.2652 7 9C7 8.7348 7.1054 8.4804 7.2929 8.2929C7.4804 8.1054 7.7348 8 8 8ZM1 4H13C13.2652 4 13.5196 4.1054 13.7071 4.2929C13.8946 4.4804 14 4.7348 14 5C14 5.2652 13.8946 5.5196 13.7071 5.7071C13.5196 5.8946 13.2652 6 13 6H1C0.73478 6 0.48043 5.8946 0.29289 5.7071C0.10536 5.5196 0 5.2652 0 5C0 4.7348 0.10536 4.4804 0.29289 4.2929C0.48043 4.1054 0.73478 4 1 4Z" fill="white" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center p-1">
            <div className="flex flex-row items-center justify-center gap-12 p-1 text-white">
              <HashLink
                smooth
                to="/#home"
              >
                <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                  Home
                </div>
              </HashLink>
              <HashLink
                smooth
                to="/#overview"

              >
                {" "}
                <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                  Overview
                </div>
              </HashLink>
              <HashLink
                smooth
                to="/#prizes"

              >
                <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                  Prizes
                </div>
              </HashLink>


              <HashLink
                smooth
                to="/#team"

              >
                <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                  Past Events
                </div>
              </HashLink>
              <HashLink
                smooth
                to="/#socials"

              >
                <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                  Socials
                </div>
              </HashLink>
            </div>
          </div>
        </nav>
        <div
          className={
            "navbar-menu relative z-50 lg:invisible" +
            (navbarOpen ? "flex" : " invisible")
          }
        >
          <div className="navbar-backdrop backdrop-blur-sm fixed inset-0 bg-black/40"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#home">
                <img src={logo} alt="happiness" className="w-auto h-12" />
              </a>
              <button
                className="navbar-close"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start justify-center p-1">
              <div className="flex flex-col items-start justify-center gap-12 font-zilla p-1 text-grey-800">
                <HashLink
                  smooth
                  to="/#home"

                >
                  <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                    Home
                  </div>
                </HashLink>
                <HashLink
                  smooth
                  to="/#overview"

                >
                  {" "}
                  <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                    Overview
                  </div>
                </HashLink>
                <HashLink
                  smooth
                  to="/#prizes"

                >
                  <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                    Prizes
                  </div>
                </HashLink>

                <HashLink
                  smooth
                  to="/#team"

                >
                  <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                    Past Events
                  </div>
                </HashLink>
                <HashLink
                  smooth
                  to="/#socials"

                >
                  <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                    Socials
                  </div>
                </HashLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
