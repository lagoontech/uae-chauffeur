import './PremiumCars.css';
import { premiumCarDetails } from '../../../utils/carDetails/premiumCarDetails';
import { trimmedDistance } from '../../../utils/trimmedDistance';
import { integerCarRate } from '../../../utils/integerCarRate';
import { premiumPriceHourly } from '../../../utils/carPriceHourly/premiumPriceHourly';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const PremiumCars = ({
  index,
  distance,
  hourlyFormData,
  setPremiumCarData,
  premiumButtonSelected,
  setPremiumButtonSelected,
}) => {
  const { select } = useContext(ContextData);

  const handleButtonClick = (buttonNumber) => {
    setPremiumButtonSelected(buttonNumber);
  };

  const decimalCarValue1 =
    premiumCarDetails[0].perKm * trimmedDistance(distance) +
    premiumCarDetails[0].price;
  const integerCarValue1 = integerCarRate(decimalCarValue1);

  const decimalCarValue2 =
    premiumCarDetails[1].perKm * trimmedDistance(distance) +
    premiumCarDetails[1].price;
  const integerCarValue2 = integerCarRate(decimalCarValue2);

  const decimalCarValue3 =
    premiumCarDetails[2].perKm * trimmedDistance(distance) +
    premiumCarDetails[2].price;
  const integerCarValue3 = integerCarRate(decimalCarValue3);

  const decimalCarValue4 =
    premiumCarDetails[3].perKm * trimmedDistance(distance) +
    premiumCarDetails[3].price;
  const integerCarValue4 = integerCarRate(decimalCarValue4);

  // premiumHourlyCarPrice
  let premiumPriceHourlyArray;
  if (hourlyFormData.hourly.includes('5hrs')) {
    premiumPriceHourlyArray = premiumPriceHourly[0];
  } else {
    premiumPriceHourlyArray = premiumPriceHourly[1];
  }

  return (
    <div>
      <div className='car-list'>
        <button
          className={`car-btn-1 car-btn ${
            premiumButtonSelected === 1 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(1);
            setPremiumCarData({
              carName:
                select == 'AE'
                  ? premiumCarDetails[0].carNameEng
                  : premiumCarDetails[0].carNameChn,
              price:
                index === 0
                  ? premiumCarDetails[0].price
                  : premiumPriceHourlyArray[0].price,
              perKm: premiumCarDetails[0].perKm,
              category: premiumCarDetails[0].category,
            });
          }}
        >
          <div className='col-1 col'>
            <img src={premiumCarDetails[0].img} alt='car-img-1' />
            <div className='car-price-info'>
              <h3 className='car-name'>
                {select == 'AE'
                  ? premiumCarDetails[0].carNameEng
                  : premiumCarDetails[0].carNameChn}
              </h3>
              <div className='distane'>
                <div className='passengers'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                    style={{ height: '20px', width: '20px' }}
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                      clipRule='evenodd'
                    />
                    <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
                  </svg>
                  <p className='total-passenger'>
                    {premiumCarDetails[0].seater}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {index === 0
                  ? integerCarValue1
                  : premiumPriceHourlyArray[0].price}
              </span>
            </span>
          </div>
        </button>

        <button
          className={`car-btn-2 car-btn ${
            premiumButtonSelected === 2 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(2);
            setPremiumCarData({
              carName:
                select == 'AE'
                  ? premiumCarDetails[1].carNameEng
                  : premiumCarDetails[1].carNameChn,
              price:
                index === 0
                  ? premiumCarDetails[1].price
                  : premiumPriceHourlyArray[1].price,
              perKm: premiumCarDetails[1].perKm,
              category: premiumCarDetails[1].category,
            });
          }}
        >
          <div className='col-2 col'>
            <img src={premiumCarDetails[1].img} alt='car-img-2' />
            <div className='car-price-info'>
              <h3 className='car-name'>
                {select == 'AE'
                  ? premiumCarDetails[1].carNameEng
                  : premiumCarDetails[1].carNameChn}
              </h3>
              <div className='distane'>
                <div className='passengers'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                    style={{ height: '20px', width: '20px' }}
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                      clipRule='evenodd'
                    />
                    <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
                  </svg>
                  <p className='total-passenger'>
                    {premiumCarDetails[1].seater}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {index === 0
                  ? integerCarValue2
                  : premiumPriceHourlyArray[1].price}
              </span>
            </span>
          </div>
        </button>

        <button
          className={`car-btn-3 car-btn ${
            premiumButtonSelected === 3 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(3);
            setPremiumCarData({
              carName:
                select == 'AE'
                  ? premiumCarDetails[2].carNameEng
                  : premiumCarDetails[2].carNameChn,
              price:
                index === 0
                  ? premiumCarDetails[2].price
                  : premiumPriceHourlyArray[2].price,
              perKm: premiumCarDetails[2].perKm,
              category: premiumCarDetails[2].category,
            });
          }}
        >
          <div className='col-3 col'>
            <img src={premiumCarDetails[2].img} alt='car-img-3' />
            <div className='car-price-info'>
              <h3 className='car-name'>
                {select == 'AE'
                  ? premiumCarDetails[2].carNameEng
                  : premiumCarDetails[2].carNameChn}
              </h3>
              <div className='distane'>
                <div className='passengers'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                    style={{ height: '20px', width: '20px' }}
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                      clipRule='evenodd'
                    />
                    <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
                  </svg>
                  <p className='total-passenger'>
                    {premiumCarDetails[2].seater}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {index === 0
                  ? integerCarValue3
                  : premiumPriceHourlyArray[2].price}
              </span>
            </span>
          </div>
        </button>

        <button
          className={`car-btn-4 car-btn ${
            premiumButtonSelected === 4 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(4);
            setPremiumCarData({
              carName:
                select == 'AE'
                  ? premiumCarDetails[3].carNameEng
                  : premiumCarDetails[3].carNameChn,
              price:
                index === 0
                  ? premiumCarDetails[3].price
                  : premiumPriceHourlyArray[3].price,
              perKm: premiumCarDetails[3].perKm,
              category: premiumCarDetails[3].category,
            });
          }}
        >
          <div className='col-4 col'>
            <img src={premiumCarDetails[3].img} alt='car-img-4' />
            <div className='car-price-info'>
              <h3 className='car-name'>
                {select == 'AE'
                  ? premiumCarDetails[3].carNameEng
                  : premiumCarDetails[3].carNameChn}
              </h3>
              <div className='distane'>
                <div className='passengers'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                    style={{ height: '20px', width: '20px' }}
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                      clipRule='evenodd'
                    />
                    <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
                  </svg>
                  <p className='total-passenger'>
                    {premiumCarDetails[3].seater}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {index === 0
                  ? integerCarValue4
                  : premiumPriceHourlyArray[3].price}
              </span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PremiumCars;
