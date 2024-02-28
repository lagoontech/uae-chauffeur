import './Summary.css';
import { MdFlight } from 'react-icons/md';
import { BsCalendarDate, BsClockFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import {
  AiFillCar,
  AiOutlineIdcard,
  AiOutlineMail,
  AiFillPhone,
} from 'react-icons/ai';

import { BiNotepad, BiMoney, BiMoneyWithdraw } from 'react-icons/bi';
import scrollToTop from '../../../utils/scrollToTop';
import checkForCarSelection from '../../../utils/checkForCarSelection';
import toast, { Toaster } from 'react-hot-toast';
import checkForUserDetails from '../../../utils/checkForUserDetails';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const Summary = ({
  page,
  setPage,
  index,
  buttonSelected,
  economyButtonSelected,
  premiumButtonSelected,
  luxuryButtonSelected,
  transferFormData,
  hourlyFormData,
  economyCarData,
  luxuryCarData,
  premiumCarData,
  userDetails,
  addFlightDetails,
  flightDetails,
  payByCash,
  payByLink,
  updatedCarValue,
  bookingNumber,
  distance,
  setIsBookingDone,
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
  } else if (buttonSelected === 1) {
    carDetails = luxuryCarData;
  } else if (buttonSelected === 2) {
    carDetails = premiumCarData;
  }

  function sendEmail() {
    let formEmailDetails;
    if (index === 0) {
      formEmailDetails = transferFormData;
    } else if (index === 1) {
      formEmailDetails = hourlyFormData;
    }

    let carEmailDetails;

    if (buttonSelected === 0) {
      carEmailDetails = economyCarData;
    } else if (buttonSelected == 1) {
      carEmailDetails = luxuryCarData;
    } else if (buttonSelected === 2) {
      carEmailDetails = premiumCarData;
    }

    const overallDetails = {
      from: formEmailDetails.from,
      to: `${index === 0 ? formEmailDetails.to : formEmailDetails.hourly}`,
      date: formEmailDetails.date,
      time: formEmailDetails.time,
      carName: carEmailDetails.carName,
      carPrice: updatedCarValue,
      carCategory: carEmailDetails.category,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber,
      instructions: userDetails.instructions,
      paymentMethod: `${payByCash ? 'CASH' : 'PAY BY LINK'}`,
      paymentStatus: `${payByCash ? 'UnPaid' : 'Paid'}`,
      bookingNumber: bookingNumber,
      distance: distance,
      flightNumber: `${addFlightDetails ? flightDetails.flightNumber : 'N/A'}`,
    };

    emailjs
      .send(
        // 'service_bylccmx',
        'service_ib7y4ix',
        // 'template_kzgg9ed',
        'template_d2lgc4p',
        overallDetails,
        // 'YJbFqAhKTJjJ7t6hk'
        'H3cS0hbUBcU3s88Ro'
      )
      .then(
        (result) => {
          setIsBookingDone(true);
          toast.success(
            'Your Chauffeur has been booked successfully. Our Operations team will contact you shortly',
            {
              duration: 3000,
              position: 'top-center',
              style: { background: 'black', color: 'white', fontSize: '16px' },
            }
          );
          if (payByLink) {
            toast.success('A Payment link will be sent to your mobile number', {
              duration: 7000,
              position: 'top-right',
              style: {
                background: '#0F0858',
                color: 'white',
                fontSize: '16px',
              },
            });
          }
        },
        (error) => {
          toast.error('There is some problem in sending email', {
            duration: 3000,
            position: 'top-right',
            style: {
              background: 'red',
              color: 'white',
              fontSize: '16px',
            },
          });
        }
      );
  }

  return (
    <div className='car-summary-main-div'>
      <div
        className={`car-summary ${page === 1 ? 'cars' : 'details'} ${
          addFlightDetails ? 'flight' : ''
        } ${buttonSelected === 1 ? 'luxury' : ''}`}
      >
        <div className='summary-title'>
          <h1>Summary</h1>
        </div>

        <div className='summary-date-and-time'>
          <div className='summary-pickup-date'>
            <h5>PICKUP DATE</h5>
            <div className='date'>
              <BsCalendarDate></BsCalendarDate>
              <h4>{formDetails.date}</h4>
            </div>
          </div>
          <div className='summary-pickup-time'>
            <h5>PICKUP TIME</h5>
            <div className='time'>
              <BsClockFill></BsClockFill>
              <h4>{formDetails.time}</h4>
            </div>
          </div>
        </div>

        <div className='summary-from-address'>
          <h5>PICKUP</h5>
          <div className='pickup'>
            <GoLocation style={{ fontSize: '20px' }}></GoLocation>
            <h4>{formDetails.from}</h4>
          </div>
        </div>

        <div className='summary-to-address'>
          <h5>DROP</h5>
          <div className='drop'>
            <GoLocation style={{ fontSize: '20px' }}></GoLocation>
            <h4>{index === 0 ? formDetails.to : formDetails.hourly}</h4>
          </div>
        </div>

        <div className='summary-car-price'>
          <div className='vehicle-name'>
            <h5>{select == 'AE' ? 'VEHICLE' : '车辆'}</h5>
            <div className='vehicle-name-flex'>
              <AiFillCar style={{ marginRight: '3px' }}></AiFillCar>
              {carDetails.carName !== '' ? (
                <h4>{carDetails.carName}</h4>
              ) : (
                '---'
              )}
            </div>
          </div>
          <div className='vehicle-fare'>
            <h5>{select == 'AE' ? 'TOTAL FARE' : '总费用'}</h5>
            <div className='vehicle-fare-flex'>
              <BiMoney style={{ marginRight: '3px' }}></BiMoney>
              {updatedCarValue === 0 ? '---' : <h4>AED {updatedCarValue}</h4>}
            </div>
          </div>
        </div>

        {page === 2 && (
          <div className='summary-passenger-name'>
            <div className='passenger-first-name'>
              <h5>FIRST NAME</h5>
              <div className='passenger-first-name-div'>
                <AiOutlineIdcard
                  style={{ marginRight: '3px' }}
                ></AiOutlineIdcard>
                {userDetails.firstName !== '' ? (
                  <h4>{userDetails.firstName}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
            <div className='last-name'>
              <h5>LAST NAME</h5>
              <div className='passenger-last-name-div'>
                <AiOutlineIdcard
                  style={{ marginRight: '3px' }}
                ></AiOutlineIdcard>
                {userDetails?.lastName !== '' ? (
                  <h4>{userDetails.lastName}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className='summary-passenger-email-mobile'>
            <div className='passenger-email'>
              <h5>{select == 'AE' ? 'EMAIL' : '电子邮箱'}</h5>
              <div className='passenger-email-div'>
                <AiOutlineMail style={{ marginRight: '3px' }}></AiOutlineMail>
                {userDetails.email !== '' ? (
                  <h4>{userDetails.email}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
            <div className='passenger-mobile-number'>
              <h5>MOBILE NO</h5>
              <div className='passenger-mobile-number-div'>
                <AiFillPhone style={{ marginRight: '3px' }}></AiFillPhone>
                {userDetails.mobileNumber !== 0 ? (
                  <h4>{userDetails.mobileNumber}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
          </div>
        )}

        {addFlightDetails && (
          <div className='add-flight-details-summary'>
            <div className='flight-details'>
              <h5>Flight Number</h5>
              <div className='passenger-flight-div'>
                <MdFlight style={{ marginRight: '3px' }}></MdFlight>
                {flightDetails.flightNumber !== '' ? (
                  <h4>{flightDetails.flightNumber}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className='summary-passenger-instructions'>
            <div className='passenger-instructions'>
              <h5>{select == 'AE' ? 'INSTRUCTIONS' : '操作指南'}</h5>
              <div className='passenger-instructions-div'>
                <BiNotepad style={{ marginRight: '3px' }}></BiNotepad>
                {userDetails.instructions !== '' ? (
                  <h4>{userDetails.instructions}</h4>
                ) : (
                  '---'
                )}
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className='mode-of-payment'>
            <h5>{select == 'AE' ? 'MODE OF PAYMENT' : '支付方式'}</h5>
            <div className='mode-of-payment-div'>
              <BiMoneyWithdraw style={{ marginRight: '3px' }}></BiMoneyWithdraw>
              {payByCash && <h4>{payByCash ? 'CASH' : '---'}</h4>}
              {payByLink && <h4>{payByLink ? 'PAYMENT LINK' : ''} </h4>}
            </div>
          </div>
        )}

        {updatedCarValue !== 0 && (
          <div className='total-fare-last-div'>
            <h2
              className='total-fare-h2'
              style={{ color: '#04074A', fontSize: '28px' }}
            >
              {select == 'AE' ? 'Total Fare' : '总费用'} :{' '}
              <p style={{ color: 'red' }}>AED {updatedCarValue}</p>
            </h2>
          </div>
        )}
      </div>

      {page === 1 && (
        <div className={`prev-and-continue-btns ${page == 1 ? 'cars' : ''}`}>
          <button
            className='prev-button'
            onClick={() => {
              scrollToTop();
              setPage(page - 1);
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
            }}
          >
            Prev
          </button>
          <button
            className='continue-button'
            onClick={() => {
              if (
                checkForCarSelection(
                  economyButtonSelected,
                  luxuryButtonSelected,
                  premiumButtonSelected
                )
              ) {
                scrollToTop();
                setPage(page + 1);
              } else {
                toast.error('Please select one car', {
                  duration: 3000,
                  position: 'top-right',
                  style: {
                    background: 'red',
                    color: 'white',
                    fontSize: '16px',
                  },
                });
              }
            }}
          >
            Continue
          </button>
        </div>
      )}
      {page == 2 ? (
        <div className={`prev-and-continue-btns`}>
          <button
            style={{ background: 'black' }}
            className='prev-button'
            onClick={() => {
              scrollToTop();
              setPage(page - 1);
            }}
          >
            {select == 'AE' ? 'Prev' : '返回'}
          </button>
          <button
            style={{ background: 'black' }}
            className='continue-button'
            onClick={() => {
              if (checkForUserDetails(userDetails, payByCash, payByLink)) {
                setPage(page + 1);
                sendEmail();
              } else {
                scrollToTop();
                toast.error('Please add all fields', {
                  duration: 3000,
                  position: 'top-right',
                  style: {
                    background: 'red',
                    color: 'white',
                    fontSize: '16px',
                  },
                });
              }
            }}
          >
            Book
          </button>
        </div>
      ) : (
        ''
      )}

      <Toaster />
    </div>
  );
};

export default Summary;
