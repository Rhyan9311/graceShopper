import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../../cart/cartSlice";
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
    dispatch(addCartProduct({productId, userID  }));
    // console.log('hello'+ singleProduct);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const { id ,name, imageUrl, type, material, gender, price, size, qty } =
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
        onClick={onSubmitHandle}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default SingleProduct;
