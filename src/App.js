import './App.css';
import starSky from './Images/stars.jpg';
import Island from './Images/island.png';
import stingrayLogo from './Images/LGreyIcon.png';

import LoremIpsum from './LoremIpsum/LoremIpsum';

function App() {





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

      {/* <section className='underSea'>
          <LoremIpsum />
      </section> */}



    </>
  );
}

export default App;
