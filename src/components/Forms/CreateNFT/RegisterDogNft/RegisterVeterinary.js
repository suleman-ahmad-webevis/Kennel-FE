import React, { useState } from "react";
import { Img } from "../../../../GlobalStyles";
import Next from "../../../../assets/images/Next.png";
import Back from "../../../../assets/images/Back.png";
import {
  CategoriesField,
  FieldError,
  Form,
  FormField,
  FormHeading,
  FormTextField,
  NextButton,
  PageChanged,
  RegisterDogContainer,
} from "../../UserStyles";
import { useNavigate } from "react-router-dom";
// import { registerVeterinarySchema } from "../../../../schema/createDogNftSchema";
import VaccinationTypes from "../../VaccinationTypes";
import { SaveNftBtn, SaveText } from "./CreateNFT.style";
import { toast } from "react-toastify";

const RegisterVeterinay = () => {
  const [vaccinationPadding, setVaccinationPadding] = useState("100px");
  const navigate = useNavigate();

  const [sessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerVeterinary")) ?? {}
  );
  const [vac, setVac] = useState([]);

  const [vaccination, setVaccination] = useState({
    vacType: sessionData[0]?.vacType ?? "",
    vacSerialNo: sessionData[0]?.vacSerialNo ?? "",
    vacExpiryDate: sessionData[0]?.vacExpiryDate ?? "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaccination({
      ...vaccination,
      [name]: value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    setVac((prev) => {
      const updatedVac = [...prev, vaccination];
      sessionStorage.setItem("registerVeterinary", JSON.stringify(updatedVac));
      return updatedVac;
    });
    toast.info("Vaccination added", { theme: "colored" });
  };

  return (
    <RegisterDogContainer>
      <Form width="90%">
        <FormHeading>
          {/* <Img src={veterinayImage} alt="veterinayImage" /> */}
        </FormHeading>
        <FormField>
          <CategoriesField>
            <VaccinationTypes
              setVaccinationPadding={setVaccinationPadding}
              vaccination={vaccination}
              setVaccination={setVaccination}
              handleChange={handleChange}
            />
          </CategoriesField>
        </FormField>
        {vaccination.vacType && (
          <>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Vaccination Serial Number"
                variant="outlined"
                name="vacSerialNo"
                onChange={(e) => handleChange(e)}
                // onBlur={handleBlur}
                position="relative"
                paddingLeft={vaccinationPadding}
              />
              <FieldError>
                {/* {touched.price && errors.price && <>{errors.price}</>} */}
              </FieldError>
              <h5
                style={{
                  position: "absolute",
                  top: "26.5%",
                  left: "20px",
                  color: "#000",
                }}
              >
                {vaccination.vacType ?? ""}
              </h5>
            </FormField>
            <FormField>
              <FormTextField
                id="insuranceExpiryDate"
                label="Expiry Date"
                type="date"
                name="vacExpiryDate"
                onChange={handleChange}
                // onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FieldError>
                {/* {touched.insuranceExpiryDate && errors.insuranceExpiryDate && (
                  <>{errors.insuranceExpiryDate}</>
                )} */}
              </FieldError>
            </FormField>
          </>
        )}
        <SaveNftBtn onClick={handleSave}>
          <SaveText>
            <h1>Save</h1>
          </SaveText>
        </SaveNftBtn>
        <PageChanged>
          <NextButton Back>
            <Img
              src={Back}
              alt="back"
              onClick={() => {
                navigate("/create-dog-nft/register-owner");
              }}
            />
          </NextButton>
          <NextButton
            onClick={() => {
              navigate("/create-dog-nft/register-insurance");
            }}
          >
            <Img src={Next} alt="next" />
          </NextButton>
        </PageChanged>
      </Form>
    </RegisterDogContainer>
  );
};

export default RegisterVeterinay;
