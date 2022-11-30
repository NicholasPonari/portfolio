import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

// Persistent data array (typically fetched from the server)
const resData = [
  { id: 0, text: "Google USD$241.76/share", votes: 5 },
  { id: 1, text: "Tesla USD$182.92/share", votes: 3 },
  { id: 2, text: "Netflix USD$281.17/share", votes: 7 },
  { id: 3, text: "Apple USD$144.22/share", votes: 18 },
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
      question="Choose the security that you believe will perform the best for the
      week of December 5th, 2022"
      results={resData}
      theme={customTheme}
      onVote={vote}
      isVoted={false}
    />
  );
};

export default Poll;
