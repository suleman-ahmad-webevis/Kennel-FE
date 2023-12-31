import styled from "styled-components";

export const DogShowContainer = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 5px;
  }
`;

export const DogShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const DSHeading = styled.h5`
  font-weight: 900;
  font-size: 36px;
  line-height: 82px;
  color: #000000;
  align-self: flex-start;
`;

export const MapImg = styled.div``;
