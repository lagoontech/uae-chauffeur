import { Link } from 'react-router-dom';
import './MainPage.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/variants';
import { ContextData } from '../../../context/ContextData';
import { useContext } from 'react';

const MainPage = () => {
  const { select } = useContext(ContextData);

  return (
    <div className='main-page-container'>
      <div className='main-page-img'></div>
      <div className='main-page-info-container'>
        <motion.div
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='main-page-buttons'
        >
          <Link to='about'>
            <button className='our-services-btn'>
              {select === 'AE' ? 'OUR SERVICES' : '我们提供的服务'}
            </button>
          </Link>
          <Link to='booking'>
            <button className='make-a-booking-btn'>
              {select === 'AE' ? 'MAKE A BOOKING' : '预订'}
            </button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='main-page-heading'
        >
          <h1 className='heading-1'>
            {select === 'AE'
              ? 'Want A Safe Chauffeur?'
              : '需要一位安全可靠的司机吗？'}
          </h1>
          <h2 className='heading-2'>
            {select === 'AE'
              ? 'Focues on safety, better, trusted ride wherever you go at your fingertips'
              : '无论您去哪里, 弹指间即可享受安全, 卓越以及可靠的乘车体验.'}
          </h2>
        </motion.div>
        <div className='seperator'></div>
      </div>
    </div>
  );
};

export default MainPage;
