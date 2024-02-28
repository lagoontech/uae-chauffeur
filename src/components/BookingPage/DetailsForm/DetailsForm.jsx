import './DetailsForm.css';
import Summary from '../Summary/Summary';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { BsCash, BsGlobeAmericas } from 'react-icons/bs';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const DetailsForm = ({
  page,
  setPage,
  index,
  buttonSelected,
  economyButtonSelected,
  luxuryButtonSelected,
  premiumButtonSelected,
  transferFormData,
  hourlyFormData,
  economyCarData,
  luxuryCarData,
  premiumCarData,
  userDetails,
  setUserDetails,
  cardDetails,
  setCardDetails,
  payByCash,
  setPayByCash,
  payByLink,
  setPayByLink,
  addFlightDetails,
  setAddFlightDetails,
  flightDetails,
  setFlightDetails,
  updatedCarValue,
  bookingNumber,
  distance,
  setIsBookingDone,
}) => {
  const { select } = useContext(ContextData);

  return (
    <div className='details-form-main-container'>
      <div className='details-form-container'>
        <div className='details-form-container-main'>
          <h1 className='payment-and-confirm'>PAYMENT & CONFIRM</h1>
          <form className='details-form'>
            <h3 className='passenger-info details-info'>Passenger Info</h3>
            <div className='details-form-div'>
              <div className='details-group from-location'>
                <label htmlFor=''>First Name</label>
                <input
                  className='details-input'
                  type='text'
                  name='First Name'
                  placeholder='First Name'
                  value={userDetails.firstName}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      firstName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className='details-group from-location'>
                <label htmlFor=''>LastName</label>
                <input
                  className='details-input '
                  id='details-input-last-name'
                  type='text'
                  name='Last Name'
                  placeholder='Last Name'
                  value={userDetails.lastName}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      lastName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className='details-group from-location'>
                <label htmlFor=''>
                  {select == 'AE' ? 'Email' : ' 电子邮箱'}
                </label>
                <input
                  className='details-input'
                  type='email'
                  name='Email'
                  placeholder='Email'
                  value={userDetails.email}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className='details-group-mobile-input from-location'>
                <label htmlFor=''>Mobile No</label>
                <PhoneInput
                  className='details-phone-input'
                  defaultCountry='AE'
                  placeholder='Enter Phone Number'
                  value={userDetails.mobileNumber}
                  onChange={(newValue) => {
                    setUserDetails({
                      ...userDetails,
                      mobileNumber: newValue,
                    });
                  }}
                />
              </div>

              <div className='details-group from-location'>
                <label htmlFor=''>
                  {select == 'AE' ? 'Instructions' : '操作指南'}
                </label>
                <textarea
                  style={{ display: 'block', fontSize: '16px' }}
                  name='address-text-are'
                  id=''
                  cols='60'
                  rows='7'
                  value={userDetails.instructions}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      instructions: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>

            {/* Credit Card Payment Input */}
            {/* <div className='payment-details'>
              <h3 className='payment-info details-info'>Payment Info</h3>
              <CreditCardInput
                cardNumberInputProps={{
                  onChange: (e) => {
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value,
                    });
                  },
                }}
                cardExpiryInputProps={{
                  onChange: (e) => {
                    setCardDetails({
                      ...cardDetails,
                      cardExpiry: e.target.value,
                    });
                  },
                }}
                cardCVCInputProps={{
                  onChange: (e) => {
                    setCardDetails({
                      ...cardDetails,
                      cardCVV: e.target.value,
                    });
                  },
                }}
              />
              <div className='car-holder-name-div'>
                <label htmlFor='' className='card-holder-name-label'>
                  Card Holder Name
                </label>
                <input
                  className='card-holder-name'
                  type='text'
                  name='card-holder-name'
                  placeholder='Name'
                  onChange={(e) => {
                    setCardDetails({
                      ...cardDetails,
                      cardHolderName: e.target.value,
                    });
                  }}
                />
              </div>
            </div> */}

            {/* <div className='OR'>
              <h1>OR</h1>
            </div> */}

            <div className='add-flight-details'>
              <input
                className='add-flight-details-checkbox'
                type='checkbox'
                checked={addFlightDetails}
                onChange={() => {
                  setAddFlightDetails(!addFlightDetails);
                }}
              />
              <h3 className='add-flight-details-text'>
                {select == 'AE' ? 'Add Flight Details' : '添加航班信息'}
              </h3>
            </div>

            {addFlightDetails && (
              <div className='details-group from-location flight-details'>
                <label className='flight-number-label' htmlFor=''>
                  Flight Number
                </label>
                <input
                  className='details-input'
                  type='number'
                  name='Flight-Details'
                  placeholder='Flight Number'
                  value={flightDetails.flightNumber}
                  onChange={(e) => {
                    setFlightDetails({
                      ...flightDetails,
                      flightNumber: e.target.value,
                    });
                  }}
                />
              </div>
            )}

            {/* {addFlightDetails && (
              <div className='details-group from-location flight-details'>
                <label htmlFor=''>Paging Name</label>
                <input
                  className='details-input'
                  type='text'
                  name='Paging Name'
                  placeholder='Paging Name'
                  value={flightDetails.pagingName}
                  onChange={(e) => {
                    setFlightDetails({
                      ...flightDetails,
                      pagingName: e.target.value,
                    });
                  }}
                />
              </div>
            )} */}

            <div className='select-payment-method'>
              <h1>
                {select == 'AE' ? 'Select Payment Method' : '选择支付方式'}
              </h1>
            </div>

            <div
              className={`pay-by-cash-or-link ${
                addFlightDetails ? 'flight' : ''
              }`}
            >
              <div className='pay-by-cash'>
                <button
                  className={`pay-by-cash-btn ${payByCash ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setPayByCash(!payByCash);
                    if (payByLink) {
                      setPayByLink(!payByLink);
                    }
                  }}
                >
                  <BsCash style={{ fontSize: '22px', color: 'white' }} />
                  {select == 'AE' ? 'Pay by Cash' : '现金支付'}
                </button>
              </div>
              <div className='pay-by-link'>
                <button
                  className={`pay-by-link-btn ${payByLink ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setPayByLink(!payByLink);
                    if (payByCash) {
                      setPayByCash(!payByCash);
                    }
                  }}
                >
                  <BsGlobeAmericas style={{ fontSize: '22px' }} />
                  {select == 'AE' ? 'Pay by Link' : '链接支付'}
                </button>
              </div>
            </div>
          </form>
        </div>
        <Summary
          page={page}
          setPage={setPage}
          index={index}
          buttonSelected={buttonSelected}
          economyButtonSelected={economyButtonSelected}
          premiumButtonSelected={premiumButtonSelected}
          luxuryButtonSelected={luxuryButtonSelected}
          transferFormData={transferFormData}
          hourlyFormData={hourlyFormData}
          economyCarData={economyCarData}
          luxuryCarData={luxuryCarData}
          premiumCarData={premiumCarData}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          addFlightDetails={addFlightDetails}
          flightDetails={flightDetails}
          payByCash={payByCash}
          payByLink={payByLink}
          updatedCarValue={updatedCarValue}
          bookingNumber={bookingNumber}
          distance={distance}
          setIsBookingDone={setIsBookingDone}
        />
      </div>
    </div>
  );
};

export default DetailsForm;
