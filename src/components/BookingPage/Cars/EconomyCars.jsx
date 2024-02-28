import './EconomyCars.css';
import { economyCarDetails } from '../../../utils/carDetails/economyCarDetails';
import { trimmedDistance } from '../../../utils/trimmedDistance';
import { integerCarRate } from '../../../utils/integerCarRate';
import { economyPriceHourly } from '../../../utils/carPriceHourly/economyPriceHourly';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const EconomyCars = ({
  index,
  distance,
  hourlyFormData,
  setEconomyCarData,
  economyButtonSelected,
  setEconomyButtonSelected,
}) => {
  const { select } = useContext(ContextData);

  const handleButtonClick = (buttonNumber) => {
    setEconomyButtonSelected(buttonNumber);
  };

  const decimalCarValue1 =
    economyCarDetails[0].perKm * trimmedDistance(distance) +
    economyCarDetails[0].price;
  const integerCarValue1 = integerCarRate(decimalCarValue1);

  const decimalCarValue2 =
    economyCarDetails[2].perKm * trimmedDistance(distance) +
    economyCarDetails[2].price;
  const integerCarValue2 = integerCarRate(decimalCarValue2);

  const decimalCarValue3 =
    economyCarDetails[4].perKm * trimmedDistance(distance) +
    economyCarDetails[4].price;
  const integerCarValue3 = integerCarRate(decimalCarValue3);

  const decimalCarValue4 =
    economyCarDetails[5].perKm * trimmedDistance(distance) +
    economyCarDetails[5].price;
  const integerCarValue4 = integerCarRate(decimalCarValue4);

  // economyHourlyCarPrice
  let economyPriceHourlyArray;
  if (hourlyFormData.hourly.includes('5hrs')) {
    economyPriceHourlyArray = economyPriceHourly[0];
  } else {
    economyPriceHourlyArray = economyPriceHourly[1];
  }

  return (
    <div>
      <div className='car-list'>
        <button
          className={`car-btn-1 car-btn ${
            economyButtonSelected === 1 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(1);
            setEconomyCarData({
              carName:
                select === 'AE'
                  ? `${economyCarDetails[0].carNameEng}`
                  : `${economyCarDetails[0].carNameChn}`,
              price:
                index === 0
                  ? economyCarDetails[0].price
                  : economyPriceHourlyArray[0].price,
              perKm: economyCarDetails[0].perKm,
              category: economyCarDetails[0].category,
            });
          }}
        >
          <div className='col-1 col'>
            <img src={economyCarDetails[0].img} alt='car-img-1' />
            <div className='car-price-info-economy'>
              <h3 className='car-name'>
                {select === 'AE'
                  ? `${economyCarDetails[0].carNameEng}`
                  : `${economyCarDetails[0].carNameChn}`}
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
                    {economyCarDetails[0].seater}
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
                  : economyPriceHourlyArray[0].price}
              </span>
            </span>
          </div>
        </button>

        <button
          className={`car-btn-3 car-btn ${
            economyButtonSelected === 3 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(3);
            setEconomyCarData({
              carName:
                select === 'AE'
                  ? `${economyCarDetails[2].carNameEng}`
                  : `${economyCarDetails[2].carNameChn}`,
              price:
                index === 0
                  ? economyCarDetails[2].price
                  : economyPriceHourlyArray[0].price,
              perKm: economyCarDetails[2].perKm,
              category: economyCarDetails[2].category,
            });
          }}
        >
          <div className='col-3 col'>
            <img src={economyCarDetails[2].img} alt='car-img-3' />
            <div className='car-price-info-economy'>
              <h3 className='car-name'>
                {select === 'AE'
                  ? `${economyCarDetails[2].carNameEng}`
                  : `${economyCarDetails[2].carNameChn}`}
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
                    {economyCarDetails[2].seater}
                  </p>
                </div>
              </div>
            </div>{' '}
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {index === 0
                  ? integerCarValue2
                  : economyPriceHourlyArray[0].price}
              </span>
            </span>
          </div>
        </button>

        {/* <button
          className={`car-btn-4 car-btn ${
            economyButtonSelected === 4 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(4);
            setEconomyCarData({
              carName: economyCarDetails[3].carName,
              price: economyCarDetails[3].price,
              perKm: economyCarDetails[3].perKm,
              category: economyCarDetails[3].category,
            });
          }}
        >
          <div className='col-4 col'>
            <img src={economyCarDetails[3].img} alt='car-img-4' />
            <div className='car-price-info-economy'>
              <h3 className='car-name'>{economyCarDetails[3].carName}</h3>
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
                    {economyCarDetails[3].seater}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span className='car-price'>
              <span className='usd'>AED</span>
              <span className='car-amount'>
                {economyCarDetails[3].perKm * trimmedDistance(distance) +
                  economyCarDetails[3].price}
              </span>
            </span>
          </div>
        </button> */}

        <button
          className={`car-btn-5 car-btn ${
            economyButtonSelected === 5 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(5);
            setEconomyCarData({
              carName: economyCarDetails[4].carNameEng,
              price:
                index === 0
                  ? economyCarDetails[4].price
                  : economyPriceHourlyArray[2].price,
              perKm: economyCarDetails[4].perKm,
              category: economyCarDetails[4].category,
            });
          }}
        >
          <div className='col-4 col'>
            <img src={economyCarDetails[4].img} alt='car-img-4' />
            <div className='car-price-info-economy'>
              <h3 className='car-name'>{economyCarDetails[4].carNameEng}</h3>
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
                    {economyCarDetails[4].seater}
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
                  : economyPriceHourlyArray[2].price}
              </span>
            </span>
          </div>
        </button>

        <button
          className={`car-btn-6 car-btn ${
            economyButtonSelected === 6 ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick(6);
            setEconomyCarData({
              carName: economyCarDetails[5].carNameEng,
              price:
                index === 0
                  ? economyCarDetails[5].price
                  : economyPriceHourlyArray[3].price,
              perKm: economyCarDetails[5].perKm,
              category: economyCarDetails[5].category,
            });
          }}
        >
          <div className='col-5 col'>
            <img src={economyCarDetails[5].img} alt='car-img-5' />
            <div className='car-price-info-economy'>
              <h3 className='car-name'>{economyCarDetails[5].carNameEng}</h3>
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
                    {economyCarDetails[5].seater}
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
                  : economyPriceHourlyArray[3].price}
              </span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EconomyCars;
