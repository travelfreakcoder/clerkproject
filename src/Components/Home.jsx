import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
    
    


    {/* <!-- Banner Section Begin --> */}
    <section className="banner spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-4">
                    <div className="banner__item">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-1.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <Link to="/shop">Shop now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="banner__item banner__item--middle">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-2.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Accessories</h2>
                            <Link to="/shop">Shop now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner__item banner__item--last">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-3.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <Link to="/shop">Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}

    {/* <!-- Instagram Section Begin --> */}
    <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-1.jpg")'}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-2.jpg")'}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-3.jpg")'}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-4.jpg")'}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-5.jpg")'}}></div>
                        <div className="instagram__pic__item set-bg" style={{backgroundImage:'url("img/instagram/instagram-6.jpg")'}}></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Instagram Section End --> */}

    {/* <!-- Latest Blog Section Begin --> */}
    <section className="latest spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-1.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-2.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-3.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Latest Blog Section End --> */}
    </>
  )
}

export default Home