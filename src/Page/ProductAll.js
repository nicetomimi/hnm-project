import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
    let url =
      "https://my-json-server.typicode.com/nicetomimi/hnm-project/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="main-banner-area">
        <div className="main-banner-text-area">S/S 2024</div>
        <img src="https://image.hm.com/ffc/share/assets/2024/1019/fpo/campaign/1019_102_107_3x2.jpg?imwidth=2160" />
      </div>
      <Container>
        <Row>
          {productList.map((menu) => (
              <Col lg={3}>
                {" "}
                <ProductCard item={menu} />{" "}
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
