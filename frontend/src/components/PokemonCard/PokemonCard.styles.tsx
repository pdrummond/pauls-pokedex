import styled from "styled-components";

export const Card = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 150px;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    padding: 10px;

    &:hover {
      background-color: whitesmoke;
    }
  }
`;

export const Image = styled.img`
  height: 150px;
`;

export const Title = styled.span``;
