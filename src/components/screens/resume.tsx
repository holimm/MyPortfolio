import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import MyCV from "../../assets/pdf/CV.pdf";
import {
  BlockItem,
  BlockItemPDF,
  PageNoFooterLayout,
  RenderPDFItem,
} from "../common";
import { Flex } from "antd";

export const ResumeScreen = () => {
  return (
    <Flex justify="center" align="center">
      <RenderPDFItem pdfFile={MyCV}>
        {(pageNumber: number) => (
          <BlockItemPDF>
            <Page
              className={"h-fit max-h-screen w-fit overflow-y-auto shadow-xl"}
              scale={1.4}
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </BlockItemPDF>
        )}
      </RenderPDFItem>
    </Flex>
  );
};
