import Header from './Header/Header';
import NavBar from '../HomePage/NavBar/NavBar';
import Services from './Services/Services';
import TestimonialsHeader from './TestimonialsHeader/TestimonialsHeader';
import Testimonials from './TestimonialsSlider/Testimonials';
import TestimonialsMain from './TestimonialsSlider/TestimonialsMain';
import AboutUs from '../HomePage/Footer/Footer';
import Whatsapp from '../WhatsApp/Whatsapp';

const AboutUsPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
      <TestimonialsHeader />
      <TestimonialsMain />
      <AboutUs />
      <Whatsapp />
    </div>
  );
};

export default AboutUsPage;
