import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AlignJustify, X } from 'lucide-react';
import '../App.css'
import Buttons from './Buttons';
import Aos from 'aos'
import 'aos/dist/aos.css'

// import img1 from '/images/Untitled.jpg'
const NavBar = () => {
  const [circleSize, setCircleSize] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      const fadeInInterval = setInterval(() => {
        setOpacity((prevOpacity) => Math.min(prevOpacity + 0.05, 1));
      }, 25);
      return () => clearInterval(fadeInInterval);
    } else {
      // const fadeOutInterval = setInterval(() => {
      //   setOpacity((prevOpacity)=> Math.max(prevOpacity - 0.5, 1))
      // }, 40);

      // return () => clearInterval(fadeOutInterval)
      setOpacity(0)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen]);



  useEffect(() => {
    if (isOpen) {
      let currentSize = 0;
      const increaseSize = () => {
        if (currentSize < 600) {
          setCircleSize(currentSize);
          currentSize += 5;
          setTimeout(increaseSize, 0.1)
        } else {
          setCircleSize(600);
        }
      };
      increaseSize();
    } else {
      let currentSize = 600;
      const decreaseSize = () => {
        if (currentSize >= 600) {
          setCircleSize(currentSize);
          currentSize -= 5;
          setTimeout(decreaseSize, 0.1)
        } else {
          setCircleSize(0);
        }
      }
      decreaseSize();
    }
  }, [isOpen]);

  return (
    <>
      <div className='xl:flex gap-18 p-5 font-mono sticky top-0 bg-transparent backdrop-blur-md z-customZ'>
        <div className='-ml-20 w-fit xl:w-full'>
          <Link to="/">
            <div className='p-2 items-center ml-20 relative '>
              <img src='./images/logo.png' alt='' className='h-16 sm:h-20 cursor-pointer' />
            </div>
          </Link>
        </div>

        <div className='hidden items-center xl:flex xl:gap-10 xl:ml-20'>
          <Link to='/about'>
            <div className='  hover:text-navbarTextColor text-xl rounded-md cursor-pointer p-2  items-center font-bold'>About</div>
          </Link>
          <Link to="/teams">
            <div className=' hover:text-navbarTextColor text-xl rounded-md  cursor-pointer p-2  items-center font-bold'>Teams</div>
          </Link>
          <Link to="/gallery">
            <div className=' hover:text-navbarTextColor text-xl rounded-md cursor-pointer p-2  items-center font-bold'>Gallery</div>
          </Link>
          <Link to="/stories">
            <div className=' hover:text-navbarTextColor text-xl rounded-md cursor-pointer  p-2  items-center font-bold'>Stories</div>
          </Link>
          <Link to="/experiences">
            <div className=' hover:text-navbarTextColor text-xl rounded-md  cursor-pointer p-2 items-center font-bold'>Experiences</div>
          </Link>
          <Link to="/getstarted">
            <div className='rectangle relative p-4 h-14 w-40 flex justify-center items-center text-xl bg-white rounded-2xl text-black cursor-pointer ml-20 overflow-hidden hover:text-white'>
              <div className='absolute z-10 font-bold'>Get Started</div>
              <div className='circle absolute h-10 w-10 rounded-full bg-pink-300  opacity-0' ></div>
            </div>
          </Link>
        </div>

        {/* accordion */}

        <div className='fixed top-0 right-0 xl:hidden p-8 font-anton flex justify-end w-full'>

          <div onClick={toggleAccordion}> {!isOpen && <div className=' w-full cursor-pointer'><AlignJustify size={30} /></div>}

          </div>

          {isOpen && (
            <div className=''>
              <div className={`circle bg-black fixed  top-0 right-0  rounded-bl-full ${isOpen ? 'transition-all duration-100 ease-in-out' : ''}`} style={{ width: `${circleSize}%`, height: `${circleSize}%` }}></div>
              <div className='absolute top-0 right-0  p-8 font-anton flex justify-end  w-full'>
                <div onClick={toggleAccordion} ><div className=' w-full cursor-pointer '><X size={30} /></div></div>
              </div>

              <div className=' fixed  gap-2 right-0 p-4 w-full mt-10 flex-col justify-center items-center cursor-pointer  h-full text-white '>
                <Link to='/about' data-aos='fade-down' data-aos-delay='300'>
                  <div className='hover:bg-white transition-for-bg hover:text-black rounded-md cursor-pointer p-2 flex justify-center items-center  transition-all hover:translate-x-1 ease-in-out text-5xl mt-5' style={{ opacity, transition: 'opacity 0.1s ease-in-out' }} onClick={toggleAccordion}>About</div>
                </Link>
                <Link to="/teams" data-aos='fade-down' data-aos-delay='600'>
                  <div className='hover:bg-white transition-for-bg hover:text-black rounded-md  cursor-pointer p-2  flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.4s ease-in-out' }} onClick={toggleAccordion}>Teams</div>
                </Link>
                <Link to="/gallery" data-aos='fade-down' data-aos-delay='900'>
                  <div className='hover:bg-white transition-for-bg hover:text-black rounded-md cursor-pointer p-2  flex justify-center items-center text-5xl mt-5 ' style={{ opacity, transition: 'opacity 0.5s ease-in-out' }} onClick={toggleAccordion}>Gallery</div>
                </Link>
                <Link to="/stories" data-aos='fade-down' data-aos-delay='1200'>
                  <div className='hover:bg-white transition-for-bg hover:text-black rounded-md cursor-pointer  p-2  flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.6s ease-in-out' }} onClick={toggleAccordion}>Stories</div>
                </Link>
                <Link to="/experiences" data-aos='fade-down' data-aos-delay='1500'>
                  <div className='hover:bg-white transition-for-bg hover:text-black rounded-md  cursor-pointer p-2 flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.7s ease-in-out' }} onClick={toggleAccordion}>Experiences</div>
                </Link>
                <Link to="/getstarted" data-aos='fade-down' data-aos-delay='1800'>
                  <div className='flex justify-center  mt-10 w-full' onClick={toggleAccordion}>
                    <Buttons buttonText={'Get Started'} />
                  </div>

                </Link>

              </div>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBar;