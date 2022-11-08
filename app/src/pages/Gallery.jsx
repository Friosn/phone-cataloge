import React from 'react';
import { useEffect, useState } from 'react';

import { gettingPhones } from '../service/api';

const Gallery = () => {
  const [phoneGallery, setPhoneGallery] = useState([]);

  useEffect(() => {
    const getPhones = () => {
      setPhoneGallery(gettingPhones);
    };
    getPhones();
  }, []);

  return (
    <>
      {phoneGallery.length &&
        phoneGallery.map((phone) => (
          <div key={phone.id}>
            <h2>{phone.name}</h2>
          </div>
        ))}
    </>
  );
};

export default Gallery;
