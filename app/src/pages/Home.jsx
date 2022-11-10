import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

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
    </>
  );
};

export default Home;

{
  /*<div className="containerCarousel">
       <div className="miniContainer">
        <div className="card">
          <h2>{phones[0].name}</h2>
          <img src={phones[0].image} alt={phones[0].name} />
        </div>
        <div className="card">
          <img src="#" alt="Image 1" class="img" />
        </div>
      </div>
      <div className="miniContainer">
        <img src="#" alt="Image 1" class="img" />
        <img src="#" alt="Image 1" class="img" />
      </div>
      <div className="miniContainer">
        <img src="#" alt="Image 1" class="img" />
        <img src="#" alt="Image 1" class="img" />
      </div>
      <div className="miniContainer">
        <img src="#" alt="Image 1" class="img" />
        <img src="#" alt="Image 1" class="img" />
      </div> 
    </div>*/
}
