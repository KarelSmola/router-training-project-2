import React, { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();

  let title = "ERROR";
  let message = "Something went wrong";

  if (error.status === 500) {
    title = `ERROR Status ${error.status}`;
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = `ERROR Status ${error.status}`;
    message = "Path not found";
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default Error;
