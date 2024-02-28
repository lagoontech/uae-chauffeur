import './Header.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/variants';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const Header = () => {
  const { select } = useContext(ContextData);

  return (
    <section className='about-us-page'>
      <div className='about-us-container'>
        <div className='inner-container'>
          <motion.h1
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            {select == 'AE' ? 'About Us' : '关于我们'}
          </motion.h1>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='bread-crumb'
          >
            <a href=''>{select == 'AE' ? 'Home' : '家'} &nbsp; ||</a>
            <i className='about-us-i'>
              {select == 'AE' ? 'About Us' : '关于我们'}
            </i>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
