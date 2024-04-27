import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xleqzrgp');

  if (state.succeeded) {
    return (
      <h2 style={{ margin: '70px 0 70px 50px' }}>
        Thanks for reaching out! kindly Reload Page.
      </h2>
    );
  }

  return (
    <div className='contact'>
      <div id='contact' className='contact-title'>
        <h2>Get in touch</h2>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-container'>
        <div className='contact-left'>
          <h2>Contact Me</h2>
          <p>
            I am currently available to take on new projects, so feel free to
            reach send a message about anything you want me to work on. You can
            contact me anytime.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' />
              <p>
                <a target='_blank' href='mailto:grahamboyle22@gmail.com'>
                  grahamboyle22@gmail.com
                </a>
              </p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' />
              <p>
                <a href='tel:+2347032363528'>+234 703 236 3528</a>
              </p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} action='' className='contact-right'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            placeholder='enter your name'
            name='name'
            required
          />
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='enter your email'
            name='email'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <label htmlFor=''>What Services would you like?</label>
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='enter service'
            required
          />
          <label htmlFor=''>More details about the services you need</label>
          <textarea name='message' id='message' rows='8'></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button
            className='contact-submit'
            type='submit'
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
