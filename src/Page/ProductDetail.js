import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/nicetomimi/hnm-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="6" className="product-detail-img-area">
          <img alt={product?.title} src={product?.img} width={400} />
        </Col>
        <Col md="6" className="product-detail-product-area">
          <div className="icon-area">
            <div className="conscious-choice-icon">
              {product?.choice === true ? "Conscious Choice" : ""}
            </div>
            <div className="new-icon">{product?.new === true ? "new" : ""}</div>
          </div>
          <div className="product-detail-title">{product?.title}</div>
          <div className="product-detail-price">₩{product?.price}</div>

          <div className="product-detail-size-area">
            <button className="size-select">{product?.size[0]}</button>
            <button className="size-select">{product?.size[1]}</button>
            <button className="size-select">{product?.size[2]}</button>
          </div>

          <div className="button-area">
            <button className="add-button">add</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
