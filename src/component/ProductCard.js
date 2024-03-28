import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {

  const navigate = useNavigate()
  
  const showDetail = () => {
    navigate(`product/${item.id}`)
  }

  return (
    <div className="product-card-area" onClick={showDetail}>
      <div className="product-img-area">
        <img alt="" src={item?.img} />
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="conscious-choice-icon">
        {item?.choice === true ? "Conscious Choice" : ""}
      </div>
      <div className="new-icon">{item?.new === true ? "new" : ""}</div>
    </div>
  );
};

export default ProductCard;
