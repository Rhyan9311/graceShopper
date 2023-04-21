import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../../cart/cartSlice";
import {
  selectSingleProduct,
  fetchSingleProduct,
  editProductQuantity,
} from "../singleProduct/singleProductSlice";

const qtyOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);
  const [quantity, editQty] = useState(1);
  //const { selectedQty } = useSelector((state) => state.stateValues);

  // const handleQuantityChange = async (evt) => {
  //   await dispatch(editProductQuantity(productId, evt.target.value));
  // };

  //  const handleSubmit = useSelect
  const onSubmitHandle = (evt) => {
    evt.preventDefault();
    dispatch(addCartProduct({ productId, userID }));
    // console.log('hello'+ singleProduct);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const { id, name, imageUrl, type, material, gender, price, size, qty } =
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
      <select onChange={(e) => editQty(e.target.value)} value={quantity}>
        {qtyOptions.map((qty) => (
          <option key={qty} value={qty}>
            {qty}
          </option>
        ))}
      </select>
      <button type="button" onClick={onSubmitHandle}>
        Add To Cart
      </button>
    </div>
  );
};

export default SingleProduct;
