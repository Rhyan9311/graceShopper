import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectSingleProducts, fetchSingleProduct } from "../products/allProducts/allProductsSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const products = useSelector(selectProducts);
  // const singleProducts = useSelector(selectSingleProducts);
  // console.log(singleProducts);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1>Cart</h1>
      {/* <CartList products={products} />
      <CartSingle products={singleProducts} /> */}
    </div>
  );

  // const { id } = useParams();
  // const products = useSelector(selectProducts);
  // const singleProducts = useSelector(selectSingleProducts);
  // console.log(singleProducts);
  // useEffect(() => {
  //   dispatch(fetchSingleProduct(id));
  // }, [dispatch, id]);
  // return (
  //   <div>
  //     <h1>Cart</h1>
  //   </div>
  // );
};

export default Cart;


