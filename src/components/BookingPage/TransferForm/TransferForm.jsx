import './TransferForm.css';
import { useState, useRef, useContext } from 'react';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import scrollToTop from '../../../utils/scrollToTopOfPage';
import toast, { Toaster } from 'react-hot-toast';
import { StandaloneSearchBox } from '@react-google-maps/api';
import MapContainer from '../../HomePage/MapContainer/MapContainer';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ContextData } from '../../../context/ContextData';

const center = { lat: 25.2048, lng: 55.2708 };

const TransferForm = ({
  transferFormData,
  setTransferFormData,
  page,
  setPage,
  isLoaded,
  setDistance,
  setDuration,
}) => {
  const { select } = useContext(ContextData);

  const [open, setOpen] = useState(false);

  const [isMapLocationCorrect, setIsMapLocationCorrect] = useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        {...props}
        disableFocusListener={true}
        arrow
        classes={{ popper: className }}
      />
    </ClickAwayListener>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      marginLeft: '0px',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  // State Value for Google Maps
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // Origin Ref
  const originRef = useRef();

  // Destination Ref
  const destinationRef = useRef();

  const originRef2 = useRef();

  const destinationRef2 = useRef();

  // StandAloneSearchBox
  const onLoadOrigin = (ref) => {
    originRef.current = ref;
  };

  const onLoadDestination = (ref) => {
    destinationRef.current = ref;
  };

  const handleOriginPlaceChanged = () => {
    const [place] = originRef?.current?.getPlaces();
    if (place) {
      setTransferFormData({
        ...transferFormData,
        from: place.formatted_address,
      });
    }
  };

  const handleDestinationPlaceChanged = () => {
    const [place] = destinationRef?.current?.getPlaces();
    if (place) {
      setTransferFormData({
        ...transferFormData,
        to: place.formatted_address,
      });
      calculateRoute();
      setDirectionsResponse(null);
    }
  };

  const calculateRoute = async () => {
    try {
      if (
        originRef.current.value === '' ||
        destinationRef.current.value === ''
      ) {
        return;
      }

      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: originRef2.current.value,
        destination: destinationRef2.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setIsMapLocationCorrect(true);
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (error) {
      setIsMapLocationCorrect(false);
      toast.error('Please select a appropirate location', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'red', color: 'white', fontSize: '16px' },
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isMapLocationCorrect) {
      toast.error('Please select a appropirate location', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'red', color: 'white', fontSize: '16px' },
      });
    } else if (checkAllFields()) {
      toast.success('Select your favourite Car!', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'black', color: 'white', fontSize: '16px' },
      });
      setPage(page + 1);
    } else {
      toast.error('Please add all fields', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'red', color: 'white', fontSize: '16px' },
      });
    }
  };

  const checkAllFields = () => {
    if (
      transferFormData.from === '' ||
      transferFormData.to === '' ||
      transferFormData.date === '' ||
      transferFormData.time === ''
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className='transfer-form-container'>
        <form
          onSubmit={submitHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          className='transfer-form'
        >
          <div className='transfer-form-div'>
            <div className='tranfer-form-div-all-input'>
              <div className='form-group from-location from-group-pick-up'>
                <label className='tranfer-form-input-mobile-label' htmlFor=''>
                  {select === 'AE' ? 'Pickup Location' : '上车地点'}
                </label>

                {/* AutoComplete */}
                {isLoaded && (
                  <StandaloneSearchBox
                    onLoad={onLoadOrigin}
                    onPlacesChanged={handleOriginPlaceChanged}
                  >
                    <input
                      type='text'
                      className='drop-input'
                      ref={originRef2}
                      name='Location'
                      placeholder='Enter Location'
                    />
                  </StandaloneSearchBox>
                )}

                <GoLocation className='location-icon transfer-form-icon'></GoLocation>
              </div>
              <div className='form-group from-location from-group-drop'>
                <label className='tranfer-form-input-mobile-label' htmlFor=''>
                  {select === 'AE' ? 'Drop Location' : '目的地'}
                </label>
                {/* AutoComplete */}
                {isLoaded && (
                  <StandaloneSearchBox
                    onLoad={onLoadDestination}
                    onPlacesChanged={handleDestinationPlaceChanged}
                  >
                    <input
                      className='pickup-input'
                      ref={destinationRef2}
                      type='text'
                      name='Location'
                      placeholder='Enter Location'
                    />
                  </StandaloneSearchBox>
                )}
                <GoLocation className='location-icon transfer-form-icon'></GoLocation>
              </div>
              <div className='form-group from-location'>
                <label className='tranfer-form-input-mobile-label' htmlFor=''>
                  {select === 'AE' ? 'Pickup Date' : '开始用车日期'}
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      className='date-picker'
                      label='Select Date'
                      disablePast={true}
                      onChange={(newValue) =>
                        setTransferFormData({
                          ...transferFormData,
                          date: newValue['$d'].toLocaleDateString('en-US'),
                        })
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className='form-group from-location'>
                <label className='tranfer-form-input-mobile-label' htmlFor=''>
                  {select === 'AE' ? 'Pickup Time' : '开始用车时间'}
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <MobileTimePicker
                      label='Select Time'
                      className='time-picker'
                      onChange={(newValue) =>
                        setTransferFormData({
                          ...transferFormData,
                          time: newValue['$d'].toLocaleTimeString(),
                        })
                      }
                    />
                    <BiTime className='clock-icon'></BiTime>
                  </DemoContainer>
                </LocalizationProvider>
                <BootstrapTooltip
                  title='Booking can be done only prior 4 hours'
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                >
                  <span
                    onClick={handleTooltipOpen}
                    className='tool-tip-span-transfer'
                    style={{ marginLeft: '62px', marginTop: '10px' }}
                  >
                    <BsInfoCircle
                      style={{
                        fontSize: '18px',
                        color: 'red',
                        cursor: 'pointer',
                      }}
                    />
                  </span>
                </BootstrapTooltip>
              </div>
              <button
                className='find-chauffeur-btn'
                onClick={() => {
                  scrollToTop();
                }}
              >
                {select === 'AE' ? 'Find My Chauffuer' : '搜索我的司机'}
              </button>
            </div>
            <MapContainer
              isLoaded={isLoaded}
              setMap={setMap}
              center={center}
              directionsResponse={directionsResponse}
            />
          </div>
        </form>
      </div>
      {/* Toaster */}
      <Toaster />
    </>
  );
};

export default TransferForm;
