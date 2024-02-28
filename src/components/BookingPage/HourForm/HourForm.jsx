import './HourForm.css';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { useState, useRef, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import toast, { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { StandaloneSearchBox } from '@react-google-maps/api';
import MapContainer from '../../HomePage/MapContainer/MapContainer';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ContextData } from '../../../context/ContextData';

const center = { lat: 25.2048, lng: 55.2708 };

const HourForm = ({
  index,
  hourlyFormData,
  setHourlyFormData,
  page,
  setPage,
  isLoaded,
}) => {
  const { select } = useContext(ContextData);

  // State for Dubai and Other Emirated;

  const [isDubaiActive, setIsDubaiActive] = useState(true);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  // ToolTip Functionality
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
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const [markerPosition, setMarkerPosition] = useState({
    lat: 0,
    lng: 0,
  });

  // Origin Ref
  const originRef = useRef();

  const originRef2 = useRef();

  // StandAloneSearchBox
  const onLoadOrigin = (ref) => {
    originRef.current = ref;
  };

  const handleOriginPlaceChanged = () => {
    const [place] = originRef.current.getPlaces();
    console.log(place.geometry.location.lat());
    if (place) {
      setHourlyFormData({
        ...hourlyFormData,
        from: place.formatted_address,
      });
      setMarkerPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (checkAllFields()) {
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
    console.log(hourlyFormData.from);
    console.log(hourlyFormData.hourly);
    console.log(hourlyFormData.date);
    console.log(hourlyFormData.time);

    if (
      hourlyFormData.from === '' ||
      hourlyFormData.hourly === '' ||
      hourlyFormData.date === '' ||
      hourlyFormData.time === ''
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className='hour-form-container'>
        <form
          className='hour-form'
          onSubmit={submitHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        >
          <div className='hour-form-div'>
            <div className='hour-form-div-all-input'>
              <div className='hour-form-selection'>
                <button
                  type='button'
                  onClick={() => {
                    if (!isDubaiActive) {
                      setIsDubaiActive(!isDubaiActive);
                    }
                  }}
                  className={`dubai-btn ${isDubaiActive ? 'active' : ''} `}
                >
                  Dubai
                </button>
                <button
                  type='button'
                  onClick={() => {
                    if (isDubaiActive) {
                      setIsDubaiActive(!isDubaiActive);
                    }
                  }}
                  className={`other-emirates-btn ${
                    !isDubaiActive ? 'active' : ''
                  }`}
                >
                  Other Emirates
                </button>
              </div>
              <div className='form-group from-location hour-group-pick-up'>
                <label className='hour-form-input-mobile-label' htmlFor=''>
                  {select == 'AE' ? 'Pickup Location' : '上车地点'}
                </label>
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
                <GoLocation className='location-icon-hourly'></GoLocation>
              </div>
              <div className='form-group from-location hour-group-drop'>
                <label className='hour-form-input-mobile-label' htmlFor=''>
                  Hourly
                </label>
                <select
                  name='hourly-rise'
                  id='hourly-ride'
                  className='hourly-ride'
                  onChange={(e) => {
                    setHourlyFormData({
                      ...hourlyFormData,
                      hourly: e.target.value,
                    });
                  }}
                >
                  <optgroup>
                    <option>Select Hourly Tour</option>
                    {isDubaiActive && (
                      <option value='Dubai 5hrs City Tour'>
                        Dubai Half Day, 5hrs City Tour
                      </option>
                    )}
                    {isDubaiActive && (
                      <option value='Dubai 10hrs City Tour'>
                        Dubai Full Day, 10hrs City Tour
                      </option>
                    )}
                    {!isDubaiActive && (
                      <option value='Abu Dubai 10hrs City Tour'>
                        Abu Dubai Half Day, 5hrs City Tour
                      </option>
                    )}
                    {!isDubaiActive && (
                      <option value='Sharjah 5hrs City Tour'>
                        Sharjah Half Day, 5hrs City Tour
                      </option>
                    )}
                    {!isDubaiActive && (
                      <option value='Fujairah 5hrs City Tour'>
                        Fujairah Half Day, 5hrs City Tour
                      </option>
                    )}
                    {!isDubaiActive && (
                      <option value='Al Ain 5hrs City Tour'>
                        Al Ain Half Day, 5hrs City Tour
                      </option>
                    )}
                  </optgroup>
                </select>
              </div>
              <div className='form-group from-location'>
                <label className='hour-form-input-mobile-label' htmlFor=''>
                  {select == 'AE' ? 'Pickup Date' : '开始用车日期'}
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      className='date-picker'
                      label='Select Date'
                      // value={transferFormData.date || ''}
                      disablePast={true}
                      onChange={(newValue) =>
                        setHourlyFormData({
                          ...hourlyFormData,
                          date: newValue['$d'].toLocaleDateString('en-US'),
                        })
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className='form-group from-location'>
                <label className='hour-form-input-mobile-label' htmlFor=''>
                  {select == 'AE' ? 'Pickup Time' : '开始用车时间'}
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <MobileTimePicker
                      label='Select Time'
                      className='time-picker'
                      onChange={(newValue) =>
                        setHourlyFormData({
                          ...hourlyFormData,
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
                    className='tool-tip-span-hour'
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
              <button className='find-chauffeur-btn'>
                {select == 'AE' ? 'Find My Chauffuer' : '搜索我的司机'}
              </button>
            </div>
            <MapContainer
              index={index}
              isLoaded={isLoaded}
              setMap={setMap}
              center={center}
            />
          </div>
        </form>
      </div>

      <Toaster />
    </>
  );
};

export default HourForm;

{
  /* map-container */
}
{
  /* <div className='map-container'>
  <div className='map-box'>
    {isLoaded && (
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{
          borderRadius: '10px',
          width: '397px',
          height: '645px',
        }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    )}
  </div>
</div>; */
}
