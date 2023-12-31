import React, { useEffect, useState } from "react";
import trophy from "../../../../assets/images/Trophy.png";
// import search from "../../../../assets/images/Search.png";
import person from "../../../../assets/images/Person.png";
import segments from "../../../../assets/images/Segments.png";
import {
  FieldError,
  Form,
  FormField,
  FormHeading,
  FormTextField,
  PageChanged,
  RegisterDogContainer,
} from "../../UserStyles";
import { Img } from "../../../../GlobalStyles";
import Countries from "../../Countries";
import { PhoneIcon } from "../../UserStyles";
import { useFormik } from "formik";
import { registerDogShowSchema } from "../../../../schema/createDogNftSchema";
import {
  SaveEditNftBtn,
  SaveNftBtn,
  SaveText,
} from "../RegisterDogNft/CreateNFT.style";
import DogShows from "./DogShows";
import { updateDogNft } from "../../../../redux/createDogNft/createDogNftSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditRegisterDogShow = ({ dogShow, nftId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shows, setShows] = useState(dogShow?.shows);
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDogShow")) ?? {}
  );
  const [showIdx, setShowIdx] = useState(0);
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      showName: dogShow?.shows[showIdx]?.showName ?? "",
      officialShowName: dogShow?.shows[showIdx]?.officialShowName ?? "",
      descriptionOfEvent: dogShow?.shows[showIdx]?.descriptionOfEvent ?? "",
      country: dogShow?.shows[showIdx]?.country ?? "",
      location: dogShow?.shows[showIdx]?.location ?? "",
      date: dogShow?.shows[showIdx]?.date ?? "",
      class: dogShow?.shows[showIdx]?.class ?? "",
      judge: dogShow?.shows[showIdx]?.judge ?? "",
      result: dogShow?.shows[showIdx]?.result ?? "",
    },
    validationSchema: registerDogShowSchema,
    onSubmit: (data) => {
      setShows((prev) => {
        const showsAre = [...prev];
        showsAre[showIdx] = data;
        return showsAre;
      });
      sessionStorage.setItem("registerDogShow", JSON.stringify(shows));
      setSessionData(JSON.parse(sessionStorage.getItem("registerDogShow")));
    },
  });

  useEffect(() => {
    setFieldValue(
      "showName",
      dogShow?.shows[showIdx]?.showName ? dogShow?.shows[showIdx]?.showName : ""
    );
    setFieldValue(
      "officialShowName",
      dogShow?.shows[showIdx]?.officialShowName
        ? dogShow?.shows[showIdx]?.officialShowName
        : ""
    );
    setFieldValue(
      "descriptionOfEvent",
      dogShow?.shows[showIdx]?.descriptionOfEvent
        ? dogShow?.shows[showIdx]?.descriptionOfEvent
        : ""
    );
    setFieldValue(
      "country",
      dogShow?.shows[showIdx]?.country ? dogShow?.shows[showIdx]?.country : ""
    );
    setFieldValue(
      "location",
      dogShow?.shows[showIdx]?.location ? dogShow?.shows[showIdx]?.location : ""
    );
    setFieldValue(
      "date",
      dogShow?.shows[showIdx]?.date ? dogShow?.shows[showIdx]?.date : ""
    );
    setFieldValue(
      "class",
      dogShow?.shows[showIdx]?.class ? dogShow?.shows[showIdx]?.class : ""
    );
    setFieldValue(
      "judge",
      dogShow?.shows[showIdx]?.judge ? dogShow?.shows[showIdx]?.judge : ""
    );
    setFieldValue(
      "result",
      dogShow?.shows[showIdx]?.result ? dogShow?.shows[showIdx]?.result : ""
    );
  }, [showIdx]);

  const handleClick = () => {
    dispatch(updateDogNft({ nftId, navigate }));
  };

  return (
    <>
      <RegisterDogContainer>
        <Form onSubmit={handleSubmit} width="90%">
          <FormHeading></FormHeading>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Dog Show Name"
              variant="outlined"
              name="showName"
              value={values.showName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldError>
              {touched.showName && errors.showName && <>{errors.showName}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Official Dog Show Name"
              variant="outlined"
              name="officialShowName"
              value={values.officialShowName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PhoneIcon>
              <Img src={trophy} title="trophy" />
            </PhoneIcon>
            <FieldError>
              {touched.officialShowName && errors.officialShowName && (
                <>{errors.officialShowName}</>
              )}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Description of Event"
              variant="outlined"
              name="descriptionOfEvent"
              value={values.descriptionOfEvent}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldError>
              {touched.descriptionOfEvent && errors.descriptionOfEvent && (
                <>{errors.descriptionOfEvent}</>
              )}
            </FieldError>
          </FormField>
          <FormField>
            <Countries country={values.country} setFieldValue={setFieldValue} />
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              name="location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PhoneIcon>{/* <Img src={search} title="search" /> */}</PhoneIcon>
            <FieldError>
              {touched.location && errors.location && <>{errors.location}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="date"
              label="Date"
              type="date"
              value={values.date}
              setFieldValue={setFieldValue}
              onChange={handleChange}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FieldError>
              {touched.date && errors.date && <>{errors.date}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Class"
              variant="outlined"
              name="class"
              value={values.class}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PhoneIcon>
              <Img src={person} title="person" />
            </PhoneIcon>
            <FieldError>
              {touched.class && errors.class && <>{errors.class}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Judge"
              variant="outlined"
              name="judge"
              value={values.judge}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PhoneIcon>
              <Img src={segments} title="segments" />
            </PhoneIcon>
            <FieldError>
              {touched.judge && errors.judge && <>{errors.judge}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormTextField
              id="outlined-basic"
              label="Result"
              variant="outlined"
              name="result"
              value={values.result}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PhoneIcon>
              <Img src={trophy} title="trophy" />
            </PhoneIcon>
            <FieldError>
              {touched.result && errors.result && <>{errors.result}</>}
            </FieldError>
          </FormField>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SaveNftBtn onClick={handleSubmit}>
              <SaveText>
                <h1>Save</h1>
              </SaveText>
            </SaveNftBtn>
          </div>
          <PageChanged>
            <div></div>
            {/* Empty <div> to put next on end */}
            <SaveEditNftBtn
              onClick={() => handleClick()}
              style={{ marginBottom: "20px" }}
            >
              Save
            </SaveEditNftBtn>
          </PageChanged>
        </Form>
      </RegisterDogContainer>
      <DogShows dogShow={dogShow} setShowIdx={setShowIdx} />
    </>
  );
};

export default EditRegisterDogShow;
