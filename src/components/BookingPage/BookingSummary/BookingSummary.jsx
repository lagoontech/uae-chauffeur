import './BookingSummary.css';
import { BsCalendarDate } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import {
  AiFillCar,
  AiOutlineIdcard,
  AiOutlineMail,
  AiFillPhone,
} from 'react-icons/ai';
import { BiNotepad, BiMoneyWithdraw } from 'react-icons/bi';
import { MdFlight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../utils/scrollToTopOfPage';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const BookingSummary = ({
  page,
  setPage,
  index,
  buttonSelected,
  transferFormData,
  setTransferFormData,
  hourlyFormData,
  setHourlyFormData,
  economyCarData,
  setEconomyCarData,
  luxuryCarData,
  setLuxuryCarData,
  premiumCarData,
  setPremiumCarData,
  userDetails,
  setUserDetails,
  payByCash,
  setPayByCash,
  payByLink,
  setPayByLink,
  bookingNumber,
  updatedCarValue,
  setUpdatedCarValue,
  addFlightDetails,
  setFlightDetails,
  flightDetails,
  setDistance,
  setAddFlightDetails,
  setBookingNumber,
  setIsBookingDone,
  setEconomyButtonSelected,
  setLuxuryButtonSelected,
  setPremiumButtonSelected,
}) => {
  const { select } = useContext(ContextData);

  let formDetails;
  if (index === 0) {
    formDetails = transferFormData;
  } else if (index === 1) {
    formDetails = hourlyFormData;
  }

  let carDetails;

  if (buttonSelected === 0) {
    carDetails = economyCarData;
  } else if (buttonSelected == 1) {
    carDetails = luxuryCarData;
  } else if (buttonSelected === 2) {
    carDetails = premiumCarData;
  }

  return (
    <div className='booking-summary-final'>
      <div className='booking-summary-final-heading'>
        <h4>Booking Summary</h4>
      </div>
      <div className='booking-summary-number'>
        <h3>
          BOOKAEG NUMBER :{' '}
          <span className='booking-number'>{bookingNumber}</span>
        </h3>
      </div>
      <div className='booking-summary-date-location'>
        <div className='booking-summary-pickup-date booking-summary-info'>
          <h5>PICKUP DATE</h5>
          <div className='date'>
            <BsCalendarDate></BsCalendarDate>
            <h4>{formDetails.date}</h4>
          </div>
        </div>
      </div>
      <div className='booking-summary-time-location'>
        <div className='booking-summary-drop-time booking-summary-info'>
          <h5>PICKUP TIME</h5>
          <div className='time'>
            <BsCalendarDate></BsCalendarDate>
            <h4>{formDetails.time}</h4>
          </div>
        </div>
      </div>

      <div className='booking-summary-from-location'>
        <div className='booking-summary-pickup-location booking-summary-info'>
          <h5>PICKUP</h5>
          <div className='from'>
            <GoLocation style={{ fontSize: '20px' }}></GoLocation>
            <h4>{formDetails.from}</h4>
          </div>
        </div>
      </div>
      <div className='booking-summary-to-location'>
        <div className='booking-summary-drop-location booking-summary-info'>
          <h5>DROP</h5>
          <div className='to'>
            <GoLocation style={{ fontSize: '20px' }}></GoLocation>
            <h4>{index === 0 ? formDetails.to : formDetails.hourly}</h4>
          </div>
        </div>
      </div>

      <div className='booking-summary-vehicle'>
        <div className='booking-summary-vehicle booking-summary-info'>
          <div className='booking-summary-vehicle-name'>
            <h5>{select == 'AE' ? 'VEHICLE' : '车辆'}</h5>
            <div className='booking-summary-vehicle-name-flex'>
              <AiFillCar style={{ marginRight: '3px' }}></AiFillCar>
              <h4>{carDetails.carName}</h4>
            </div>
          </div>

          <div className='booking-summary-vehicle-fare'>
            <h5>{select == 'AE' ? 'TOTAL FARE' : '总费用'}</h5>
            <div className='booking-summary-vehicle-fare-flex'>
              <BiMoneyWithdraw style={{ marginRight: '3px' }}></BiMoneyWithdraw>
              <h4>AED {updatedCarValue}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='booking-summary-passenger-name-info'>
        <div className='booking-summary-passenger-name booking-summary-info'>
          <div className='booking-summary-passenger'>
            <h5>FIRST NAME</h5>
            <div className='booking-summary-passenger-first-name-flex'>
              <AiOutlineIdcard style={{ marginRight: '3px' }}></AiOutlineIdcard>
              <h4>{userDetails.firstName}</h4>
            </div>
          </div>
          <div className='booking-summary-passenger'>
            <h5>LAST NAME</h5>
            <div className='booking-summary-passenger-last-name-flex'>
              <AiOutlineIdcard style={{ marginRight: '3px' }}></AiOutlineIdcard>
              <h4>{userDetails.lastName}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='booking-summary-passenger-email-phone-info'>
        <div className='booking-summary-passenger-email-phone booking-summary-info'>
          <div className='booking-summary-passenger'>
            <h5>{select == 'AE' ? 'EMAIL' : '电子邮箱'}</h5>
            <div className='booking-summary-passenger-email-flex'>
              <AiOutlineMail style={{ marginRight: '3px' }}></AiOutlineMail>
              <h4>{userDetails.email}</h4>
            </div>
          </div>
          <div className='booking-summary-passenger'>
            <h5>{select == 'AE' ? 'PHONE' : '电话'}</h5>
            <div className='booking-summary-passenger-phone-flex'>
              <AiFillPhone style={{ marginRight: '3px' }}></AiFillPhone>
              <h4>{userDetails.mobileNumber}</h4>
            </div>
          </div>
        </div>
      </div>

      {addFlightDetails && (
        <div className='booking-summary-flight-details'>
          <h5>Flight Number</h5>
          <div className='booking-summary-flight-details-flex'>
            <MdFlight style={{ marginRight: '3px' }}></MdFlight>
            <h4>{flightDetails.flightNumber}</h4>
          </div>
        </div>
      )}

      <div className='booking-summary-passenger-instructions'>
        <h5>{select == 'AE' ? 'AESTRUCTIONS' : '操作指南'}</h5>
        <div className='booking-summary-passenger-instructions-flex'>
          <BiNotepad style={{ marginRight: '3px' }}></BiNotepad>
          <h4>{userDetails.instructions}</h4>
        </div>
      </div>

      <div className='booking-summary-passenger-mode-of-payment'>
        <h5>{select == 'AE' ? 'MODE OF PAYMENT' : '支付方式'}</h5>
        <div className='booking-summary-passenger-mode-of-pament-flex'>
          <BiMoneyWithdraw style={{ marginRight: '3px' }}></BiMoneyWithdraw>
          {payByCash && <h4>{payByCash ? 'CASH' : '---'}</h4>}
          {payByLink && <h4>{payByLink ? 'PAYMENT LINK' : '---'}</h4>}
        </div>
      </div>

      <div className='book-again'>
        <h3>
          {select == 'AE' ? 'Do you want to book again?' : ' 需要再次预定吗？'}
        </h3>
        <div className='book-again-btns'>
          <div className='book-again'>
            <button
              className='book-again-btn'
              onClick={() => {
                setPage(0);
                scrollToTop();
                setTransferFormData({
                  from: '',
                  to: '',
                  date: '',
                  time: '',
                });
                setHourlyFormData({
                  from: '',
                  hourly: '',
                  date: '',
                  time: '',
                });
                setEconomyCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setPremiumCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setLuxuryCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setUserDetails({
                  firstName: '',
                  lastName: '',
                  email: '',
                  mobileNumber: null,
                  instructions: '',
                });
                setFlightDetails({
                  flightNumber: '',
                });
                setIsBookingDone(false);
                setEconomyButtonSelected(0);
                setLuxuryButtonSelected(0);
                setPremiumButtonSelected(0);
                setBookingNumber(Math.floor(Math.random() * 100000000) + 1);
                setAddFlightDetails(false);
                setUpdatedCarValue(0);
                setDistance('');
                setPayByCash(false);
                setPayByLink(false);
              }}
            >
              Book Again
            </button>
          </div>
          <div className='book-again'>
            <Link to='/'>
              <button className='book-again-btn'>
                {select == 'AE' ? 'Home' : '首页'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
