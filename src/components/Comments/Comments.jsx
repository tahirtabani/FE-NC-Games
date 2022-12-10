import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../utils/api";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SingleReview from "../SingleReview/singleReview";

export default function Comments() {
  const [comments, setComment] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getCommentById(review_id)
      .then((response) => {
        setIsLoading(false);
        setComment(response);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);
  if (error) {
    return <h3>This review does not exists </h3>;
  }
  if (isLoading) return <h3>...loading</h3>;
  if (comments.length === 0) return <h3> No Comments for this game </h3>;
  return (
    <div>
      <h2>Welcome to comments for {review_id}</h2>
      <ul>
        <Row lg={1}>
          {comments.map(({ body, author, created_at, votes }) => {
            return (
              <Col className="d-flex">
                <Card key={body} className="Comments">
                  <Card.Body className="Cardbody">
                    <Card.Title className="CardTitle">{author}</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Comment</span>:{" "}
                      {body}
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>
                        Number of votes
                      </span>
                      : {votes}
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Created At</span>:{" "}
                      {new Date(created_at).toLocaleDateString("en-gb", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </ul>
    </div>
  );
}
