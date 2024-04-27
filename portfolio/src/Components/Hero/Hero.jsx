import './Hero.css';
import me from '../../assets/me.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={me} alt='Graham Boyle' />
      <h1>
        <span>Graham Boyle,</span> Front-End Engineer based in Lagos, Nigeria.
      </h1>
      <p>
        I am a Front-end Engineer from Lagos, Nigeria with 1 year experience in
        companies like GoldTrain Consults, Noble Pee Enterprise, and Luxury Gold
        LTD.
      </p>
      <div className='hero-action'>
        <a href='#contact' className='hero-connect'>
          Connect With Me
        </a>
        <div className='hero-resume'>
          <a
            href='https://docs.google.com/document/d/12yvsqPS9canuYJ71s5CrFTfYs8fH_VRFMUJ5kBAOABY/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
