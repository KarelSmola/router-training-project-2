import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const param = useParams();

  return (
    <Fragment>
      <h1>Event Detail Page</h1>
      <p>{param.id}</p>
    </Fragment>
  );
};

export default EventDetailPage;
