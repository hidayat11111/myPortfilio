import { BackgroundLines } from "./Background";
import { TextGenerateEffect } from "./TextGeneration";
import { CardBody, CardContainer, CardItem } from "./ProfilePop";
import myProfile from "./../Images/myProfile.png";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import myProfile2 from "./../Images/myProfile2.png";
import education from "./../Images/education.png";
import experience from "./../Images/experience.png";
import materialUi from "./../Images/materialUi.png";
import react from "./../Images/react.png";
import framer from "./../Images/framer.png";
import tailwind from "./../Images/tailwind.png";
import vue from "./../Images/vue.png";
import "./../css/bounce.css";
import AOS from "aos";
import "aos/dist/aos.css";
import star from "./../Images/star.png";
import { WobbleCard } from "./Wobble";
import pp from "./../Images/pp.svg";
import slider from "./../Images/slider.svg";
import "./../css/Carousal.css";
import ingri from "./../Images/ingri.png";
import room from "./../Images/room.png";
import hospi from "./../Images/hospi.png";
import almond from "./../Images/almond.svg";
import message from "./../Images/message.svg";
import insta from "./../Images/insta.svg";
import discord from "./../Images/discord.svg";
import git from "./../Images/git.svg";
import email from "./../Images/email.svg";
import download from "./../Images/download.svg";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons";
import { NavLink } from "react-router-dom";
import "./../css/nav.css";
import hidLogo from "./../Images/hidLogo.png";
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; 
import BounceLoader from 'react-spinners/BounceLoader';

const LandingPage = () => {
  const [click, setClick] = useState(false);

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user's preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };


  const handleClickAbout = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      aboutRef.current.focus();
    }
  };

  const handleClickProjects = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
      projectRef.current.focus();
    }
  };

  const handleClickContact = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      contactRef.current.focus();
    }
  };

  const handleClick = () => setClick(!click);

  useEffect(() => {
    AOS.init();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  // {emial code}

  const handleEmailClick = () => {
    window.location.href =
      "mailto:hidayatam041@gmail.com?subject=Your%20Subject&body=Hello%20there";
  };

  // {cv downlaod code}

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myResume.pdf"; // Path to your PDF file in the public folder
    link.download = "myResume.pdf"; // The name the file will be saved as
    document.body.appendChild(link); // Append link to the body
    link.click(); // Simulate click to download
    document.body.removeChild(link); // Remove the link from the document
  };
  const [loading, setLoading] = useState(true); // Control loader state

  return (
    <div className="bg-black pb-6 lg:pb-3 dark:bg-white ">
    <BounceLoader color="gray" loading={loading} size={60} />
      <nav className="navbar">
        <div className="nav-container text-sm font-normal font-sans text-gray-500">
       
      <p className="hidden">{darkMode}</p>
          <NavLink className="nav-logo">
            <span className="icon">
              <img className="w-7 ml-3" src={hidLogo} alt="erroe" />
            </span>
          </NavLink>
          <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none lg:mr-2 mr-20 "
        >
          {darkMode ? (
            <MoonIcon className="w-6 h-6 text-blue-500" /> // Light Mode Icon (Sun)
          ) : (
            <SunIcon className="w-6 h-6  text-yellow-500" /> // Dark Mode Icon (Moon)
          )}
        </button>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item dark:text-gray-800">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dark:text-gray-800">
              <a
                href="#about"
                onClick={handleClickAbout}
                activeClassName="active"
                className="nav-links"
                // onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item dark:text-gray-800">
              <a
                href="#projects"
                onClick={handleClickProjects}
                activeClassName="active"
                className="nav-links"
              >
                Projects
              </a>
            </li>
            <li className="nav-item dark:text-gray-800">
              <a
                href="#contact"
                onClick={handleClickContact}
                activeClassName="active"
                className="nav-links"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full bg-black dark:bg-white">
        <BackgroundLines className="flex items-center dark:bg-white bg-black justify-center w-full h-svh flex-col gap-3 px-4">
          <CardContainer className="relative w-[65%] lg:w-[45%] h-auto mx-auto">
            <CardBody className=" dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-full p-2 h-auto group/card transition-shadow duration-300 ease-in-out dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="w-full ">
                <img
                  src={myProfile}
                  className="w-full h-auto object-cover border-2 border-gray-600 dark:border-none py-3.5 rounded-full"
                  alt="Profile"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          <h2 className=" dark:text-black pb-2 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-6xl font-sans font-bold tracking-tight relative z-20">
            Hi, I&apos;m <span className="text-[#12F7D6]">&lt;/</span>
            Hidayat Ali
            <span className="text-[#12F7D6]">/&gt;</span>
          </h2>

          <TextGenerateEffect
            words="Hi, My name is Hidayat Ali. I am a Frontend Web Developer, UI/UX Designer, and I'm very passionate and dedicated to my work."
            fontSize="lg:text-xl md:text-lg text-sm"
            textColor="text-neutral-700 dark:text-neutral-500"
            width="lg:w-[60%]"
          />
          <div className="flex flex-row items-center gap-5 z-10 mt-3">
            <Link to="/LandingPage" className="text-white">
              <button
                className=" bg-white dark:bg-black dark:text-white text-[#292F36] flex flex-wrap gap-1 items-center font-sans text-sm px-5 py-2.5 rounded-2xl cursor-pointer"
                onClick={handleDownload}
              >
                Download CV
                <img src={download} alt="Download Icon" className="w-4 h-4 dark:bg-gray-200 dark:rounded-xxl" />
              </button>
            </Link>

            <div className="flex flex-row gap-3 items-center">
              <p className="tracking-wider text-2xl font-semibold text-[#12F7D6] font-sans">
                Let's Talk
              </p>{" "}
              <img
                className="w-7 cursor-pointer"
                src={email}
                alt="error"
                onClick={handleEmailClick}
              />{" "}
            </div>
          </div>
        </BackgroundLines>
      </div>

      <div className="w-full flex flex-col items-center ">
        <hr className="w-3/4 bg-white opacity-70 " />
      </div>

      {/* About section starts from here */}

      <div
        id="about"
        ref={aboutRef}
        tabIndex="-1"
        className=" lg:h-svh h-auto w-full bg-black dark:bg-[#F9F6EE] dark:pb-4 flex flex-col items-center justify-evenly gap-12  pt-5 lg:pt-0 lg:gap-0"
      >
        <img className="w-4" src={pp} alt="error" />
        <div className="flex flex-col items-center lg:mt-0">
          <p className="text-neutral-100 font-sans dark:text-neutral-500  text-sm">
            Get To Know More
          </p>
          <p className=" text-[#12F7D6] tracking-wide md:text-5xl text-4xl lg:text-4xl font-bold font-sans lg:pb-2 pb-1 pt-2 lg:pt-0 ">
            About Me
          </p>
          {/* <div className="w-[30rem] lg:w-[40rem]  relative border-2 border-black hidden lg:block ">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div> */}
          <img className="w-56 lg:w-60" src={slider} alt="error" />
        </div>

        <div className="lg:w-[75%] flex justify-center lg:justify-normal flex-row flex-wrap  lg:flex-nowrap gap-5 lg:gap-0">
          <div className=" w-[65%] lg:w-[45%] rounded-xl flex flex-row  justify-center bg-custom-gradient1">
            <img
              className="w-auto rounded-xl "
              src={myProfile2}
              alt="Profile"
            />
          </div>
          <div className=" w-[90%] flex flex-col-reverse lg:flex-col items-center justify-evenly gap-3">
            <div className="flex flex-row w-full justify-evenly flex-wrap lg:flex-nowrap gap-2">
              <div className="text-white flex flex-col bg-custom-gradient1 items-center px-16 rounded-3xl py-3">
                <img className="w-10" src={experience} alt="Experience" />
                <p className="font-sans font-bold text-[#93C572] ">
                  Experience
                </p>
                <p className="font-sans text-sm font-medium">2+ years</p>
                <p className="font-sans text-sm font-normal">
                  Frontend Development
                </p>
              </div>
              <div className="text-white flex flex-col bg-custom-gradient1 items-center px-[4.5rem] rounded-3xl py-3">
                <img className="w-10" src={education} alt="Education" />
                <p className="font-sans font-bold text-[#93C572]">Education</p>
                <p className="font-sans text-sm font-medium">Master</p>
                <p className="font-sans text-sm font-normal">
                  University of Karachi
                </p>
              </div>
            </div>
            <div className=" w-[87%] lg:w-[90%] ">
              <p className="font-sans text-neutral-500 dark:text-neutral-800 font-light tracking-wider text-sm text-center lg:text-left  ">
                Hi, my name is Hidayat Ali. I am a Frontend Web Developer, UI/UX
                Designer, and I'm very passionate and dedicated to my work. With
                over 2 years of experience as a professional developer and
                designer, I have acquired the skills and knowledge necessary to
                make your project a success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10 lg:mt-0 ">
        <hr className="w-3/4 bg-white opacity-70 " />
      </div>

      {/* technologies i know */}

      <div className="lg:h-svh flex flex-col justify-evenly items-center pt-5 lg:pt-0 ">
        <img className="w-4" src={pp} alt="error" />

        <div
          className="flex flex-col items-center gap-10 w-full "

          //  data-aos="fade-up"
        >
          <div className="flex flex-col items-center pt-10 xl:pt-0">
            <p className="text-[#12F7D6]  tracking-wide md:text-5xl text-4xl lg:text-4xl font-bold font-sans lg:pb-2 text-center ">
              Technologies
            </p>

            {/*    greeen color text-[#93C572]  */}

            <img className="w-72 lg:w-72" src={slider} alt="error" />
            {/* <div className="w-[30rem] lg:w-[40rem]  relative border-2 border-black hidden lg:block ">
            <div className="absolue inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div> */}
          </div>

          <div className="flex flex-row w-full lg:w-[50%] justify-evenly">
            <img className="w-9 bounce-slow" src={react} alt="error" />
            <img className="w-9 bounce-slow" src={vue} alt="error" />
            <img className="w-9 bounce-slow" src={tailwind} alt="error" />
            <img className="w-9 bounce-slow" src={framer} alt="error" />
            <img className="w-9 bounce-slow" src={materialUi} alt="error" />
          </div>
        </div>

        {/* beyound the frontend */}

        <div className="w-[85%] xl:w-[75%] mx-auto flex flex-row flex-wrap justify-between gap-3 mt-10 xl:mt-0">
          <div
            className="border-2 border-gray-600 dark:border-none dark:bg-black rounded-xl xl:w-[50%] px-3.5 py-5 flex flex-col gap-3"
            data-aos="fade-up"
          >
            <div className="flex flex-row items-center gap-1">
              <img className="w-10" src={star} alt="error" />{" "}
              <p className="font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl">
                Beyond the frontend{" "}
              </p>
            </div>
            <p className="text-neutral-500 ">
              I have a basic understanding of technologies beyond frontend
              development, enabling me to work on both client-side and backend
              aspects of web applications.
            </p>
            <div className="flex flex-row gap-3 justify-center flex-wrap mt-2">
              <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-[#93C572] px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                firebase
              </p>

              <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-[#93C572] px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                Express js
              </p>
              <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-[#93C572] px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                Supbase
              </p>
              <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-[#93C572] px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                Next js
              </p>

              <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-[#93C572] px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                MongoDB
              </p>
            </div>
          </div>
          <div className="xl:w-[35%] h-auto" data-aos="fade-up">
            <WobbleCard containerClassName="h-auto w-full py-5 px-3.5">
              <div className="flex flex-row items-center gap-1">
                <img className="w-10" src={star} alt="error" />{" "}
                <p className="font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-lg">
                  Beyond the Development{" "}
                </p>
              </div>
              <p className="text-neutral-600 font-sans text-base ">
                I am looking to explore my interests and hobbies beyond the
                digital realm, seeking new experiences and opportunities for
                growth outside of technology.
              </p>

              <div className="flex flex-row gap-3 justify-center flex-wrap mt-2">
                <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-black px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                  Painting
                </p>

                <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-black px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                  Photography
                </p>
                <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-black px-4 py-1 rounded-[0.8rem] hover:from-black hover:to-gray-300 hover:text-black cursor-pointer hover:font-semibold">
                  Hiking
                </p>
                <p className="font-sans text-white text-sm bg-gradient-to-r from-gray-400 to-black px-4 py-1 rounded-[0.8rem] hover:from-[#93C572] hover:to-gray-400 hover:text-black cursor-pointer hover:font-semibold">
                  Reading
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </div>
      <div className="flex justify-center opacity-70 mt-10 dark:hidden">
        <svg
          width="75%"
          height="100"
          viewBox="0 0 4000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50 Q 125 -50 250 50 
             T 500 50 T 750 50 T 1000 50 
             T 1250 50 T 1500 50 T 1750 50 
             T 2000 50 T 2250 50 T 2500 50 
             T 2750 50 T 3000 50 T 3250 50 
             T 3500 50 T 3750 50 T 4000 50"
            fill="transparent"
            stroke="#FFF"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        id="projects"
        ref={projectRef}
        tabIndex="-1"
        className="lg:h-svh h-auto flex flex-col items-center justify-evenly w-full gap-3 dark:mt-8 dark:py-5 dark:bg-[#F9F6EE]"
      >
        <img className="w-4" src={pp} alt="error" />
        <div className="flex flex-col items-center pt-10 xl:pt-0 ">
          <p className="text-[#12F7D6] tracking-wide md:text-5xl text-4xl lg:text-4xl font-bold font-sans lg:pb-2 pb-1 pt-2 lg:pt-0 ">
            Works
          </p>
          <img className=" lg:w-36" src={slider} alt="error" />
          {/* <img className="w-32 lg:w-3" src={slider} alt="error" /> */}
          <p className="text-neutral-100 font-sans text-base mt-1 text-center dark:text-neutral-800 lg:text-start">
            I had the pleasure of working with these awesome projects
          </p>
        </div>

        <div
          id="default-carousel"
          className="relative w-[90%] lg:w-[50%]"
          data-carousel="slide"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="relative h-auto overflow-hidden rounded-xl border-2 border-gray-600 mt-3">
            <div
              className={`hidden duration-700 ease-in-out ${
                currentSlide === 0 ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <div className="flex flex-col gap-6 justify-center items-center h-full py-10">
                <div className="flex flex-row justify-between w-[70%]">
                  {" "}
                  <p className="text-white dark:text-neutral-800">Ingredient Insight</p>{" "}
                  <Link
                    to="https://ingredient-insight.vercel.app/"
                    className="text-[#12F7D6] underline underline-offset-4 "
                  >
                    View
                  </Link>{" "}
                </div>
                <img
                  className="w-[70%] h-36 lg:h-auto rounded-xl"
                  src={ingri}
                  alt="error"
                />
              </div>
            </div>
            <div
              className={`hidden duration-700 ease-in-out  ${
                currentSlide === 1 ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <div className="flex flex-col gap-6 justify-center items-center h-full py-10">
                <div className="flex flex-row justify-between w-[70%]">
                  <p className="text-white dark:text-neutral-800">Hospital Management</p>
                  <Link
                    to="https://hospital-web-app-rust.vercel.app/"
                    className="text-[#12F7D6] underline underline-offset-4 "
                  >
                    View
                  </Link>
                </div>
                <img
                  className="w-[70%]  h-36 lg:h-auto rounded-xl "
                  src={hospi}
                  alt="error"
                />
              </div>
            </div>
            <div
              className={`hidden duration-700 ease-in-out ${
                currentSlide === 2 ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <div className="flex flex-col gap-6 justify-center items-center h-full py-10">
                <div className="flex flex-row justify-between  w-[70%]">
                  <p className="text-white dark:text-neutral-800">AI Room Decorator</p>{" "}
                  <Link
                    to="https://clients-one-wheat.vercel.app/"
                    className="text-[#12F7D6] underline underline-offset-4 "
                  >
                    View
                  </Link>
                </div>
                <img
                  className="w-[70%]  h-36 lg:h-auto rounded-xl "
                  src={room}
                  alt="error"
                />
              </div>
            </div>
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === 0 ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(0)}
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === 1 ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(1)}
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === 2 ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(2)}
              aria-label="Slide 3"
            ></button>
            {/* <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === 3 ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(3)}
              aria-label="Slide 4"
            ></button> */}
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center opacity-70 mt-10 dark:hidden">
        <svg
          width="75%"
          height="100"
          viewBox="0 0 4000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50 Q 125 -50 250 50 
             T 500 50 T 750 50 T 1000 50 
             T 1250 50 T 1500 50 T 1750 50 
             T 2000 50 T 2250 50 T 2500 50 
             T 2750 50 T 3000 50 T 3250 50 
             T 3500 50 T 3750 50 T 4000 50"
            fill="transparent"
            stroke="#FFF"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* <div className="w-full flex flex-col items-center mt-3 lg:mt-0 ">
        <hr className="w-3/4  dark:bg-black dark:h-0.5 opacity-70 " />
      </div> */}

      

      <div
        id="contact"
        ref={contactRef}
        tabIndex="-1"
        className="lg:h-svh flex flex-col items-center justify-evenly w-full lg:gap-3 gap-14 dark:mt-10"
      >
        <img className="w-4 " src={pp} alt="error" />
        <div className="flex flex-col items-center xl:pt-0 ">
          <p className="text-[#12F7D6] tracking-wide md:text-5xl text-4xl lg:text-4xl font-bold font-sans lg:pb-2 pb-1 lg:pt-0 ">
            Contact
          </p>
          <img className=" lg:w-40" src={slider} alt="error" />
          <p className="text-neutral-100 font-sans text-base mt-1 dark:text-neutral-800">
            I am currently available for work
          </p>
        </div>

        <img className="w-60" src={almond} alt="erroe" />
        <form className=" w-[85%] lg:w-[60%] bg-black  dark:bg-white flex flex-col gap-10 items-center ">
          <div className="w-full flex flex-wrap justify-between gap-6">
            <div className="flex flex-col gap-2.5 w-[45%]">
              <label
                htmlFor="name"
                className="text-[#12F7D6] font-sans text-sm"
              >
                Your name*
              </label>
              <input
                id="name"
                className="bg-black dark:bg-white dark:text-neutral-800 text-white text-sm border-b-2 border-[#12F7D6] focus:outline-none focus:border-[#0FE7C6] pb-1 "
                placeholder="Enter your name"
                type="text"
                required
              />
            </div>

            <div className="flex flex-col gap-2.5 w-[45%]">
              <label
                htmlFor="email"
                className="text-[#12F7D6] font-sans text-sm"
              >
                Your email*
              </label>
              <input
                id="email"
                className="bg-black dark:bg-white dark:text-neutral-800 text-white text-sm border-b-2 border-[#12F7D6] focus:outline-none focus:border-[#0FE7C6] pb-1"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <label htmlFor="email" className="text-[#12F7D6] font-sans text-sm">
              Your message*
            </label>
            <input
              id="email"
              className="bg-black dark:bg-white dark:text-neutral-800 text-white text-sm border-b-2 border-[#12F7D6] focus:outline-none focus:border-[#0FE7C6] pb-1"
              placeholder="Enter your needs"
              type="text"
              required
            />
          </div>

          <button
            type="submit"
            className="font-sans text-black bg-[#12F7D6] flex flex-row text-[0.92rem] justify-center items-center gap-2 lg:w-[20%] px-4 lg:px-0  py-2.5 rounded-2xl"
          >
            Send Message
            <img className="w-4" src={message} alt="error" />
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col items-center mt-8 mb-3 ">
        <hr className="w-full bg-white dark:bg-black dark:h-0.5  opacity-40 " />
        {/* <p className="text-white">hii</p> */}
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center gap-4 lg:gap-0 ">
        <p className="text-white font-sans dark:text-neutral-800 opacity-75">
          &copy; 2024 Hidayat Ali. All right reserved
        </p>
        <p className="text-white font-sans opacity-75 dark:text-neutral-800 ">
          Privacy Policy &nbsp; &nbsp; &nbsp; &nbsp; Terms & Conditions
        </p>
        <div className="flex flex-row gap-3">
          <Link>
            <img className="w-7" src={insta} alt="error" />
          </Link>
          <Link to="https://github.com/hidayat11111/">
            <img className="w-7" src={git} alt="error" />
          </Link>
          <Link>
            <img className="w-7" src={discord} alt="error" />
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
