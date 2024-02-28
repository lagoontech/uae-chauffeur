import './BookingForm.css';
import { useState, useContext } from 'react';
import { GoLocation } from 'react-icons/go';
import { FiClock } from 'react-icons/fi';
import TransferForm from '../TransferForm/TransferForm';
import HourForm from '../HourForm/HourForm';
import DetailsForm from '../DetailsForm/DetailsForm';
import { useJsApiLoader } from '@react-google-maps/api';
import NavBar from '../../HomePage/NavBar/NavBar';
import CarLists from '../Cars/CarLists';
import toast, { Toaster } from 'react-hot-toast';
import scrollToTop from '../../../utils/scrollToTopOfPage.js';
import BookingSummary from '../BookingSummary/BookingSummary';
import { ContextData } from '../../../context/ContextData';

import Loader from '../../Loader/Loader';
import { useEffect } from 'react';
import CarSearchLoader from '../../CarSearchLoader/CarSearchLoader';
import lottieJson from '../../../utils/animations/red-car-animation.json';

const BookingForm = () => {
  const { isLoaded } = useContext(ContextData);

  const [page, setPage] = useState(0);
  const [isToggled, setIsToggled] = useState(true);
  const [index, setIndex] = useState(0);
  const [transferFormData, setTransferFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
  });

  const [hourlyFormData, setHourlyFormData] = useState({
    from: '',
    hourly: '',
    date: '',
    time: '',
  });

  // economyCarData
  const [economyCarData, setEconomyCarData] = useState({
    carName: '',
    price: 0,
    perKm: 0,
    category: '',
  });

  // LuxuryCarData
  const [luxuryCarData, setLuxuryCarData] = useState({
    carName: '',
    price: 0,
    perKm: 0,
    category: '',
  });

  // PremiunCarData
  const [premiumCarData, setPremiumCarData] = useState({
    carName: '',
    price: 0,
    perKm: 0,
    category: '',
  });

  const [updatedCarValue, setUpdatedCarValue] = useState(0);

  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  // Api Call to get the Fare

  const [buttonSelected, setButtonSelected] = useState(0);

  // economyCarButton
  const [economyButtonSelected, setEconomyButtonSelected] = useState(0);

  // luxuryCarButton
  const [luxuryButtonSelected, setLuxuryButtonSelected] = useState(0);

  // premiumCarButton
  const [premiumButtonSelected, setPremiumButtonSelected] = useState(0);

  // UserDetails

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: null,
    instructions: '',
  });

  const [flightDetails, setFlightDetails] = useState({
    flightNumber: '',
  });

  const [cardDetails, setCardDetails] = useState({
    cardNumber: 0,
    cardExpiry: 0,
    cardCVV: 0,
    cardHolderName: '',
  });

  const [payByCash, setPayByCash] = useState(false);
  const [payByLink, setPayByLink] = useState(false);

  const [addFlightDetails, setAddFlightDetails] = useState(false);

  const [bookingNumber, setBookingNumber] = useState(
    Math.floor(Math.random() * 100000000) + 1
  );

  const [isBookingDone, setIsBookingDone] = useState(false);

  const [isCarLoading, setIsCarLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCarLoading(true);
    }, 6000);

    return () => clearTimeout(timer);
  });

  const PageDisplay = () => {
    if (index === 0 && page === 0) {
      return (
        <TransferForm
          index={index}
          transferFormData={transferFormData}
          setTransferFormData={setTransferFormData}
          page={page}
          setPage={setPage}
          isLoaded={isLoaded}
          setDistance={setDistance}
          setDuration={setDuration}
        />
      );
    } else if (index === 1 && page === 0) {
      return (
        <HourForm
          index={index}
          hourlyFormData={hourlyFormData}
          setHourlyFormData={setHourlyFormData}
          page={page}
          setPage={setPage}
          isLoaded={isLoaded}
        />
      );
    } else if (page === 1) {
      if (isCarLoading) {
        return (
          <CarLists
            page={page}
            setPage={setPage}
            distance={distance}
            index={index}
            buttonSelected={buttonSelected}
            setButtonSelected={setButtonSelected}
            transferFormData={transferFormData}
            hourlyFormData={hourlyFormData}
            economyCarData={economyCarData}
            setEconomyCarData={setEconomyCarData}
            economyButtonSelected={economyButtonSelected}
            setEconomyButtonSelected={setEconomyButtonSelected}
            luxuryCarData={luxuryCarData}
            setLuxuryCarData={setLuxuryCarData}
            luxuryButtonSelected={luxuryButtonSelected}
            setLuxuryButtonSelected={setLuxuryButtonSelected}
            premiumCarData={premiumCarData}
            setPremiumCarData={setPremiumCarData}
            premiumButtonSelected={premiumButtonSelected}
            setPremiumButtonSelected={setPremiumButtonSelected}
            updatedCarValue={updatedCarValue}
            setUpdatedCarValue={setUpdatedCarValue}
          />
        );
      } else {
        return <CarSearchLoader />;
      }
    } else if (page === 2) {
      return (
        <DetailsForm
          page={page}
          setPage={setPage}
          index={index}
          buttonSelected={buttonSelected}
          economyButtonSelected={economyButtonSelected}
          luxuryButtonSelected={luxuryButtonSelected}
          premiumButtonSelected={premiumButtonSelected}
          setTransferFormData={setTransferFormData}
          transferFormData={transferFormData}
          setHourlyFormData={setHourlyFormData}
          hourlyFormData={hourlyFormData}
          economyCarData={economyCarData}
          luxuryCarData={luxuryCarData}
          premiumCarData={premiumCarData}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          payByCash={payByCash}
          setPayByCash={setPayByCash}
          payByLink={payByLink}
          setPayByLink={setPayByLink}
          addFlightDetails={addFlightDetails}
          setAddFlightDetails={setAddFlightDetails}
          flightDetails={flightDetails}
          setFlightDetails={setFlightDetails}
          updatedCarValue={updatedCarValue}
          bookingNumber={bookingNumber}
          distance={distance}
          setIsBookingDone={setIsBookingDone}
          setUpdatedCarValue={setUpdatedCarValue}
        />
      );
    } else if (page === 3) {
      if (isBookingDone) {
        return (
          <BookingSummary
            page={page}
            setPage={setPage}
            index={index}
            buttonSelected={buttonSelected}
            setTransferFormData={setTransferFormData}
            transferFormData={transferFormData}
            hourlyFormData={hourlyFormData}
            setHourlyFormData={setHourlyFormData}
            economyCarData={economyCarData}
            setEconomyCarData={setEconomyCarData}
            luxuryCarData={luxuryCarData}
            setLuxuryCarData={setLuxuryCarData}
            premiumCarData={premiumCarData}
            setPremiumCarData={setPremiumCarData}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            payByCash={payByCash}
            setPayByCash={setPayByCash}
            payByLink={payByLink}
            setPayByLink={setPayByLink}
            bookingNumber={bookingNumber}
            updatedCarValue={updatedCarValue}
            addFlightDetails={addFlightDetails}
            flightDetails={flightDetails}
            setFlightDetails={setFlightDetails}
            setDistance={setDistance}
            setEconomyButtonSelected={setEconomyButtonSelected}
            setLuxuryButtonSelected={setLuxuryButtonSelected}
            setPremiumButtonSelected={setPremiumButtonSelected}
            setAddFlightDetails={setAddFlightDetails}
            setBookingNumber={setBookingNumber}
            setIsBookingDone={setIsBookingDone}
          />
        );
      } else {
        return <Loader lottieJson={lottieJson} />;
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className='booking-form'>
        <div className='booking-form-main'>
          {page === 0 ? (
            <div className='booking-form-main'>
              <div className='booking-form-header'>
                <h2 className='when-and-where-h2' style={{ color: 'black' }}>
                  WHERE & WHEN
                </h2>
                <div className='booking-form-ride-type-btns'>
                  <button
                    className='transfer-btn'
                    onClick={() => {
                      if (index > 0) {
                        setIndex(index - 1);
                        setIsToggled(!isToggled);
                      }
                    }}
                    style={{
                      backgroundColor: isToggled ? 'black' : 'white',
                      color: isToggled ? 'white' : 'black',
                    }}
                  >
                    <GoLocation
                      style={{
                        marginRight: '5px',
                        fontSize: '14px',
                      }}
                    />
                    TRANSFER
                  </button>
                  <button
                    className='hourly-ride-btn'
                    onClick={() => {
                      if (index === 0) {
                        setIndex(index + 1);
                        setIsToggled(!isLoaded);
                      }
                    }}
                    style={{
                      backgroundColor: !isToggled ? 'black' : 'white',
                      color: isToggled ? 'black' : 'white ',
                    }}
                  >
                    <FiClock
                      style={{
                        marginRight: '5px',
                        fontSize: '14px',
                      }}
                    />
                    HOURLY
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='form-container'>
            <div className='body'>{PageDisplay()}</div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default BookingForm;
