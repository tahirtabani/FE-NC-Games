import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getReviews } from "../../utils/api";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews().then((response) => {
      setReviews(response);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <h3>...loading</h3>;
  return (
    <div>
      <ul>
        <Row lg={3}>
          {reviews.map(
            ({
              review_img_url,
              title,
              category,
              // owner,
              // designer,
              // review_id,
              review_body,

              //   created_at,
              comment_count,
              votes,
            }) => {
              return (
                <Col className="d-flex">
                  <Card key={title} className="Reviews">
                    <Card.Img
                      className="Image"
                      variant="top"
                      src={review_img_url}
                    />
                    <Card.Body className="Cardbody">
                      <Card.Title className="CardTitle">{title}</Card.Title>
                      <Card.Text>
                        <span style={{ fontWeight: "bold" }}>Category</span> :
                        {category}
                      </Card.Text>
                      <Card.Text>
                        <span style={{ fontWeight: "bold" }}>
                          Number of Comments
                        </span>
                        :{comment_count}
                      </Card.Text>
                      <Card.Text>
                        <span style={{ fontWeight: "bold" }}>
                          Number of votes
                        </span>
                        :{votes}
                      </Card.Text>
                      <Card.Text>
                        <span style={{ fontWeight: "bold" }}>Review</span> :
                        {review_body.substring(0, 100)}...
                      </Card.Text>
                      <a
                        rel="stylesheet"
                        href="https://tahir-nc-games-back-end-api.herokuapp.com/api/reviews/:review_id"
                        //change this to the review for each page
                      >
                        <Button variant="primary">See Full Review</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          )}
        </Row>
      </ul>
    </div>
  );
}
