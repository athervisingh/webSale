import styled from "styled-components";
export const Form = styled.form`
  background-color: #0056b3;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    accent-color: #0056b3;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #ff9900;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #e68a00;
    }
  }
`;