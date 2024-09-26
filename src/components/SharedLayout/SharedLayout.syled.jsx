import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(7px);

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  > .logo {
    width: 32px;
    height: 32px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
