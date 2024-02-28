import './Whatsapp.css';
import whatsppIcon from '../../assets/whatsapp-icon.png';

const Whatsapp = () => {
  return (
    <div className='whatsapp-main'>
      <div className='whatsapp'>
        <a
          href='https://api.whatsapp.com/send?phone=+971568693458&text=Hello, I would like to book a chauffeur.'
          target='_blank'
        >
          <img className='whatsapp-img' src={whatsppIcon} alt='whatsapp-img' />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
