import React from 'react';
import { useEffect, useState } from 'react';

import GalleryStyled from '../ui/GalleryStyled';

/* import { gettingPhones } from '../service/api'; */

const Gallery = () => {
  const [phoneGallery, setPhoneGallery] = useState([]);

  useEffect(() => {
    const getPhones = async () => {
      const rawData = await fetch('http://localhost:3000/phones');
      const dataToJson = await rawData.json();
      console.log(dataToJson);
      setPhoneGallery(dataToJson);
    };
    getPhones();
    console.log(getPhones());
  }, []);
  console.log(phoneGallery[0]);
  return (
    <>
      <GalleryStyled>
        {phoneGallery.length &&
          phoneGallery.map((phone) => (
            <div key={phone.id}>
              <h2>{phone.name}</h2>
              <img src={phone.image} alt={phone.name} />
            </div>
          ))}
      </GalleryStyled>
    </>
  );
};

export default Gallery;
