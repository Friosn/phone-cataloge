import styled from 'styled-components';

const DetailButtonStiled = styled.button`
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
  opacity: 0.5;
  transition: all 500ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export default DetailButtonStiled;
