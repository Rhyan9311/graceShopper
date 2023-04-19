import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../../../features/products/allProducts/allProductsSlice";
import { NavLink } from "react-router-dom";
import { fetchProductsAsync } from "../../../features/products/allProducts/allProductsSlice";

const AllProducts = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div>
      <div id="product-card">
        {products.map((product) => (
          <div key={`All Products: ${product.id}`}>
            <div className="product-row">
              <NavLink to={`/products/${product.id}`}>
                <img src={product.imageUrl} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
