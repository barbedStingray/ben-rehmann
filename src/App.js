import logo from './logo.svg';
import './App.css';
import starSky from './Images/stars.jpg';
import Island from './Images/island.png';

import LoremIpsum from './LoremIpsum/LoremIpsum';

function App() {
  return (
    <>
      <section className="islandPage">
        <div className='waves'>
          <img src={starSky} className='stars' />
          <h1>Ben Rehmann</h1>
          <img src={Island} className='island' />
          <div className='wave' id='waveOne'></div>
          <div className='wave' id='waveTwo'></div>
          <div className='wave' id='waveThree'></div>
          <div className='wave' id='waveFour'></div>
        </div>
      </section>

      <section className='underSea'>
          <LoremIpsum />

          <LoremIpsum />
      </section>
    </>
  );
}

export default App;
