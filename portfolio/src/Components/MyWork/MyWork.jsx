import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='projects' className='mywork'>
      <div className='mywork-title'>
        <h2>My Latest Projects</h2>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => {
          return (
            <>
              <div className='work'>
                <img key={index} src={work.w_img} />
                <div className='info'>
                  <h2>{work.w_name}</h2>
                  <p>{work.w_dec}</p>
                  <a
                    href={work.w_link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fas fa-up-right-from-square'></i>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='show-more'>
        <p>Show More</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
};

export default MyWork;
