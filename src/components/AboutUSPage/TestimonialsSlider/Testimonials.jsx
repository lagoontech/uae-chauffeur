import './Testimonials.css';
import { ImQuotesRight } from 'react-icons/im';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const Testimonials = (props) => {
  const { testimonial, img, name, testimonialCn } = props;

  const { select } = useContext(ContextData);

  return (
    <div className='testimonials'>
      <ImQuotesRight color='#d7b65d' fontSize='22px' />
      <p>{select == 'AE' ? testimonial : testimonialCn}</p>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Testimonials;
