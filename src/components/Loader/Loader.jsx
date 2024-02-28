import { Player } from '@lottiefiles/react-lottie-player';

const Loader = ({ lottieJson }) => {
  return (
    <div
      className='loader'
      style={{
        width: '100%',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <Player
        autoplay={true}
        loop={true}
        src={lottieJson}
        style={{ height: '400px', width: '400px' }}
      ></Player>
      <h1 style={{ color: 'black' }}>We are booking your Chauffeur 😍</h1>
    </div>
  );
};

export default Loader;
