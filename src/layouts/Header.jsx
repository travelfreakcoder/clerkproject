import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../react-redux/authSlice";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  RedirectToSignIn,
  useAuth
} from "@clerk/clerk-react";



const settings = ["Logout"];

const Header = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // console.log(isLoggedIn);

  const {isSignedIn}=useAuth()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenUserMenu = (event) => {
  // setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = (setting) => {
  // if (setting === "Logout") {
  // dispatch(logout());
  // navigate("/");
  // }
  // setAnchorElUser(null);
  // };

  return (
    <>
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}

      {/* <!-- Offcanvas Menu Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <Link to="/signin">Sign in</Link>
            <Link to="">FAQs</Link>
          </div>
          <div className="offcanvas__top__hover">
            <span>
              Usd <i className="arrow_carrot-down"></i>
            </span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <div className="offcanvas__nav__option">
          <Link to="" className="search-switch">
            <img src="img/icon/search.png" alt="" />
          </Link>
          <Link to="">
            <img src="img/icon/heart.png" alt="" />
          </Link>
          <Link to="">
            <img src="img/icon/cart.png" alt="" /> <span>0</span>
          </Link>
          <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
      {/* <!-- Offcanvas Menu End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="">Sign in</Link>
                    <Link to="">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                {/* <Link to="" className="search-switch"><img src="img/icon/search.png" alt=""/></Link> */}
                {/* <Link to=""><img src="img/icon/heart.png" alt=""/></Link> */}
                {/* <Link to=""><img src="img/icon/cart.png" alt=""/> */}
                {/* <span>0</span> */}
                {/* </Link> */}
                {/* <div className="price">$0.00</div> */}

                {/* <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        </div> */}

                <Box>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button color="inherit">Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </Box>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
      {isSignedIn? <Outlet/>:<div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"600px"}}><h3 style={{color:"brown"}}>Welcome User, Please Login to Continue</h3></div>}
      <Footer />
    </>
  );
};

export default Header;
