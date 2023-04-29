import React, { useState, useEffect } from "react";
import { PTabContainer, PTabProductList } from "./Tablet.style";
import TabProductCard from "./TabProductCard";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setAllProducts,
} from "../../../redux/product/productSlice";
import Loader from "../../../components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsFilterBar from "./ProductsFilterBar";
import useBreakpoint from "../../../hooks/useBreakPoint";

const Tablet = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const newParam = searchParams.get("new");
  const rated = searchParams.get("rated");
  const { products, total, allProducts, isLoading } = useSelector(
    (state) => state.product
  );
  const [pageInc, setPageInc] = useState(1);
  const { isSmallMobile, isMobile, isTablet } = useBreakpoint();
  const [limit] = useState(10);
  useEffect(() => {
    dispatch(reset());
    dispatch(
      getTheProducts({
        featured,
        category,
        subCategory: location?.state?.subCategory,
        newParam,
        rated,
        page: pageInc,
        limit,
      })
    );
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    dispatch(setAllProducts());
    // eslint-disable-next-line
  }, [products]);

  const fetchMore = () => {
    setPageInc((pageInc) => pageInc + 1);
    if (allProducts.length < total) {
      dispatch(
        getTheProducts({
          newParam,
          featured,
          category,
          page: pageInc + 1,
          limit,
        })
      );
    }
  };
  console.log(setSearchParams);

  return (
    <PTabContainer>
    <ProductsFilterBar />
      {isLoading && <Loader />}
      {allProducts?.length ? (
        <PTabProductList id="ProductListContainer">
          {allProducts.map((product) => (
            <TabProductCard product={product} />
          ))}
          <InfiniteScroll
            dataLength={allProducts?.length}
            next={fetchMore}
            hasMore={allProducts?.length < total ? true : false}
            scrollableTarget="ProductListContainer"
          ></InfiniteScroll>
        </PTabProductList>
      ) : (
        <h2>No Products</h2>
      )}
    </PTabContainer>
  );
};
export default Tablet;
