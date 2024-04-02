import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction} from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList)
  const [query, setQuery] = useSearchParams()
  const dispatch = useDispatch()
  const getProduct =  () => {
    let searchQuery = query.get('q') || ""
    dispatch(productAction.getProduct(searchQuery))
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
