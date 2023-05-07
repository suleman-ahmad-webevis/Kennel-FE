import React from "react";
import {
  DSHeading,
  DogShowContainer,
  DogShowWrapper,
  MapImg,
} from "./DogShow.styles";
import WorldMap from "../../assets/images/DogShowsImages/WorldMap.png";
import { Img } from "../../GlobalStyles";
import Shows from "../../components/DogShow/Show";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";

const DogShow = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <DogShowContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <DogShowWrapper>
        {(isTablet || isSmallMobile || isMobile) && (
          <DSHeading>Dog Shows</DSHeading>
        )}
        <MapImg>
          <Img src={WorldMap} alt="map" />
        </MapImg>
        <Shows />
      </DogShowWrapper>
    </DogShowContainer>
  );
};

export default DogShow;
