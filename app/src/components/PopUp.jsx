import React from 'react';

const PopUp = (props) => {
  const { phone } = props;
  return (
    <div className="popup_wrapper">
      <div className="popup_content">
        <button className="popup_close">
          <strong> X </strong>
        </button>
        <div className="popup_detail">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
