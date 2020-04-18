import { Poll } from "@/interfaces/Poll";
import mockServer from "./mockServer";

export default function getPoll(): Promise<Poll> {
  const response: Poll = {
    inputs: [
      {
        id: 1,
        type: "text",
        label: "Name",
      },
      {
        id: 2,
        type: "text",
        label: "LastName",
      },
      {
        id: 3,
        type: "text",
        label: "Age",
      },
    ],
  };

  return mockServer(response);
}
