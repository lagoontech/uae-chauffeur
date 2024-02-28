import LogoImage from '../../../assets/Logo3.png';
import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import ReactFlagsSelect from 'react-flags-select';
import { ContextData } from '../../../context/ContextData';
import { useContext } from 'react';

const NavBar = ({ contactUsPage }) => {
  const [mobile, setMobile] = useState(false);

  const { select, setSelect } = useContext(ContextData);

  const onSelect = (code) => setSelect(code);

  return (
    <div
      className={`nav-bar ${mobile ? 'mobile-layout' : ''} ${
        contactUsPage ? 'contact-us-page' : ''
      } `}
    >
      <div className='nav-bar-img'>
        <NavLink to='/'>
          <img
            className='uae-chauffeur-img'
            src={LogoImage}
            alt='uae-chauffer-img'
          />
        </NavLink>
        <button
          className={`mobile-menu-icon ${mobile ? 'close' : ''}`}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      <div className={`nav-elements ${mobile ? 'mobile-layout' : ''}`}>
        <ul>
          <li>
            <NavLink to='/'>{select === 'AE' ? 'Home' : '首页'}</NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              {select === 'AE' ? 'About Us' : '关于我们'}
            </NavLink>
          </li>

          <li>
            <NavLink to='/services'>
              {select === 'AE' ? 'Services' : '服务'}
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us'>
              {select === 'AE' ? 'Contact Us' : '联系我们'}
            </NavLink>
          </li>
          <li>
            <ReactFlagsSelect
              selected={select}
              onSelect={onSelect}
              countries={['AE', 'CN']}
              customLabels={{ AE: '- EN', CN: '- 中国人' }}
            />
          </li>
        </ul>
      </div>

      <div className='nav-social-media-icons'>
        {/* <a
          style={{ marginRight: '15px' }}
          href='tel:+971 442723066'
          rel='noopener noreferrer'
        >
          <BsPhone style={{ fontSize: '34px', color: 'crimson' }} />
        </a> */}
        <div>
          <a
            style={{ marginRight: '15px' }}
            href='https://www.instagram.com/chauffeur.uae/'
            target='_blank'
          >
            <BsInstagram style={{ fontSize: '34px', color: 'crimson' }} />
          </a>
        </div>
        <div>
          <a href='https://www.facebook.com/uaechauffeur/' target='_blank'>
            <BsFacebook style={{ fontSize: '34px', color: 'blue' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
