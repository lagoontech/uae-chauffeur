import TestimonialsSlider from './TestimonialsSlider';
import { testimonialsData } from '../../../utils/testimonialsData';

const TestimonialsMain = () => {
  return (
    <div style={{ paddingBottom: '20px' }} className='testimonial-main'>
      <TestimonialsSlider testimonialsData={testimonialsData} />
    </div>
  );
};

export default TestimonialsMain;
