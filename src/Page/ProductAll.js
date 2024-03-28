import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import {Container, Row, Col} from "react-bootstrap"

const ProductAll = () => {

    const [productList, setProductList] = useState([])

    const getProduct = async() => {
        let url ='https://my-json-server.typicode.com/nicetomina/hnm-project/products'
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

   useEffect(()=>{getProduct()},[])

  return (
    <div>
        <Container>
            <Row>
            {productList.map((menu)=>(
                <Col lg={3}> <ProductCard item={menu}/> </Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
