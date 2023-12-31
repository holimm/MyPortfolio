import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import MyCV from "../../assets/pdf/CV.pdf";
import { BlockItem, BlockItemPDF, PageNoFooterLayout } from "../common";
import { Flex } from "antd";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const ResumeScreen = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Flex justify="center" align="center">
      <Document
        className={"h-fit w-fit"}
        file={MyCV}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <BlockItemPDF>
          <Page
            className={"h-fit max-h-screen w-fit overflow-y-auto shadow-xl"}
            scale={1.4}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </BlockItemPDF>
      </Document>
    </Flex>
  );
};
