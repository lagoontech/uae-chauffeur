import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';
import { AiOutlineCar } from 'react-icons/ai';
import {
  MdFlight,
  MdOutlineBedroomParent,
  MdPeopleOutline,
} from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { RiCustomerService2Line } from 'react-icons/ri';
import './Services.css';

const Services = () => {
  const iconColor = { fontSize: '30px', marginTop: '5px', color: 'crimson' };

  const { select } = useContext(ContextData);

  return (
    <div className='services-main'>
      <div className='services-heading-page'>
        <h1 className='h1'>{select == 'AE' ? 'Our Services' : '我们的服务'}</h1>
        <p className='p'>
          {select == 'AE'
            ? `We're thrilled to offer you a seamless travel experience with our
          comprehensive services, covering stays, flights, and cars.`
            : '我们很高兴通过我们全面的服务（涵盖住宿、航班和汽车）为您提供无缝的旅行体验'}
        </p>
      </div>
      <div className='services-section'>
        <div>
          <MdFlight style={iconColor} />
          <h2>{select == 'AE' ? 'Flights' : '航班'}</h2>
          <p>
            {select == 'AE'
              ? 'Embark on a journey of seamless travel with our flight services'
              : '搭乘我们的航班服务踏上无缝旅行之旅'}
          </p>
        </div>
        <div>
          <MdOutlineBedroomParent style={iconColor} />
          <h2>{select == 'AE' ? 'Stays' : '住宿'}</h2>
          <p>
            {select == 'AE'
              ? 'Indulge in comfort and hospitality with our exceptional stay options'
              : '享受我们卓越的住宿选择，享受舒适和热情好客的住宿体验'}
          </p>
        </div>
        <div>
          <AiOutlineCar style={iconColor} />
          <h2>{select == 'AE' ? 'Cars' : '汽车'}</h2>
          <p>
            {select == 'AE'
              ? 'Experience the freedom of the open road with our top-notch car services.'
              : '通过我们一流的汽车服务体验开放道路的自由'}
          </p>
        </div>
        <div>
          <MdPeopleOutline style={iconColor} />
          <h2>{select == 'AE' ? 'Tours' : '旅游'}</h2>
          <p>
            {select == 'AE'
              ? 'Embark on unforgettable adventures with our curated tours that promise to awaken your wanderlust.'
              : '参加我们精心策划的旅行，开启难忘的冒险之旅，唤醒您的旅行欲望'}
          </p>
        </div>
        <div>
          <IoIosPeople style={iconColor} />
          <h2>{select == 'AE' ? 'Staffs' : '员工'}</h2>
          <p>
            {select == 'AE'
              ? `Elevate your team's commute with our efficient staff transportation services`
              : '通过我们高效的员工交通服务提升您团队的通勤体验'}
          </p>
        </div>
        <div>
          <RiCustomerService2Line style={iconColor} />
          <h2>{select == 'AE' ? 'Charter' : '宪章'}</h2>
          <p>
            {select == 'AE'
              ? `This service is commonly utilized for private travel, events, or
            business purposes`
              : '此服务通常用于私人旅行、活动或商业目的'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
