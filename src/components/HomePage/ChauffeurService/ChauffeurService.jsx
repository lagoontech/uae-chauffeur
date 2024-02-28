import './ChauffeurService.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ContextData } from '../../../context/ContextData';

const ChauffeurService = ({ image, infoEng, nameEng, nameChn, infoChn }) => {
  const { select } = useContext(ContextData);

  const [readMore, setReadMore] = useState(false);

  let infoData = '';
  let infoHeading = '';

  if (select === 'AE') {
    infoData = infoEng;
    infoHeading = nameEng;
  } else {
    infoData = infoChn;
    infoHeading = nameChn;
  }

  return (
    <article className={`single-tour ${select !== 'AE' ? 'chinese' : ''}`}>
      <img loading='lazy' src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h3>{infoHeading}</h3>
        </div>
        <p>
          {readMore ? infoData : `${infoData?.substring(0, 150)}...`}
          {select == 'AE' ? (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          ) : (
            ''
          )}
        </p>
      </footer>
    </article>
  );
};

export default ChauffeurService;
