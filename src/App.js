import './App.css';
import { useEffect, useState } from 'react';
import starSky from './Images/stars.jpg';
import Island from './Images/island.png';
import stingrayLogo from './Images/LGreyIcon.png';
import Project from './Project';
import BubbleTitle from './BubbleTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WitchesTodo from './Images/projectImages/witchesTodo.png';
import Spartacus from './Images/projectImages/coolNAN.png';
import DuckWeather from './Images/projectImages/duckWeather.png';
import HobbitHues from './Images/projectImages/hobbitHues.png';
import VeryFirst from './Images/projectImages/veryFirst.png';
import PugsNCookies from './Images/projectImages/pugsNcookies.png';
import TravelLog from './Images/projectImages/travelLog.png';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [projectList, setProjectList] = useState([
    {
      image: HobbitHues,
      URL: 'https://hobbit-hues.vercel.app/#/home',
      desc: ['Adventurous', 'Colorful', 'Creative']
    },
    {
      image: WitchesTodo,
      URL: 'https://witches-todo.vercel.app',
      desc: ['React', 'Axios', 'Scary']
    },
    {
      image: DuckWeather,
      URL: 'https://duck-weather.vercel.app',
      desc: ['Weather API', 'GeoLocation', 'Ducks']
    },
    {
      image: Spartacus,
      URL: 'https://spartan-strength.vercel.app',
      desc: ['Custom Hook', 'Responsive', 'SVG']
    },
    {
      image: TravelLog,
      URL: 'https://travel-log-puce.vercel.app',
      desc: ['Travel', 'Images', 'SVG']
    },
    {
      image: PugsNCookies,
      URL: 'https://pugs-n-cookies.vercel.app',
      desc: ['Next.js', 'File Routing', 'Crumbly']
    },
    {
      image: VeryFirst,
      URL: 'https://barbedstingray.github.io',
      desc: ['1st Project', 'Ever', 'Resume']
    }
  ]);

  const [projectTitle, setProjectTitle] = useState([
    {
      letter: 'P',
      animation: 'float 4s ease-in-out infinite',
      rotate: 'rotate(-5deg)',
      entry: 'fade-up-left',
    },
    {
      letter: 'R',
      animation: '',
      rotate: 'rotate(20deg)',
      entry: '',
    },
    {
      letter: '0',
      animation: '',
      rotate: 'rotate(-10deg)',
      entry: 'fade-up-left',
    },
    {
      letter: 'J',
      animation: '',
      rotate: 'rotate(11deg)',
      entry: '',
    },
    {
      letter: 'E',
      animation: '',
      rotate: 'rotate(-6deg)',
      entry: 'fade-up-left',
    },
    {
      letter: 'C',
      animation: '',
      rotate: 'rotate(4deg)',
      entry: 'flip-up',
    },
    {
      letter: 'T',
      animation: '',
      rotate: 'rotate(-8deg)',
      entry: '',
    },
    {
      letter: 'S',
      animation: '',
      rotate: 'rotate(12deg)',
      entry: '',
    },
  ]);
  const [hobbyTitle, setHobbyTitle] = useState([
    {
      letter: 'H',
      animation: 'float 4s ease-in-out infinite',
      rotate: 'rotate(-5deg)',
      entry: 'fade-up-left',
    },
    {
      letter: 'O',
      animation: '',
      rotate: 'rotate(20deg)',
      entry: '',
    },
    {
      letter: 'B',
      animation: '',
      rotate: 'rotate(-10deg)',
      entry: 'fade-up-left',
    },
    {
      letter: 'B',
      animation: '',
      rotate: 'rotate(11deg)',
      entry: '',
    },
    {
      letter: 'Y',
      animation: '',
      rotate: 'rotate(-6deg)',
      entry: 'fade-up-left',
    },
  ]);


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
            <img src={stingrayLogo} />
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

        <div className='projectTitle'>
          {projectTitle.map((letter) => (
            <BubbleTitle
              letter={letter.letter}
              animation={letter.animation}
              rotate={letter.rotate}
              entry={letter.entry}
            />
          ))}
        </div>


        <div className='projectContainer'>
          {projectList.map((project) => (
            <Project image={project.image} URL={project.URL} desc={project.desc} />
          ))}
        </div>

        <div className='projectTitle'>
          {hobbyTitle.map((letter) => (
            <BubbleTitle
              letter={letter.letter}
              animation={letter.animation}
              rotate={letter.rotate}
              entry={letter.entry}
            />
          ))}

        </div>

      </section>




    </>
  );
}

export default App;
