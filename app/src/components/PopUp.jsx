import './Popup.css';

import React from 'react';
import { useEffect, useState } from 'react';

export const Popup = ({ closePopup }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getPhones = async () => {
      const rawData = await fetch('http://localhost:3000/phones');
      const dataToJson = await rawData.json();
      setPhones(dataToJson);
    };
    getPhones();
  }, []);

  return (
    <div className="popup-container">
      <div className="popup-body">
        {phones.length &&
          phones.map((phone) => (
            <div key={phone.id.target} className="popup_card">
              <img src={phone.image} alt={phone.name} />
              <h3>{phone.name}</h3>
              <h4>{phone.manufacturer}</h4>
              <p>{phone.description}</p>
              <p>{phone.price}</p>
              <p>{phone.screen}</p>
              <p>{phone.processor}</p>
              <p>{phone.ram}</p>
            </div>
          ))}
        <button onClick={closePopup}>Close X</button>
      </div>
    </div>
  );
};
