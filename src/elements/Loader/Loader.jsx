import React from "react";
import { Spinner } from "reactstrap";
import { LoaderWrapper } from "./Loader.style";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner color="dark" />
    </LoaderWrapper>
  );
};
