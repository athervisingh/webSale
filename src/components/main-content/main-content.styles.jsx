// components/styles.js
import styled from 'styled-components';

export const Button = styled.a`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #218838;
  }
`;

export const Section = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: ${(props) => props.bg || '#f8f9fa'};
`;
