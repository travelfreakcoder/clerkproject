import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {


  return (
    <>
    {/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-blog set-bg" style={{backgroundImage:'url("img/breadcrumb-bg.jpg")'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Our Blog</h2>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}


    {/* <!-- Blog Section Begin --> */}
    <section className="blog spad">
        <div className="container">
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
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-4.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 16 February 2020</span>
                            <h5>Aiming For Higher The Mastopexy</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-5.jpg"></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 21 February 2020</span>
                            <h5>Wedding Rings A Gift For A Lifetime</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-6.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 28 February 2020</span>
                            <h5>The Different Methods Of Hair Removal</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-7.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 16 February 2020</span>
                            <h5>Hoop Earrings A Style From History</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-8.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 21 February 2020</span>
                            <h5>Lasik Eye Surgery Are You Ready</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-9.jpg")'}}></div>
                        <div className="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""/> 28 February 2020</span>
                            <h5>Lasik Eye Surgery Are You Ready</h5>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}
    </>
  )
}

export default Blog