import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "./singleProductSlice";

const singleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.singleProduct);

  return (
    <div className="singleProduct">
      <h1>Name: {product?.name}</h1>
      <p>Type: {product?.type}</p>
      <p>Material: {product?.material}</p>
      <p>Gender: {product?.gender}</p>
      <p>Price: {product?.price}</p>
      <p>Size: {product?.size}</p>
    </div>
  );
};

export default singleProduct;
