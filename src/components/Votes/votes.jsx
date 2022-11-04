import { useState } from "react";
import { patchVotes } from "../../utils/api";
import Button from "react-bootstrap/Button";

export default function Votes({ review_id, votes }) {
  const [newVotes, setNewVotes] = useState(0);

  const handleVote = (vote) => {
    setNewVotes((currVotes) => {
      return currVotes + vote;
    });
    patchVotes(review_id, { inc_votes: vote }).catch((err) => {
      setNewVotes((currVotes) => {
        if (vote === 1) {
          return currVotes - 1;
        } else {
          return currVotes + 1;
        }
      });
    });
  };

  return (
    <section className="votesSection">
      <Button
        className="upvote"
        onClick={() => {
          handleVote(1);
        }}
      >
        +
      </Button>
      <p className="votes">{String(votes + newVotes)}</p>
      <Button
        className="downvote"
        onClick={() => {
          handleVote(-1);
        }}
      >
        -
      </Button>
    </section>
  );
}
