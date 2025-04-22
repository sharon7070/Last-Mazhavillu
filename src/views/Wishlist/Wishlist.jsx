import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import card_2 from "../../assets/images/card_2.png";
import "./Wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "KOTTHAS KITCHEN Chicken Masala (100g)",
      price: "$25.00",
      rating: 4,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "KOTTHAS KITCHEN Chicken Masala (100g)",
      price: "$35.00",
      rating: 5,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "KOTTHAS KITCHEN Chicken Masala (100g)",
      price: "$45.00",
      rating: 3,
    },
  ]);

  

  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (id) => {
    const updatedList = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedList);
    console.log(`Item with ID ${id} removed from wishlist.`);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    handleRemove(item.id);
    console.log(`Item "${item.title}" added to cart.`);
    navigate("/cart"); // ✅ navigate to cart
  };

  const renderRating = (rating) => {
    const stars = "★★★★★";
    return (
      <div className="text-success small">
        {stars.slice(0, rating)}
        <span className="text-muted">{stars.slice(rating)}</span>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(224, 224, 222, 0.534)",
        minHeight: "100vh",
        paddingTop: "2rem",
      }}
    >
      <Container>
        <h4 className="my-wishlist mb-4">My Wishlist</h4>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <Card
              key={item.id}
              className="mb-4 shadow-sm"
              style={{ border: "none" }}
            >
              <Card.Body>
                <Row className="align-items-center g-0">
                  {/* First Column: Image and Product Details */}
                  <Col
                    md={9}
                    sm={12}
                    className="d-flex align-items-center"
                  >
                    <Image
                      src={card_2}
                      fluid
                      rounded
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                      className="me-3"
                    />
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      {renderRating(item.rating)}
                      <h6 className="text-success mt-2">{item.price}</h6>
                    </div>
                  </Col>

                  {/* Second Column: Buttons */}
                  <Col
                    md={3}
                    sm={12}
                    className="text-md-end text-center mt-3 mt-md-0"
                  >
                    <Button
                      variant="outline-danger"
                      className="me-2 mb-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="success"
                      className="mb-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
