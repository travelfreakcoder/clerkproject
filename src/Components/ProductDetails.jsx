import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchSingleProductQuery } from '../react-query/product-query'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../react-redux/cartSlice'

const ProductDetails = () => {

    const {id}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {cart}=useSelector((state)=>state.cart)

    const {data,isLoading,isFetching,error}=useFetchSingleProductQuery(id)

    console.log(data);


    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
        navigate("/cart")

    }

    const existingCartProduct=cart.find((item)=>item.id===data.id)
    


    if(isFetching){
        return <h2>Fetching...</h2>
    }

    if(isLoading){
        return <h2>Loading..</h2>
    }

    if(error){
        return <h2>Error..</h2>
    }


  return (
    <>
    {/* <!-- Shop Details Section Begin --> */}
    <section className="shop-details" style={{marginBottom:"80px"}}>
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <Link to="/">Home</Link>
                            <Link to="/shop">Shop</Link>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        {/* <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" to="#tabs-1" role="tab">
                                    <div className="product__thumb__pic set-bg" style={{backgroundImage:'url("img/shop-details/thumb-1.png")'}}>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#tabs-2" role="tab">
                                    <div className="product__thumb__pic set-bg" style={{backgroundImage:'url("img/shop-details/thumb-2.png")'}}>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#tabs-3" role="tab">
                                    <div className="product__thumb__pic set-bg" style={{backgroundImage:'url("img/shop-details/thumb-3.png")'}}>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#tabs-4" role="tab">
                                    <div className="product__thumb__pic set-bg" style={{backgroundImage:'url("img/shop-details/thumb-4.png")'}}>
                                        <i className="fa fa-play"></i>
                                    </div>
                                </Link>
                            </li>
                        </ul> */}
                    </div>
                    <div className="col-lg-6 col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src={data?.image} alt="product image"/>
                                </div>
                            </div>
                            {/* <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="img/shop-details/product-big-3.png" alt=""/>
                                </div>
                            </div> */}
                            {/* <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="img/shop-details/product-big.png" alt=""/>
                                </div>
                            </div> */}
                            {/* <div className="tab-pane" id="tabs-4" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="img/shop-details/product-big-4.png" alt=""/>
                                    <Link to="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className="video-popup"><i className="fa fa-play"></i></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>{data?.title}</h4>
                            <div className="rating">
                                <h4><span style={{color:"brown",textDecoration:"none",fontWeight:"bold",fontSize:"25px"}}>Rating: </span> {data?.rating?.rate}</h4>
                            </div>
                            <h3><span style={{color:"brown",textDecoration:"none",fontWeight:"bold",fontSize:"25px"}}>Price: </span>{data?.price}</h3>
                            
                            <p>{data?.description}</p>
                            <div className="product__details__option">
                                {/* <div className="product__details__option__size">
                                    <span>Size:</span>
                                    <label for="xxl">xxl
                                        <input type="radio" id="xxl"/>
                                    </label>
                                    <label className="active" for="xl">xl
                                        <input type="radio" id="xl"/>
                                    </label>
                                    <label for="l">l
                                        <input type="radio" id="l"/>
                                    </label>
                                    <label for="sm">s
                                        <input type="radio" id="sm"/>
                                    </label>
                                </div> */}
                                {/* <div className="product__details__option__color">
                                    <span>Color:</span>
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
                                    <label className="c-9" for="sp-9">
                                        <input type="radio" id="sp-9"/>
                                    </label>
                                </div> */}
                            </div>
                            <div className="product__details__cart__option">
                                {/* <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div> */}
                                <Button variant="contained" style={{fontWeight:"bold"}} onClick={()=>handleAddToCart(data)} disabled={existingCartProduct?true:false}>ADD TO CART</Button>
                            </div>
                            {/* <div className="product__details__btns__option">
                                <Link to="#"><i className="fa fa-heart"></i> add to wishlist</Link>
                                <Link to="#"><i className="fa fa-exchange"></i> Add To Compare</Link>
                            </div> */}
                            <div className="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="/img/shop-details/details-payment.png" alt=""/>
                                {/* Image is not rendering if I don't use / */}

                                
                                <ul>
                                    {/* <li><span>SKU:</span> 3812912</li> */}
                                    <li style={{fontSize:"25px"}}><span style={{color:"brown",textDecoration:"none",fontWeight:"bold",fontSize:"25px"}}>Category:</span> {data?.category}</li>
                                    {/* <li><span>Tag:</span> Clothes, Skin, Body</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-toggle="tab" to="#tabs-5"
                                    role="tab">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="#tabs-6" role="tab">Customer
                                    Previews(5)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="#tabs-7" role="tab">Additional
                                    information</Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-6" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-7" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    {/* <!-- Shop Details Section End --> */}
    </>
  )
}

export default ProductDetails