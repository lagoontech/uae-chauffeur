import './TestimonialsHeader.css';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const TestimonialsHeader = () => {
  const { select } = useContext(ContextData);

  return (
    <div className='testimonials-header-main'>
      <div className='testimonials-header'>
        <h6>{select == 'AE' ? 'Partners' : '伙伴'}</h6>
        <h3>{select == 'AE' ? 'Top Client Reviews' : '顶级客户评论'}</h3>
        <span className='line'></span>
      </div>
    </div>
  );
};

export default TestimonialsHeader;
