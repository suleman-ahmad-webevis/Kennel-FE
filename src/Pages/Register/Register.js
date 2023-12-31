import React, { useState } from "react";
import styled from "styled-components";
import FirstForm from "../../components/RegisterLogin/FirstForm";
import SecondForm from "../../components/RegisterLogin/SecondForm";
import { Form, Field } from "formik";
import ThirdForm from "../../components/RegisterLogin/ThirdForm";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";

const Register = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  //Pages
  const [page, setPage] = useState(0);
  const components = [
    <FirstForm setPage={setPage} />,
    <SecondForm setPage={setPage} />,
    <ThirdForm />,
  ];

  return (
    <RegContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      {components[page]}
    </RegContainer>
  );
};

export default Register;

export const RegContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px 20px;
  @media screen and (max-width: 1110px) {
    padding: 0px 20px;
  }
`;

export const StyledFForm = styled(Form)`
  align-self: center;
  background: "red";
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px 10px;
  width: 65%;
  background: rgba(14, 98, 109, 0.1);
  border-radius: 10px;
  padding: 20px;
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;

export const FieldCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  grid-gap: 10px;
  width: 100%;
  label {
    display: flex;
    grid-gap: 4px;
    font-weight: 400;
    font-size: 12px;
    p {
      font-size: 8px;
    }
  }
  img {
    position: absolute;
    top: 38px;
    left: 8px;
  }
`;

export const StyledFField = styled(Field)`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ConBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: #87b0b6;
    border-radius: 8px;
    border: none;
    padding: 12px 80px;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    cursor:pointer;
  }
`;

export const SubscribeSection = styled.div`
  display: flex;
  grid-gap: 10px;
`;
