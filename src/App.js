import './App.css';
import { useEffect, useState } from 'react';
import starSky from './Images/stars.jpg';
import Island from './Images/island.png';
import stingrayLogo from './Images/LGreyIcon.png';
import Project from './Components/Project';
import BubbleTitle from './Components/BubbleTitle';
import Bubble from './Components/Bubble';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WitchesTodo from './Images/projectImages/witchesTodo.png';
import Spartacus from './Images/projectImages/coolNAN.png';
import DuckWeather from './Images/projectImages/duckWeather.png';
import HobbitHues from './Images/projectImages/hobbitHues.png';
import PugsNCookies from './Images/projectImages/pugsNcookies.png';
import TravelLog from './Images/projectImages/travelLog.png';
import UnitConversion from './Images/projectImages/unitConversion.png';
import HolidayParticles from './Images/projectImages/holidayParticles.png';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  const projectList = [
    {
      image: HobbitHues,
      URL: 'https://hobbit-hues.vercel.app/#/home',
      desc: ['Framer-Motion', 'Cloudinary', 'Full Stack']
    },
    {
      image: Spartacus,
      URL: 'https://spartan-strength.vercel.app',
      desc: ['Custom Hook', 'Responsive', 'Full Stack']
    },
    {
      image: DuckWeather,
      URL: 'https://duck-weather.vercel.app',
      desc: ['Weather API', 'GeoLocation',]
    },
    {
      image: HolidayParticles,
      URL: 'https://holiday-particles.vercel.app',
      desc: ['useRef', 'tsParticles',]
    },
    {
      image: UnitConversion,
      URL: 'https://flexioncodereview.vercel.app',
      desc: ['Unit Conversion']
    },
    {
      image: WitchesTodo,
      URL: 'https://witches-todo.vercel.app',
      desc: ['React', 'Axios', 'Full Stack']
    },
    {
      image: TravelLog,
      URL: 'https://travel-log-puce.vercel.app',
      desc: ['Images', 'SVG']
    },
    {
      image: PugsNCookies,
      URL: 'https://pugs-n-cookies.vercel.app',
      desc: ['Next.js', 'File Routing']
    },
  ];

  const projectTitle = [
    {
      letter: 'G',
      animation: 'floatOne 6s ease-in-out infinite',
      rotate: 'rotate(-5deg)',
      entry: 'fade-up',
      duration: '1000',
    },
    {
      letter: 'A',
      animation: 'floatTwo 6s ease-in-out infinite',
      rotate: 'rotate(18deg)',
      entry: 'fade-up',
      duration: '1900',

    },
    {
      letter: 'L',
      animation: 'floatTwo 7s ease-in-out infinite',
      rotate: 'rotate(-11deg)',
      entry: 'fade-up',
      duration: '1200',
    },
    {
      letter: 'L',
      animation: 'floatThree 6s ease-in-out infinite',
      rotate: 'rotate(11deg)',
      entry: 'fade-up',
      duration: '2100',
    },
    {
      letter: 'E',
      animation: 'floatOne 8s ease-in-out infinite',
      rotate: 'rotate(-10deg)',
      entry: 'fade-up',
      duration: '1600',
    },
    {
      letter: 'R',
      animation: 'floatThree 7s ease-in-out infinite',
      rotate: 'rotate(10deg)',
      entry: 'fade-up',
      duration: '2700',
    },
    {
      letter: 'Y',
      animation: 'floatOne 6.5s ease-in-out infinite',
      rotate: 'rotate(-6deg)',
      entry: 'fade-up',
      duration: '2200',
    },
  ];
  const aboutList = [
    {
      name: 'Energy',
      div: 'energyBubble',
      animation: 'floatOne 6s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(10deg)',
    },

    {
      name: 'Lead',
      div: 'leaderBubble',
      animation: 'floatTwo 6.5s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(-5deg)',
    },
    {
      name: 'Vision',
      div: 'visionBubble',
      animation: 'floatThree 6s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(6deg)',
    },
    {
      name: 'Balance',
      div: 'balanceBubble',
      animation: 'floatTwo 7s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(-20deg)',
    },
    {
      name: 'Create',
      div: 'creativeBubble',
      animation: 'floatOne 8s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(16deg)',
    },
    {
      name: 'Passion',
      div: 'passionBubble',
      animation: 'floatThree 7s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(-10deg)',
    },
    {
      name: 'Adapt',
      div: 'adaptBubble',
      animation: 'floatOne 6.5s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(9deg)',
    },
    {
      name: 'Integrity',
      div: 'integrityBubble',
      animation: 'floatTwo 7s ease-in-out infinite',
      entry: 'fade-up',
      rotate: 'rotate(7deg)',
    },
  ];


  return (
    <>
      <section className="islandPage">

        {/* sky animations */}
        <div className='sky'>
          <div className='skyPhase skyDawn'></div>
          <div className='skyPhase skyNoon'></div>
          <div className='skyPhase skyDusk'></div>
          <div className='skyPhase skyMidnight'>
            <img src={starSky} className='stars' />
          </div>
          <div className='orbitSun'>
            <div className='sun'></div>
          </div>
          <div className='orbitMoon'>
            <div className='moon'></div>
          </div>
        </div>

        {/* foreground and title */}
        <div className='waves'>

          <h1 className='titleBen'>Ben Rehmann</h1>
          <div className='titleStingray logoContainer'>
            <img className='logo' src={stingrayLogo} />
            <h2 className='alias'>barbed_Stingray</h2>
          </div>

          <img src={Island} className='island' />
          <div className='wave' id='waveOne'></div>
          <div className='wave' id='waveTwo'></div>
          <div className='wave' id='waveThree'></div>
          <div className='wave' id='waveFour'></div>
        </div>
      </section>




      <section className='underSea'>

        {/* <div className='aboutDiv'>
          {aboutList.map((bubble) => (
            <Bubble
              name={bubble.name}
              div={bubble.div}
              entry={bubble.entry}
              animation={bubble.animation}
              rotate={bubble.rotate}
            />
          ))}
        </div> */}


        <div className='projectTitle'>
          {projectTitle.map((letter) => (
            <BubbleTitle
              letter={letter.letter}
              animation={letter.animation}
              rotate={letter.rotate}
              entry={letter.entry}
              duration={letter.duration}
            />
          ))}
        </div>


        <div className='projectContainer'>
          {projectList.map((project) => (
            <Project image={project.image} URL={project.URL} desc={project.desc} />
          ))}
        </div>

      </section>




    </>
  );
}

export default App;
