import './ContactUs.css';
import { useState, useContext } from 'react';
import { ContextData } from '../../context/ContextData';
import NavBar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';
import scrollToTop from '../../utils/scrollToTopOfPage';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Whatsapp from '../WhatsApp/Whatsapp';
import QRImage from '../../assets/WeChatQR/QR.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');

  const { select } = useContext(ContextData);

  const submitHandler = (e) => {
    e.preventDefault();

    if (checkForUserDetails()) {
      sendMail();
      scrollToTop();
      setName('');
      setEmail('');
      setNumber();
      setMessage('');
    } else {
      scrollToTop();
      toast.error('Please add all fields', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'red', color: 'white', fontSize: '16px' },
      });
    }
  };

  function sendMail() {
    const overAllDetails = {
      userName: name,
      userEmail: email,
      userNumber: number,
      userMessage: message,
    };

    emailjs
      .send(
        'service_bylccmx',
        'template_m4agepq',
        overAllDetails,
        'YJbFqAhKTJjJ7t6hk'
      )
      .then(
        (result) => {
          toast.success('UAE CHAUFFEUR TEAM WILL CONTACT YOU SOON', {
            duration: 3000,
            position: 'top-center',
            style: {
              background: 'black',
              color: 'white',
              fontSize: '16px',
            },
          });
        },
        (error) => {
          console.log('error', error);
        }
      );
  }

  function checkForUserDetails() {
    if (name === '' || email === '' || number === 0 || message === '') {
      return false;
    }
    return true;
  }

  const preventKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <NavBar />

      <div className='contact-us-container'>
        <div className='contact-us-left-main'>
          <div className='contact-us-left-container'>
            <div className='contact-us-left-contact-info'>
              <h1>Contact us!</h1>
              <span className='contact-us-underline'></span>
              <div className='email-address-phone-info'>
                <div className='contact-us-email-info'>
                  <h3>Email</h3>
                  <h4>booking@uaechauffeur.com</h4>
                </div>
                <div className='contact-us-phone-info'>
                  <h3>Phone</h3>
                  <h4>+971 568693458</h4>
                  <h4>+971 442723066</h4>
                </div>
                <div className='contact-us-address-info-uae'>
                  <h3>UAE</h3>
                  <h4>Al Qusais Plaza, Damascus Street, Dubai, UAE</h4>
                </div>

                <div className='contact-us-address-info-china'>
                  <h3>Qatar</h3>
                  <h4>BUILDING 18,ZONE 66, STREET 972, DOHA - QATAR</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-us-left-container-china'>
            <div className='contact-us-left-contact-info'>
              <h1>Contact us China!</h1>
              <span className='contact-us-underline'></span>
              <div className='email-address-phone-info'>
                <div className='contact-us-email-info'>
                  <h3>Email</h3>
                  <h4>shirls@fcfleets.com</h4>
                </div>
                <div className='contact-us-phone-info'>
                  <h3>Phone</h3>
                  <h4>Shirls Choi: 00971-0569-1876-22</h4>
                </div>
                <div className='contact-us-address-info-uae'>
                  <h3>WeChat ID</h3>
                  <h4>shirlscai</h4>
                </div>

                <div className='contact-us-address-info-china'>
                  <h3>Wechat QR CODE</h3>
                  <img
                    src={QRImage}
                    className='we-chat-qr-image'
                    alt='We Chat QR Image'
                  />
                </div>
              </div>
            </div>
          </div>
          ;
        </div>
        <div className='contact-us-right-container'>
          <form
            onSubmit={submitHandler}
            onKeyDown={preventKeyDownHandler}
            className='contact-us-right-form'
          >
            <div className='contact-us-right-header'>
              <h1 className='contact-us-h1'>Contact Us!</h1>
              <p className='contact-us-para'>
                Please fill out the form below with questions or comments
              </p>
              <span className='contact-us-right-underline'></span>
            </div>
            <div className='contact-us-right-input-fields'>
              <div className='contact-us-right-input'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='name-input'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className='email-input-and-phone-input-wrapper'>
                  <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    className='email-input inline-input'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type='number'
                    placeholder='Phone'
                    value={number ? number : ''}
                    className='number-input inline-input'
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <textarea
                  name='your-message-text-area'
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Your Message'
                  className='contact-us-text-area'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <span className='contact-us-right-underline'></span>
              </div>
            </div>
            <div className='contact-us-right-submit-btn'>
              <button className='contact-us-right-btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Toaster />
      <link rel='stylesheet' href='style.css' />
      <Footer contactUsPage={true} />
      <Whatsapp />
    </>
  );
};

export default ContactUs;

{
  /* <div className='contact-us-left-map-container'>
            {isLoaded && (
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{
                  borderRadius: '50px',
                  width: '100%',
                  height: '330px',
                }}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
              >
                <MarkerF
                  position={center}
                  onClick={() => setIsMarkerSelected(!isMarkerSelected)}
                />
                {isMarkerSelected && (
                  <InfoWindowF
                    position={center}
                    onCloseClick={() => setIsMarkerSelected(!isMarkerSelected)}
                  >
                    <div className='info-window'>
                      <h1 style={{ color: 'black' }}>UAE CHAUFFEUR</h1>
                      <h2 style={{ color: 'black' }}>
                        Al Qusais Plaza, Damascus Street, Dubai, UAE
                      </h2>
                      <h3>booking@uaechauffeur.com</h3>
                      <h3>+971 509557007</h3>
                      <h3>+971 442723066</h3>
                    </div>
                  </InfoWindowF>
                )}
              </GoogleMap>
            )}
          </div> */
}

{
  /* <div className='contact-us-address-info-china'>
  <h3>China </h3>
  <h4>
    {select == 'AE'
      ? `China Branch, Room 1503, No.20, Lane 1299, Zhoujiazui
                  Road, Yangpu District, Shanghai`
      : `上海市青浦区佳杰路99弄1号长三角绿洲智谷·赵巷A1号楼802室 ，中国上海分公司`}
  </h4>
</div>; */
}
