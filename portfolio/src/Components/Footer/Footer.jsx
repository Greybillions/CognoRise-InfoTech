import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <div className='footer-logo'>
            <h2>GRaHaM</h2>
            <img src={theme_pattern} alt='' />
          </div>
          <p>Front-End Engineer</p>
        </div>
        <div className='footer-top-right'>
          <p id='connect'>Connect with me</p>
          <a
            href='https://github.com/Greybillions'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i> Github
          </a>
          <a
            href='https://twitter.com/Dev__Grey'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i> X (twitter)
          </a>
          <a
            href='https://www.linkedin.com/in/graham-boyle-556471250/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i> Linkedin
          </a>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          &copy; 2024 Graham Boyle. All rights reserved.
        </div>
        <div className='footer-bottom-right'>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
