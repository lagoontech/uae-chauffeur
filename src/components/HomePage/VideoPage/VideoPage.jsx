import video from '../../../assets/Header_Vid_Update.mp4';

const VideoPage = () => {
  return (
    <div className='video-page-container'>
      <div style={{ marginBottom: '-7px' }} className='video'>
        <video autoPlay muted loop width='100%'>
          <source src={video} />
        </video>
      </div>
    </div>
  );
};

export default VideoPage;
