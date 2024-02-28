import Home from './components/HomePage/Home';
import AboutUsPage from './components/AboutUSPage/AboutUsPage';
import BookingPage from './components/BookingPage/BookingPage';
import ContactUs from './components/ContactUsPage/ContactsUs';
import { Routes, Route } from 'react-router-dom';
import { useJsApiLoader } from '@react-google-maps/api';
import { ContextData } from './context/ContextData';
import { useState } from 'react';
import ServicesPage from './components/ServicesPage/ServicesPage';

function App() {
  const [select, setSelect] = useState('AE');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_UAE_CHAUFFEUR_GOOGLE_MAPS_API_KEY,
    libraries: ['places', 'maps'],
    region: 'ae',
  });
  return (
    <ContextData.Provider value={{ isLoaded, select, setSelect }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='booking' element={<BookingPage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Routes>
    </ContextData.Provider>
  );
}

export default App;
