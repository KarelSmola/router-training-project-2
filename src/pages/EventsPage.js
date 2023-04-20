import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  // return <p>{data.message}</p>;
  // }

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Data does not fetched." };
    // throw new Response(
    //     JSON.stringify({ message: "Dattta does not fetched." }),
    //     {
    //       status: 500,
    //     }
    //   );
    throw json({ message: "Data does not fetched." }, { status: 500 });
  } else {
    return response;
  }
};
