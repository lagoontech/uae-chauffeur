import './Home.css';
import NavBar from './NavBar/NavBar';
import VideoPage from './VideoPage/VideoPage';
import MainPage from './MainPage/MainPage';
import Info from './Info/Info';
import Quotes from './Quotes/Quotes';
import ChauffeurServices from './ChauffeurService/ChauffeurServices';
import AboutUs from './Footer/Footer';
import Whatsapp from '../WhatsApp/Whatsapp';

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <VideoPage />
      <MainPage />
      <Info />
      <Quotes />
      <ChauffeurServices />
      <AboutUs />
      <Whatsapp />
    </div>
  );
};

export default Home;
