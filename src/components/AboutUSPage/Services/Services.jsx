import { useState, useContext } from 'react';
import { ContextData } from '../../../context/ContextData';
import './Services.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/variants';
import AirportTransferImg from '../../../assets/ServicesImgs/AirportTransferImg.jpg';
import WorldWideTransferImg from '../../../assets/ServicesImgs/WorldWideTransportImg.jpg';
import CorporateTravelImg from '../../../assets/ServicesImgs/CorporateTravelImg.jpg';
import CharterServiceImg from '../../../assets/ServicesImgs/CharterServiceImg.jpg';

const Services = () => {
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);
  const [isToggle3, setIsToggle3] = useState(false);
  const [isToggle4, setIsToggle4] = useState(false);

  const { select } = useContext(ContextData);

  return (
    <section className='services'>
      <div className='what-we-do'>
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          {select == 'AE' ? 'WHAT WE OFFER' : '我们提供什么'}
        </motion.h1>
        <motion.h3
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          {select == 'AE'
            ? 'See What We Can Do for You'
            : '看看我们能为您做些什么'}
        </motion.h3>
      </div>
      <div className='services-container'>
        <div className='airport-transfer service'>
          <img
            loading='lazy'
            src={AirportTransferImg}
            alt='airport-transfer'
            onMouseOver={() => setIsToggle1(!isToggle1)}
            onMouseLeave={() => setIsToggle1(!isToggle1)}
          />
          <span>
            <span className={isToggle1 ? 'active' : ''}></span>
            <span className='text'>
              {select == 'AE' ? 'AIRPORT TRANSFER' : '机场接送'}
            </span>
          </span>
        </div>
        <div className='worldwide-transfer service'>
          <img
            loading='lazy'
            src={WorldWideTransferImg}
            alt='worldwide-transfer'
            onMouseOver={() => setIsToggle2(!isToggle2)}
            onMouseLeave={() => setIsToggle2(!isToggle2)}
          />
          <span>
            <span className={isToggle2 ? 'active' : ''}></span>
            <span className='text'>
              {select == 'AE' ? 'WORLDWIDE TRANSFER' : '全球转移'}
            </span>
          </span>
        </div>
        <div className='corporate-travel service'>
          <img
            loading='lazy'
            src={CorporateTravelImg}
            alt='corporate-travel'
            onMouseOver={() => setIsToggle3(!isToggle3)}
            onMouseLeave={() => setIsToggle3(!isToggle3)}
          />
          <span>
            <span className={isToggle3 ? 'active' : ''}></span>
            <span className='text'>
              {select == 'AE' ? 'CORPORATE TRAVEL' : '商务旅行'}
            </span>
          </span>
        </div>
        <div className='charter-service service'>
          <img
            loading='lazy'
            src={CharterServiceImg}
            alt='corporate-travel'
            onMouseOver={() => setIsToggle4(!isToggle4)}
            onMouseLeave={() => setIsToggle4(!isToggle4)}
          />
          <span>
            <span className={isToggle4 ? 'active' : ''}></span>
            <span className='text'>
              {select == 'AE' ? 'CHARTER SERVICE' : '包机服务'}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
