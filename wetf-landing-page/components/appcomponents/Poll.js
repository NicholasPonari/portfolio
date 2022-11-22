import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

// Persistent data array (typically fetched from the server)
const resData = [
  { id: 0, text: "Microsoft $204.20/share", votes: 0 },
  { id: 1, text: "Tesla $50.53/share", votes: 0 },
  { id: 2, text: "Netflix $30.40/share", votes: 0 },
  { id: 3, text: "Apple 353.53/share", votes: 0 },
];

// Object keys may vary on the poll type (see the 'Theme options' table below)
const customTheme = {
  textColor: "black",
  mainColor: "#00B87B",
  backgroundColor: "rgb(255,255,255)",
  alignment: "center",
};

function vote(item, results) {
  // Here you probably want to manage
  // and return the modified data to the server.
}

const Poll = () => {
  return (
    <LeafPoll
      type="multiple"
      question="Choose the stock that will perform best for the current week"
      results={resData}
      theme={customTheme}
      onVote={vote}
      isVoted={false}
    />
  );
};

export default Poll;
