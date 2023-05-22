import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;
export const Body = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 20px;
  padding-right:10px;
  box-shadow: 0px 6px 8px black;
  background-color: white;
`;
export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  padding-left: 20px;
`;
export const FormElement = styled.div`
  display: flex;
  flex-basis: 100%;
`;
export const FormRowsContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`;
export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;
export const FormTitle = styled.h2`
  padding-left: 20px;
  text-align:center;
`;
