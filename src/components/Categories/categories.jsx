import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getCategories } from "../../utils/api";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCategories().then((response) => {
      setCategories(response);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <h3>...loading</h3>;
  return (
    <div>
      <h2>Welcome to all the categories</h2>
      <ul>
        <Row lg={3}>
          {categories.map(({ slug, description }) => {
            return (
              <Col className="d-flex">
                <Card key={slug} className="Categories">
                  <Card.Img
                    className="Image"
                    variant="top"
                    src="https://www.pngitem.com/pimgs/m/12-126050_gaming-week-in-review-poster-hd-png-download.png"
                  />
                  <Card.Body className="Cardbody">
                    <Card.Title className="CardTitle">
                      {slug[0].toUpperCase() + slug.substring(1)}
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Description</span> :
                      {description}
                    </Card.Text>

                    <a
                      rel="stylesheet"
                      href={`/reviews/categories/${slug}`}
                      //change this to the review for each page
                    >
                      <Button variant="primary">
                        See all reviews for{" "}
                        {slug[0].toUpperCase() + slug.substring(1)}
                      </Button>
                    </a>
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
