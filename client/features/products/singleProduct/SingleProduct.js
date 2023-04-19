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

  //  const handleSubmit = useSelect
  const onSubmitHandle = (evt) => {
    evt.preventDefault();
    // dispatch(addToCartAsync({ name, address, imageUrl, description }));
    console.log(evt.target.name, evt.target.qty);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const { name, imageUrl, type, material, gender, price, size, qty } =
    singleProduct.info;

  return (
    <div className="singleProduct">
      <h1>Name: {name}</h1>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>Material: {material}</p>
      <p>Gender: {gender}</p>
      <p>Price: {price}</p>
      <p>Size: {size}</p>
      <p>Quantity: {qty}</p>
      <button
        type="button"
        onClick={() => dispatch(fetchSingleProduct(productId))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default SingleProduct;
