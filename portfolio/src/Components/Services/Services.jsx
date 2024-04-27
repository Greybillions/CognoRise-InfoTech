import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h2>Services</h2>
        <img src={theme_pattern} alt='' />
      </div>

      {/* Mapping service data imported for fever lines of code */}
      <div className='services-container'>
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
