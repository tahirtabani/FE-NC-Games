import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getReviewById } from "../../utils/api";
import Votes from "../Votes/votes";
import Comments from "../Comments/Comments";

export default function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setSingleReview(response);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <h3>...loading</h3>;
  return (
    <div>
      <h2>Welcome to review for {singleReview.title}</h2>
      <ul>
        <Row lg={2}>
          <Col className="d-flex">
            <Card key={singleReview.title} className="Reviews">
              <Card.Img
                className="Image"
                variant="top"
                src={singleReview.review_img_url}
              />
              <Card.Body className="Cardbody">
                <Card.Title className="CardTitle">
                  {singleReview.title}
                </Card.Title>
                <Card.Text>
                  <span style={{ fontWeight: "bold" }}>Category</span> :
                  {singleReview.category}
                </Card.Text>
                <Card.Text>
                  <span style={{ fontWeight: "bold" }}>Number of Comments</span>
                  :{singleReview.comment_count}
                </Card.Text>
                <Card.Text>
                  <span style={{ fontWeight: "bold" }}>Number of votes</span>:
                  {singleReview.votes}
                </Card.Text>
                <Card.Text>
                  <span style={{ fontWeight: "bold" }}>Review</span> :
                  {singleReview.review_body}
                </Card.Text>
                <a rel="stylesheet" href={`/reviews/${review_id}/comments`}>
                  <Button variant="primary">See all Comments</Button>
                </a>
              </Card.Body>
              Votes:
              <Votes
                review_id={singleReview.review_id}
                votes={singleReview.votes}
              />
            </Card>
          </Col>
        </Row>
      </ul>
    </div>
  );
}

//   return (
//     <>
//       <section>
//         <h2>Welcome to review for {review_id}</h2>
//         <h2 className="reviewTitle">{singleReview.title}</h2>
//       </section>

//       <h3> Category:{singleReview.category}</h3>
//       <h3>Owner : {singleReview.owner}</h3>
//       <br />
//       <section>
//         <p>{singleReview.review_body}</p>
//       </section>
//       <br />
//       <br />
//       <a href={`/reviews/${review_id}/comments`}>
//         <section>Comment Count:{singleReview.comment_count}</section>
//       </a>
//     </>
//   );
// }
