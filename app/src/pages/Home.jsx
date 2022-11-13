import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';
const Home = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getPhones = async () => {
      const rawData = await fetch('http://localhost:3000/phones');
      const dataToJson = await rawData.json();
      setPhones(dataToJson);
    };
    getPhones();
  }, []);

  console.log(phones[0]);
  return (
    <>
      <Carousel>
        {phones.length &&
          phones.map((phone) => (
            <div key={phone.id}>
              <h2>{phone.name}</h2>
              <img src={phone.image} alt={phone.name} />
            </div>
          ))}
      </Carousel>
      <Link to="phones">
        <button className="galleryBtn">FLASH OFFERS!!</button>
      </Link>
    </>
  );
};

export default Home;
