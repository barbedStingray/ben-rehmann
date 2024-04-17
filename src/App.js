import './App.css';
import { useEffect, useState } from 'react';
import starSky from './Images/stars.jpg';
import Island from './Images/island.png';
import stingrayLogo from './Images/LGreyIcon.png';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WitchesTodo from './Images/projectImages/witchesTodo.png';
import Spartacus from './Images/projectImages/coolNAN.png';
import DuckWeather from './Images/projectImages/duckWeather.png';
import HobbitHues from './Images/projectImages/hobbitHues.png';

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

    }
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

        <div className='welcomeDiv' data-aos='fade-up-left' >
          <h2>Projects!</h2>
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
