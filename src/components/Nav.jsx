import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState,useEffect } from "react";
import anime from "animejs";
const Nav = (props) => {
  const [dark, setDark] = useState(false);
  const [toggle,setToggle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // console.log(dark);
    props.changeDark(dark);
  }, [dark]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
    console.log(mobileMenuOpen)
  };

  const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
  const moonPath = "M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.0528 0.0035621 14 12.3122 14 27.5Z"
  const darkMode = document.querySelector("#darkMode");
  const handleChange = () =>{
    const timeline = anime.timeline({
      autoplay:false,
      duration:500,
      easing:"easeOutExpo",
      complete:function() {
        setDark((prevDark) => !prevDark);
      },
    });
    timeline.add({
      targets:".sun",
      d:[{value: dark? sunPath: moonPath}]
    })
    .add({
      targets: "#darkMode",
      rotate: toggle ? 0 : 320,
    },"-=400");
    setToggle((prevToggle) => !prevToggle)
    timeline.play()
  }
  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className={`mb-5 flex relative justify-between items-center max-container`}>
        {/* <a href='/'> */}
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className={`m-0 w-[129px] h-[29px] z-[100]`}
          />
        {/* </a> */}

        {/* Desktop menu */}
        <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${dark && 'text-white'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* <ul className={`justify-center border-2  mt-5 border-blue-950 z-500 items-center gap-16 hidden max-lg:flex flex-col w-[100vw] h-[60vh] bg-black ${dark && 'text-white'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul> */}

        {/* Mobile menu */}
      {/* <ul className={`lg:hidden max-lg:${mobileMenuOpen ? 'flex-col items-center flex mobile-menu mt-52 absolute  bg-black  w-[100vw] ' : 'hidden'}`}>
        {navLinks.map((item) => (
          <li key={item.label} className={``}>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul> */}

        <div>
          <svg 
            onClick={handleChange}
            id='darkMode'
            className="cursor-pointer z-[100]"
            width="28" 
            height="28" 
            viewBox="0 0 55 55" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className='sun'
              d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
              fill="#FFC700"
            />
          </svg>
        </div>

        {/* <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div> */}
        <div onClick={toggleMobileMenu} className={`hidden max-lg:block ${dark&& 'text-white'} top-0 right-0 z-[100] cursor-pointer`}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        
      </nav>
      <ul 
        className={`lg:hidden ${dark ? 'bg-black' : 'bg-white'} z-[5000] max-lg:${mobileMenuOpen ? 'inset-0 flex-col items-center justify-center h-[80vh] flex mobile-menu  w-full ' : 'hidden'}`}
        onClick={toggleMobileMenu}
      >
        {navLinks.map((item) => (
          <li key={item.label} className={`my-10`}>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;