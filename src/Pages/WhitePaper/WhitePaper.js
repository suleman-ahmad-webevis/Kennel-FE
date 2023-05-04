import React, { useState, useEffect } from "react";
//ToShowPDF
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";
import WhitePaper from "../../assets/pdf/WhitePaper.pdf";

const WPComp = () => {
  const [defaultPdfFile] = useState(WhitePaper);
  const defLayoutPlugin = defaultLayoutPlugin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PDFContainer>
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
          </Worker>
        </>
      )}
    </PDFContainer>
  );
};

export default WPComp;

export const PDFContainer = styled.div`
  height: 1780px;
  max-width: 900px;
  margin: 0 auto;
`;
