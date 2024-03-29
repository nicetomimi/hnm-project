import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams()
  const getProduct = async () => {
    let searchQuery = query.get('q') || ""
    let url =
      `https://my-json-server.typicode.com/nicetomimi/hnm-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <div className="main-banner-area">
        <div className="main-banner-text-area">S/S 2024</div>
        <img src="https://image.hm.com/ffc/share/assets/2024/1019/fpo/campaign/1019_102_107_3x2.jpg?imwidth=2160" />
      </div>
      <Container>
        <Row>
          {productList.map((menu) => (
              <Col lg={3} sm={6}>
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
