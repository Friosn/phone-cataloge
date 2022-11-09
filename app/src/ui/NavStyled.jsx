import styled from 'styled-components';

const NavStyled = styled.nav`
  height: 3rem;
  width: 100%;
  padding: 0.5rem;
  flex: 0 1 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 210, 230, 1) 100%
  );
  border-bottom: 1px solid grey;
  z-index: 1;

  div {
    display: flex;
    gap: 1rem;
  }
  a {
    font-weight: bold;
  }
  .right {
    margin-right: 1.5rem;
  }
`;

export default NavStyled;
