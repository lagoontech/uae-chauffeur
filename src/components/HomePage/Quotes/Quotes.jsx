import './Quotes.css';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const Quotes = () => {
  const { select } = useContext(ContextData);

  return (
    <div className='quotes-container'>
      <div className='quotes'>
        <h2 className='quotes-heading'>
          {select === 'AE'
            ? `“UAEChauffeur- Luxury Car Chauffeur service aims to present a
          competitive challenge to Uber and Lyft for car rides”`
            : '“UAEChauffeur-豪华专车服务的目标是向Uber和Lyft发起挑战。”'}
        </h2>
        {/* <p className='quotes-para'>The Wall Street Journal</p> */}
      </div>
    </div>
  );
};

export default Quotes;
