import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSingleProduct,
  fetchSingleProduct,
} from "../singleProduct/singleProductSlice";

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const { name, type, material, gender, price, size } = singleProduct.info;

  return (
    <div className="singleProduct">
      <h1>Name: {name}</h1>
      <p>Type: {type}</p>
      <p>Material: {material}</p>
      <p>Gender: {gender}</p>
      <p>Price: {price}</p>
      <p>Size: {size}</p>
    </div>
  );
};

export default SingleProduct;
