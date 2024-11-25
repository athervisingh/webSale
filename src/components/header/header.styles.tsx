import styled from 'styled-components';

export const NavigationBar = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavigationLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
