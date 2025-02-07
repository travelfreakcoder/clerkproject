import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchProductsQuery } from "../react-query/product-query";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../react-redux/cartSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const [input, setInput] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [isSorted, setIsSorted] = useState(false);
  const [sortType, setSortType] = useState("price");
  const [sortOrder, setSortOrder] = useState({ price: "default" });

  const [page,setPage]=useState(1)

  const { data, isLoading, isFetching, error } =
    useFetchProductsQuery(selectedCategory);

  console.log(data);

  const filterData = data?.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  const sortedData = isSorted
    ? [...filterData].sort((a, b) => {
        if (sortType === "price") {
          return sortOrder.price === "asc"
            ? a.price - b.price
            : b.price - a.price;
        }
      })
    : filterData;

  const handleSortClick = (e) => {
    const value = e.target.value;
    if (value === "default") {
      setIsSorted(false);
      setSortOrder({ price: "default" });
    } else {
      setIsSorted(true);
      setSortType("price");
      setSortOrder((prev) => {
        return {
          price: value,
        };
      });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsSorted(false);
  };

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };


  // const renderPagination=[...Array(Math.ceil(sortedData?.length/5)).map((_,i)=>{
  //   return <Pagination key={i} count={i+1} color="primary" />
  // })]

  if (isFetching) {
    return <h2>Fetching..</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shop</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Shop Section Begin --> */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Search by title"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="shop__sidebar__accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__categories">
                            <ul className="nice-scroll">
                              <li
                                onClick={() => handleCategoryChange("")}
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "grey",
                                  color: "white",
                                  marginTop: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                All Products
                              </li>
                              <li
                                onClick={() =>
                                  handleCategoryChange("electronics")
                                }
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "grey",
                                  color: "white",
                                  marginTop: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                Electronics
                              </li>
                              <li
                                onClick={() => handleCategoryChange("jewelery")}
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "grey",
                                  color: "white",
                                  marginTop: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                Jewelery
                              </li>
                              <li
                                onClick={() =>
                                  handleCategoryChange("men's clothing")
                                }
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "grey",
                                  color: "white",
                                  marginTop: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                Men's Clothing
                              </li>
                              <li
                                onClick={() =>
                                  handleCategoryChange("women's clothing")
                                }
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "grey",
                                  color: "white",
                                  marginTop: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                Women's Clothing
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><a href="#">Louis Vuitton</a></li>
                                                    <li><a href="#">Chanel</a></li>
                                                    <li><a href="#">Hermes</a></li>
                                                    <li><a href="#">Gucci</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$200.00 - $250.00</a></li>
                                                    <li><a href="#">250.00+</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label for="xs">xs
                                                    <input type="radio" id="xs"/>
                                                </label>
                                                <label for="sm">s
                                                    <input type="radio" id="sm"/>
                                                </label>
                                                <label for="md">m
                                                    <input type="radio" id="md"/>
                                                </label>
                                                <label for="xl">xl
                                                    <input type="radio" id="xl"/>
                                                </label>
                                                <label for="2xl">2xl
                                                    <input type="radio" id="2xl"/>
                                                </label>
                                                <label for="xxl">xxl
                                                    <input type="radio" id="xxl"/>
                                                </label>
                                                <label for="3xl">3xl
                                                    <input type="radio" id="3xl"/>
                                                </label>
                                                <label for="4xl">4xl
                                                    <input type="radio" id="4xl"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
                                                <label className="c-1" for="sp-1">
                                                    <input type="radio" id="sp-1"/>
                                                </label>
                                                <label className="c-2" for="sp-2">
                                                    <input type="radio" id="sp-2"/>
                                                </label>
                                                <label className="c-3" for="sp-3">
                                                    <input type="radio" id="sp-3"/>
                                                </label>
                                                <label className="c-4" for="sp-4">
                                                    <input type="radio" id="sp-4"/>
                                                </label>
                                                <label className="c-5" for="sp-5">
                                                    <input type="radio" id="sp-5"/>
                                                </label>
                                                <label className="c-6" for="sp-6">
                                                    <input type="radio" id="sp-6"/>
                                                </label>
                                                <label className="c-7" for="sp-7">
                                                    <input type="radio" id="sp-7"/>
                                                </label>
                                                <label className="c-8" for="sp-8">
                                                    <input type="radio" id="sp-8"/>
                                                </label>
                                                <label className="c-9" for="sp-9">
                                                    <input type="radio" id="sp-9"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <a href="#">Product</a>
                                                <a href="#">Bags</a>
                                                <a href="#">Shoes</a>
                                                <a href="#">Fashio</a>
                                                <a href="#">Clothing</a>
                                                <a href="#">Hats</a>
                                                <a href="#">Accessories</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    {/* <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select
                        value={sortOrder.price}
                        onChange={handleSortClick}
                      >
                        <option value="default">Sort By</option>
                        <option value="asc">Low To High</option>
                        <option value="desc">High To Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {sortedData?.slice(page*5-5,page*5).map((item) => {
                  const existingCartProduct = cart.find(
                    (cartItem) => cartItem.id === item.id
                  );

                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                      <div
                        className="product__item"
                        style={{ minHeight: "500px" }}
                      >
                        <div
                          className="product__item__pic set-bg"
                          onClick={() => handleNavigate(item.id)}
                          style={{
                            backgroundImage: `url(${item?.image})`,
                            backgroundSize: "contain",
                            cursor: "pointer",
                          }}
                        >
                          {/* <ul className="product__hover">
                          <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                          <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a>
                          </li>
                          <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                      </ul> */}
                        </div>
                        <div className="product__item__text">
                          <h6 style={{ color: "blueviolet" }}>{item.title}</h6>

                          {/* <Link to="#" className="add-cart">
                            + Add To Cart
                          </Link> */}
                          <div className="rating">
                            <h5>
                              <span style={{ color: "brown" }}>Rating: </span>
                              {item?.rating?.rate}
                            </h5>
                          </div>
                          <h5>
                            <span style={{ color: "brown" }}>Price: </span>
                            {item?.price}
                          </h5>
                          <h5>
                            <span style={{ color: "brown" }}>Category: </span>
                            {item?.category}
                          </h5>
                          <Button
                            variant="contained"
                            onClick={() => handleAddToCart(item)}
                            style={{ display: "block", margin: "5px auto" }}
                            disabled={existingCartProduct ? true : false}
                          >
                            ADD TO CART
                          </Button>
                          {/* <div className="product__color__select">
                          <label for="pc-4">
                              <input type="radio" id="pc-4"/>
                          </label>
                          <label className="active black" for="pc-5">
                              <input type="radio" id="pc-5"/>
                          </label>
                          <label className="grey" for="pc-6">
                              <input type="radio" id="pc-6"/>
                          </label>
                      </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-12">
                {
                  sortedData.length>0 && <Pagination count={Math.ceil(sortedData.length/5)} page={page} onChange={(event,value)=>setPage(value)} color="primary" />
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Section End --> */}
    </>
  );
};

export default Shop;
