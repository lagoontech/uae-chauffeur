import './Footer.css';
import LocationIcon from '../../../assets/LocationIcon.svg';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill, BsFillTelephonePlusFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import uaeChauffuerImg from '../../../assets/Logo3.png';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const AboutUs = ({ contactUsPage }) => {
  const imageStyle = {
    height: '30px',
    width: '30px',
    color: '#e52d42',
    stroke: '#e52d42',
    fill: 'red',
  };

  const { select } = useContext(ContextData);

  return (
    <div className={`about-us ${contactUsPage ? 'contact-us-page' : "'"}`}>
      <div className='uae-chauffuer-logo'>
        <img
          className='uae-chauffeur-img'
          src={uaeChauffuerImg}
          alt='uae-chauffeur-img'
        />
        <p>
          {select === 'AE'
            ? `Our vision is to establish a strong foothold in the ground transport
          sector in UAE by offering unparalleled services to our clients.`
            : '我们的愿景是通过为客户提供无与伦比的服务，在阿联酋的陆地交通领域建立稳固的立足点。'}
        </p>
      </div>
      <div className='about-us-info'>
        <h2 style={{ color: '#e83646' }}>
          {select == 'AE' ? 'About' : '关于'}
        </h2>
        <div className='dubai-location location-icon-div'>
          <ImLocation
            className='icon location-icon-about-us'
            style={{ fontSize: '23px' }}
          />
          {/* <img src={LocationIcon} style={imageStyle} alt='location-icon' /> */}

          <p>
            {select == 'AE'
              ? 'Al Qusais Plaza, Damascus Street, Dubai, UAE'
              : '阿尔库塞斯 广场，大马士革街，迪拜，阿联酋'}
          </p>
        </div>
        <div className='dubai-location location-icon-div'>
          <ImLocation
            className='icon location-icon-about-us'
            style={{ fontSize: '23px' }}
          />

          <p>
            {select == 'AE'
              ? 'BUILDING 18,ZONE 66, STREET 972, DOHA - QATAR'
              : '卡塔尔多哈 972 街 66 区 18 号楼'}
          </p>
        </div>
        <div className='china-location location-icon-div'>
          <ImLocation
            className='icon location-icon-about-us-china'
            style={{ fontSize: '53px' }}
          />

          <p>
            {select == 'AE'
              ? `Room 802&803, A1 Building,Yangtze River Delta Hi-Tech Park,No.1 Lane 99 Jiajie Road,
Qingpu District`
              : '上海市青浦区佳杰路99弄1号长三角绿洲智谷·赵巷A1号楼802室 ，中国上海分公司'}
          </p>
        </div>
        <div className='telephone-container'>
          <div className='telephone'>
            <BsFillTelephonePlusFill className='icon' />
            <p>+971 442723066</p>
          </div>
          <div className='telephone'>
            <BsFillTelephoneFill className='icon' />
            <p>+971 568693458</p>
          </div>
        </div>
        {/* <div className='telephone-container'>
          <div className='telephone'>
            <BsFillTelephoneFill className='icon' />
            <p>00971-0569-1876-22</p>
          </div>
        </div> */}

        <div className='email'>
          <MdEmail className='icon' />
          <p>booking@uaechauffeur.com</p>
        </div>
      </div>
      <div className='information'>
        <h2 style={{ color: '#e83646' }}>
          {select == 'AE' ? 'Information' : '信息'}
        </h2>
        <div className='links'>
          <a href=''>{select === 'AE' ? 'Home' : '首页'}</a>
          <a href=''>{select == 'AE' ? 'About' : '关于'}</a>
          <a href=''>{select === 'AE' ? 'Privacy Policy' : '员工接送服务'}</a>
          <a href=''>{select === 'AE' ? 'FAQ' : '常见问题解答'}</a>
          <a href=''>
            {select === 'AE' ? 'Terms and Condition' : '条款与条件'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
