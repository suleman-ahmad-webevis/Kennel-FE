import React, { useState } from "react";
import styled from "styled-components";

const types = [
  {
    vacType: "Rabies 1 year",
    padding: "100px",
    isActive: false,
  },
  {
    vacType: "Rabies 3 year",
    padding: "100px",
    isActive: false,
  },
  {
    vacType: "Parvovirus",
    padding: "88px",
    isActive: false,
  },
  {
    vacType: "Distemper",
    padding: "85px",
    isActive: false,
  },
  {
    vacType: "Adenovirus type 1",
    padding: "130px",
    isActive: false,
  },
  {
    vacType: "Adenovirus type 2",
    padding: "130px",
    isActive: false,
  },
  {
    vacType: "Parainfluenza",
    padding: "100px",
    isActive: false,
  },
  {
    vacType: "Canine Influenza",
    padding: "118px",
    isActive: false,
  },
  {
    vacType: "Bordetella bronchiseptica ( kennel cough )",
    padding: "278px",
    isActive: false,
  },
  {
    vacType: "Lyme Disease",
    padding: "100px",
    isActive: false,
  },
  {
    vacType: "Leptospirosis",
    padding: "98px",
    isActive: false,
  },
];

const VaccinationTypes = ({ setVaccinationPadding, vaccines , setSelectedVac}) => {
  const [active, setActive] = useState("");

  const vacHandler = (value) => {
    setActive(value.vacType);
    // setVaccination({
    //   ...vaccination,
    //   vacType: value.type,
    // });
    setVaccinationPadding(value.padding);
    setSelectedVac(value)
  };

  const mergedArray = types.map((type) => {
    const match = vaccines?.find(
      (item) => item.vacType === type.vacType
    );
    if (match) {
      return {
        ...type,
        isActive: true,
        vacSerialNo: match.vacSerialNo,
        vacExpiryDate: match.vacExpiryDate,
      };
    } else {
      return type;
    }
  });

  console.log("The mergeArray", mergedArray);

  return mergedArray.map((value, index) => (
    <ButtonGroup key={index}>
      <ButtonToggle
        key={value.vacType}
        isActive={value.isActive}
        active={active === value.vacType}
        onClick={() => vacHandler(value)}
      >
        {value.vacType}
      </ButtonToggle>
    </ButtonGroup>
  ));
};

const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 30px;
`;
export const ButtonToggle = styled(Button)`
  color: #b7b7b7;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  /* width: 100%; */

  ${({ isActive }) =>
    isActive &&
    `
  border-radius: 8px;
  color:#79999D;
  border: 2px solid #79999D;
  `}
  ${({ active }) =>
    active &&
    `
  border-radius: 8px;
  background: #F2F4F4;
  color:#79999D;
  border: 2px solid #79999D;
  `}
`;
export const ButtonGroup = styled.div``;
export default VaccinationTypes;
