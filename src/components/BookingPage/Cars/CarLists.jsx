import './CarLists.css';
import EconomyCars from './EconomyCars';
import LuxuryCars from './LuxuryCars';
import PremiumCars from './PremiumCars';
import Summary from '../Summary/Summary';
import { useEffect, useContext } from 'react';
import { integerCarRate } from '../../../utils/integerCarRate';
import { trimmedDistance } from '../../../utils/trimmedDistance';
import { ContextData } from '../../../context/ContextData';

const CarLists = ({
  page,
  setPage,
  distance,
  index,
  buttonSelected,
  setButtonSelected,
  transferFormData,
  hourlyFormData,
  economyCarData,
  setEconomyCarData,
  economyButtonSelected,
  setEconomyButtonSelected,
  luxuryCarData,
  setLuxuryCarData,
  luxuryButtonSelected,
  setLuxuryButtonSelected,
  premiumCarData,
  setPremiumCarData,
  premiumButtonSelected,
  setPremiumButtonSelected,
  updatedCarValue,
  setUpdatedCarValue,
}) => {
  const { select } = useContext(ContextData);

  let carDetails;

  if (buttonSelected === 0) {
    carDetails = economyCarData;
  } else if (buttonSelected === 1) {
    carDetails = luxuryCarData;
  } else {
    carDetails = premiumCarData;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (index === 0) {
        const trimmedDistanceValue = trimmedDistance(distance);
        const calculatedCarValue =
          carDetails.perKm * trimmedDistanceValue + carDetails.price;
        const integerCarValue = integerCarRate(calculatedCarValue);
        setUpdatedCarValue(integerCarValue);
      } else {
        if (carDetails.price !== 0 || updatedCarValue !== 0) {
          setUpdatedCarValue(carDetails.price);
        }
      }
    };

    fetchData();
  }, [economyButtonSelected, luxuryButtonSelected, premiumButtonSelected]);

  const handleButtonClick = (buttonNumber) => {
    setButtonSelected(buttonNumber);
  };

  return (
    <div className='car-list-main'>
      <div className='car-lists-container'>
        <div className='car-list'>
          <h2 style={{ color: 'black' }} className='select-vehicle'>
            {select === 'AE' ? 'SELECT VEHICLE' : '选择车型'}
          </h2>
          <div className='car-selection'>
            <button
              className={`${buttonSelected === 0 ? 'active' : ''}`}
              onClick={() => {
                setUpdatedCarValue(0);
                setLuxuryButtonSelected(0);
                setLuxuryCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setPremiumButtonSelected(0);
                setPremiumCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                handleButtonClick(0);
              }}
            >
              {select === 'AE' ? 'Economy' : '经济型'}
            </button>
            <button
              className={`${buttonSelected === 1 ? 'active' : ''}`}
              onClick={() => {
                setUpdatedCarValue(0);
                setEconomyButtonSelected(0);
                setEconomyCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setPremiumButtonSelected(0);
                setPremiumCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                handleButtonClick(1);
              }}
            >
              {select === 'AE' ? 'Luxury' : '豪华型'}
            </button>
            <button
              className={`${buttonSelected === 2 ? 'active' : ''}`}
              onClick={() => {
                setUpdatedCarValue(0);
                setEconomyButtonSelected(0);
                setEconomyCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                setLuxuryButtonSelected(0);
                setLuxuryCarData({
                  carName: '',
                  price: 0,
                  perKm: 0,
                  category: '',
                });
                handleButtonClick(2);
              }}
            >
              {select === 'AE' ? 'Premium' : '尊享型'}
            </button>
          </div>
          {buttonSelected === 0 && (
            <EconomyCars
              index={index}
              distance={distance}
              hourlyFormData={hourlyFormData}
              setEconomyCarData={setEconomyCarData}
              economyButtonSelected={economyButtonSelected}
              setEconomyButtonSelected={setEconomyButtonSelected}
            />
          )}

          {buttonSelected === 1 && (
            <LuxuryCars
              index={index}
              distance={distance}
              hourlyFormData={hourlyFormData}
              setLuxuryCarData={setLuxuryCarData}
              luxuryButtonSelected={luxuryButtonSelected}
              setLuxuryButtonSelected={setLuxuryButtonSelected}
            />
          )}
          {buttonSelected === 2 && (
            <PremiumCars
              index={index}
              distance={distance}
              hourlyFormData={hourlyFormData}
              setPremiumCarData={setPremiumCarData}
              premiumButtonSelected={premiumButtonSelected}
              setPremiumButtonSelected={setPremiumButtonSelected}
            />
          )}
        </div>
        <Summary
          index={index}
          page={page}
          setPage={setPage}
          distance={distance}
          economyButtonSelected={economyButtonSelected}
          premiumButtonSelected={premiumButtonSelected}
          luxuryButtonSelected={luxuryButtonSelected}
          buttonSelected={buttonSelected}
          transferFormData={transferFormData}
          hourlyFormData={hourlyFormData}
          economyCarData={economyCarData}
          luxuryCarData={luxuryCarData}
          premiumCarData={premiumCarData}
          updatedCarValue={updatedCarValue}
        />
        {/* <div className='carlist-prev-continu-btns'>
          {page === 1 && (
            <div className='prev-and-continue-btns'>
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
        </div> */}
      </div>
    </div>
  );
};

export default CarLists;
