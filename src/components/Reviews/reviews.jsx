import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getReviews } from "../../utils/api";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews().then((response) => {
      console.log("reviews: ", response);
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
                    <Card.Img variant="top" src={review_img_url} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>Catergory:{category}</Card.Text>
                      <Card.Text>No of comments:{comment_count}</Card.Text>
                      <Card.Text>No of Votes:{votes}</Card.Text>
                      <Card.Text>Review:{review_body}</Card.Text>
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
