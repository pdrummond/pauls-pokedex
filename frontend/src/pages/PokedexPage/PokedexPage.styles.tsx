import styled from "styled-components";

export const Header = styled.div`
  height: 50px;
  background-color: black;
  display: grid;
  grid-template-columns: 200px 200px 1fr 200px 200px;
  grid-column-gap: 10px;
  align-items: center;
  align-content: center;
  padding: 10px;
`;

export const HeaderButton = styled.button`
  height: 50px;
  border: none;
`;

export const HeaderCreateButton = styled.button`
  background-color: #8bc34a;
  border: none;
  height: 50px;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;

  & > a {
    text-decoration: none;
    color: orange;
  }

  & > button {
    width: 200px;
  }
`;

export const HeaderSearchInput = styled.input`
  padding: 15px;
  outline: none;
  border: 3px solid orange;
  border-radius: 5px;
`;

export const Grid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 10px;
  /* This is the standardized property now, but has slightly less support */
  /* gap: 1rem */
`;
