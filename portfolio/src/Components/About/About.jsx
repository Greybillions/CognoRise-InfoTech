import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import me from '../../assets/me.jpg';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h2>About Me</h2>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='about-section'>
        <div className='about-left'>
          <img src={me} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              I am a Front-end Engineer skilled in HTML, CSS, SCSS, TailwindCSS,
              JavaScript and React.
            </p>
            <p>
              I am proficient in responsive design, technical writing and
              excited about staying on the cutting edge of front-end
              technologies.
            </p>
            <p>
              Open to collaborations and new opportunities. Together we can
              create something truly remarkable! 💻✨
            </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS </p>
              {/* <img src='	https://skillicons.dev/icons?i=html,css' alt='' /> */}
              <hr style={{ width: '95%' }} />
            </div>
            <div className='about-skill'>
              <p>JavaScript </p>
              {/* <img src='	https://skillicons.dev/icons?i=javascript' alt='' /> */}

              <hr style={{ width: '55%' }} />
            </div>
            <div className='about-skill'>
              <p>Tailwind CSS </p>
              {/* <img src='	https://skillicons.dev/icons?i=tailwind' alt='' /> */}
              <hr style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>React JS </p>
              {/* <img src='	https://skillicons.dev/icons?i=react' alt='' /> */}
              <hr style={{ width: '35%' }} />
            </div>
            <div className='about-skill'>
              <p>Tech Writing </p>
              {/* <img src='	https://skillicons.dev/icons?i=react' alt='' /> */}
              <hr style={{ width: '55%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h2>1+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h2>3+</h2>
          <p>CERTIFICATES ACQUIRED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h2>20+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h2>5+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
