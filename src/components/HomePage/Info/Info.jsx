import './Info.css';
import { MdSafetyCheck } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/variants';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const Info = () => {
  const { select } = useContext(ContextData);

  return (
    <div className='info-container'>
      <div className='info'>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='info-1'
        >
          <MdSafetyCheck
            style={{ height: '100px', width: '100px', color: 'crimson' }}
          ></MdSafetyCheck>
          <h2 style={{ color: 'black', marginTop: '10px' }}>
            {select === 'AE' ? 'Saftey First' : '安全第一'}
          </h2>
          <p style={{ lineHeight: '2', marginTop: '22px', color: '#181a1f' }}>
            {select === 'AE'
              ? `We focus on your safety always. You can experience geolocated rides,
            verified drivers, and a safety button to ensure your well-being
            throughout your journey with professional chauffer drivers in Dubai`
              : '我们始终将您的安全放在首位。在您与迪拜专车司机的旅程中，您可以体验到地理定位的乘车服务、专业认证的司机，并配备了一键安全按钮，以确保您在整个旅程中的安全。'}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='info-2'
        >
          <AiFillCar
            style={{ height: '100px', width: '100px', color: 'crimson' }}
          ></AiFillCar>
          <h2 style={{ color: 'black', marginTop: '10px' }}>
            {select === 'AE' ? 'Travel Tracking' : '行程跟踪'}
          </h2>
          <p style={{ lineHeight: '2', marginTop: '22px', color: '#181a1f' }}>
            {select === 'AE'
              ? `Every journey is tracked, and you have the option to share your
            route in real time. This feature allows your friends to stay
            informed about your whereabouts during the ride.`
              : '每一次旅程不仅可追踪，而且您可以选择实时共享您的行程。这个功能可以让您的朋友在整个行程中了解您的实时动态。'}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='info-3'
        >
          <BiLeaf
            style={{ height: '100px', width: '100px', color: 'crimson' }}
          ></BiLeaf>
          <h2 style={{ color: 'black', marginTop: '10px' }}>
            {select === 'AE' ? 'Sanitized Cars' : '洁净的车辆'}
          </h2>
          <p style={{ lineHeight: '2', marginTop: '22px', color: '#181a1f' }}>
            {select === 'AE'
              ? `Travel with confidence! We maintain high health and cleaning
            standars to provide you with our best-in-class UAE Chauffeur
            service. Your safety is our top priority in this world.`
              : '安心旅行！我们保持高水准的健康和清洁标准，为您提供一流的阿联酋专车服务。在这个世界上，您的安全是我们的首要任务。'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
