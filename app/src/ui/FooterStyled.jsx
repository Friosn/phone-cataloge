import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  bottom: 0px;
  color: black;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 210, 230, 1) 100%
  );

  #git,
  #Linkedin,
  #Twitter {
    margin: 0 1rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 20%;

    &:hover {
      background-color: #f2723a;
      transition: 1s ease-in-out;
      transition-timing-function: 1s;
    }
  }
`;

export default FooterStyled;
