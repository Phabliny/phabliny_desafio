import styled from 'styled-components';

export const StyledContainer = styled.div`
  border: 1px solid #000000;
  display: inline-block;
  padding: 30px;
  margin: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 5px;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  margin-bottom: 20px;
`;

export const StyledErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;
