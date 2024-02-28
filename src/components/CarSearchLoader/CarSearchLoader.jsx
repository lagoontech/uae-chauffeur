import { Player } from '@lottiefiles/react-lottie-player';
import carSearch from '../../utils/animations/car_search.json';

const CarSearchLoader = () => {
  return (
    <div
      className='car-search-loader'
      style={{
        width: '100%',
        height: '80vh',
        textAlign: 'center',
        background:
          'linear-gradient( 45deg, hsl(0deg 0% 100%) 0%, hsl(120deg 8% 99%) 11%, hsl(120deg 8% 97%) 22%, hsl(120deg 8% 96%) 33%, hsl(120deg 8% 95%) 44%, hsl(120deg 8% 93%) 56%, hsl(120deg 8% 92%) 67%, hsl(120deg 8% 91%) 78%, hsl(120deg 8% 89%) 89%, hsl(120deg 8% 88%) 100% );',
      }}
    >
      <Player
        autoplay={true}
        loop={true}
        src={carSearch}
        style={{ height: '450px', width: '450px' }}
      />
      <h1 style={{ color: 'black' }}>Searching cars for you 😊</h1>
    </div>
  );
};

export default CarSearchLoader;
