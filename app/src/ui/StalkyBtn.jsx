import React from 'react';
import styled from 'styled-components';

const StalkyBtn = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 100vh;
  background-image: linear-gradient(to right, #29e2be, #0c5547);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  margin: 5% auto;
  cursor: pointer;
`;
const onMouseMove = (e) => {
  StalkyBtn.style.left = e.pageX + 'px';
  StalkyBtn.style.top = e.pageY + 'px';
};
const StalkBuild = () => {
  return (
    <StalkyBtn onMouseMove={onMouseMove()}>You can run but you can't HIDE!</StalkyBtn>
  );
};

export default StalkBuild;
