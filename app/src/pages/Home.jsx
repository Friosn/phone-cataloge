import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';
import { Popup } from '../components/PopUp';
/* import StalkBuild from '../ui/StalkyBtn'; */
const Home = () => {
  const [phones, setPhones] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getPhones = async () => {
      const rawData = await fetch('http://localhost:3000/phones');
      const dataToJson = await rawData.json();
      setPhones(dataToJson);
    };
    getPhones();
  }, []);

  return (
    <>
      <Carousel>
        {phones.length &&
          phones.map((phone) => (
            <div key={phone.id} className="carousel_element">
              <h2>{phone.name}</h2>
              <img src={phone.image} alt={phone.name} />
              <button onClick={() => setOpen(true)}> Heyy! Finally</button>
              {open ? (
                <Popup text="Fuck this :)" closePopup={() => setOpen(false)} />
              ) : null}
            </div>
          ))}
      </Carousel>
      <Link to="phones"></Link>
    </>
  );
};

export default Home;
