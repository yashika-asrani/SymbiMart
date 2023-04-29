import React from 'react'
import { Link } from "react-router-dom";
import "../css/rangoli.css"
const Rangoli = (props) => {
    return (
        <>
            <nav className="navbar" style={{height: "75px"}}>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"
                        ></span>
                    </div>
                    <ul className="menu-items">
                        <li style={{ marginTop: "9px"}}><Link to="/"><a style={{fontSize: "20px"}}>Home</a></Link></li>
                        <li style={{ marginTop: "9px" }}><Link to="#food-menu"><a style={{fontSize: "20px"}}>Menu</a></Link></li>
                        <li><Link to="/cart"><img style={{ height: "40px" }} src="image/cart1.png" alt="not"/></Link></li>
                    </ul>
                    <h2 className="logo flex-right" style={{fontWeight: "bold"}}>SYMBI/RANGOLI</h2>
                    <h1 className="brand" style={{ paddingBottom: "10px" }}><Link to="/"><img alt="not" style={{ height: "40px" }} src="image/symbimart.png" /></Link>
                    </h1>
                </div>
            </nav>
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Find good Snacks and canapes here</h1>
                    <p>Best quality snacks available at our store</p>
                    <Link to="#food-menu" className="btn btn-primary">Menu</Link>
                </div>
            </section>


            <section id="food">
                <h2>Types of snacks</h2>
                <div className="food-container container">
                    <div className="food-type fruite">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/edible.jpeg" alt="error" />
                            <div className="img-content">
                                <h3>eatables</h3>
                                <Link to="https://en.wiktionary.org/wiki/eatable" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type vegetable">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/drinks.jpeg" alt="error" />
                            <div className="img-content">
                                <h3>Drinkables</h3>
                                <Link to="https://en.wikipedia.org/wiki/Drink" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type grin">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/excetra.webp" alt="error" />
                            <div className="img-content">
                                <h3>Other products</h3>
                                <Link to="https://en.wikipedia.org/wiki/Snack" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-menu">
                <h2 className="food-menu-heading">Rangoli menu</h2>
                <div className="food-menu-container container">
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/chips.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Waffers</h2>
                            <p>
                                All the flavours available.</p>
                            <p className="food-price">Price: &#8377; 20</p>
                            <button className="addtocart" onClick={() => props.addItems("Waffers", "image/chips.jpeg", 20)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/soft drinks.jpeg" alt="error" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Soft drinks</h2>
                            <p>
                                All the different varities of soft drinks available including juice (250ml).
                            </p>
                            <p className="food-price">Price: &#8377; 30</p>
                            <button className="addtocart" onClick={() => props.addItems("Soft drinks", "image/soft drinks.jpeg", 30)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/ice cream.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Ice cream cones</h2>
                            <p>
                                Cherish the different flavours of cone avaiable here.
                            </p>
                            <p className="food-price">Price: &#8377; 50</p>
                            <button className="addtocart" onClick={() => props.addItems("Ice cream cones", "image/ice cream.jpeg", 50)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/cadbury .jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Chocolates</h2>
                            <p>
                                Find any type of cadbury flavours.
                            </p>
                            <p className="food-price">Price: &#8377; 20</p>
                            <button className="addtocart" onClick={() => props.addItems("Chocolates", "image/cadbury .jpeg", 20)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/milk.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Milk</h2>
                            <p>
                                Amul milk is he most hygenic milk available in market and available at rangoli
                            </p>
                            <p className="food-price">Price: &#8377; 32</p>
                            <button className="addtocart" onClick={() => props.addItems("Milk", "image/milk.jpeg", 32)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/dahi.webp" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Dahi(curd)</h2>
                            <p>
                                Amul masti dahi is the best quality dahi available.
                            </p>
                            <p className="food-price">Price: &#8377; 35</p>
                            <button className="addtocart" onClick={() => props.addItems("Dahi(curd)", "image/dahi.jpeg", 35)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                                <div className="pretext done">
                                    <div className="posttext"><i className="fas fa-check"></i>ADDED</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <div className="site-footer">
                <div className="container">
                    <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved
                        <br />
                        <img src="image/insta.jpg" alt="not" className="social" /><img alt="not" src="image/twitter.png" className="social" /><img alt="not" src="image/linkdin.png" className="social" />
                        <br /><Link>Privacy Policy </Link><Link>|</Link><Link> Terms of Use</Link>
                    </p>
                </div>
            </div>
        </>
    )
};

export default Rangoli;