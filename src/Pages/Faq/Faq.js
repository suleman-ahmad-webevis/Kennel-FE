import React from "react";
import styled from "styled-components";
import FaqComp from "../../components/Faq/FaqComp";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";

const Faq = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <FaqContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav  />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <FaqHeading>
        <h5>FAQ</h5>
      </FaqHeading>
      <FaqComp />
    </FaqContainer>
  );
};

export const FaqContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const FaqHeading = styled.div`
  h5 {
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
  }
`;

export default Faq;
