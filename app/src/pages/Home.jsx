import React from 'react';
import { useEffect } from 'react';
import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel';
import { Popup } from '../components/PopUp';
/* import StalkBuild from '../ui/StalkyBtn'; */
/* const initialState = () => ({});
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}; */
const Home = () => {
  /* const [state, dispatch] = useReducer(reducer, {}); */
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
              <button onClick={() => setOpen(true)}> Detail</button>
              {open ? <Popup closePopup={() => setOpen(false)} /> : null}
            </div>
          ))}
      </Carousel>
      <Link to="phones"></Link>
    </>
  );
};

export default Home;
