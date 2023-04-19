import React, { Fragment } from "react";
import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  return (
    <Fragment>
      <EventItem event={data.event} />
    </Fragment>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
