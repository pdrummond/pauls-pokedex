import styled from "styled-components";

export const Header = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 100px;
  align-items: center;
  align-content: center;
  padding: 10px;
`;

export const HeaderButton = styled.button`
  height: 50px;
`;

export const Body = styled.div`
  width: 800px;
  height: 800px;
  padding: 20px;
  margin: auto auto;
  background-color: whitesmoke;
  border-radius: 5px;
`;

export const Name = styled.h1``;
export const NationalNumber = styled.h3`
  color: gray;
`;

export const Message = styled.div`
  padding: 50px;
  background-color: #26c6da;
  color: #006064;
  margin-bottom: 30px;
`;

export const AdminButtons = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;
