import ChauffeurService from './ChauffeurService';
import chauffeuerServicedata from '../../../utils/chaufferservicedata';
import './ChauffeurService.css';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const ChauffeurServices = () => {
  const { select } = useContext(ContextData);

  return (
    <section className='home-page-servies-section'>
      <div className='title'>
        <h2>{select === 'AE' ? 'Our Services' : '我们提供的服务'} </h2>
        <div className='underline'></div>
      </div>
      <div className='tours'>
        {chauffeuerServicedata.map((data) => {
          return <ChauffeurService key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default ChauffeurServices;
