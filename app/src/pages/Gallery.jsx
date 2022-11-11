import React from 'react';
import { useEffect, useState } from 'react';
import CardStyled from '../ui/CardStyled';

import GalleryStyled from '../ui/GalleryStyled';
import H2Styled from '../ui/H2Styled';
import PriceStyled from '../ui/PriceStyled';

/* import { gettingPhones } from '../service/api'; */

const Gallery = () => {
  const [phoneGallery, setPhoneGallery] = useState([]);

  useEffect(() => {
    const getPhones = async () => {
      const rawData = await fetch('http://localhost:3000/phones');
      const dataToJson = await rawData.json();
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
            <CardStyled key={phone.id}>
              <H2Styled>{phone.name}</H2Styled>
              <PriceStyled>
                <del className="oldPrice">{phone.price + 100}€</del>
                🡲 {phone.price}€
              </PriceStyled>
              <img src={phone.image} alt={phone.name} />
            </CardStyled>
          ))}
      </GalleryStyled>
    </>
  );
};

export default Gallery;
