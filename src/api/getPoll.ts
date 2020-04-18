import { Poll } from "@/interfaces/Poll";
import mockServer from "./mockServer";

export default function getPoll(): Promise<Poll> {
  const response: Poll = {
    inputs: [
      {
        type: "text",
        label: "Name",
      },
      {
        type: "text",
        label: "LastName",
      },
      {
        type: "text",
        label: "Age",
      },
    ],
  };
  
  return mockServer(response);
}
