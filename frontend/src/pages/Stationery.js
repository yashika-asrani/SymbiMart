import React from 'react'
import { Link } from "react-router-dom";
import "../css/stationery.css"
const Stationery = (props) => {
    return (
        <>
            <nav className="navbar" style={{paddingBottom: "60px", top: 0, height:"75px"}}>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li style={{ marginTop: "6px" }}><Link to="/"><a style={{fontSize: "20px"}}>Home</a></Link></li>
                        <li style={{ marginTop: "6px" }}><Link to="#food-menu"><a style={{fontSize: "20px"}}>Menu</a></Link></li>
                        <li><Link to="/cart"><img style={{ height: "40px" }} src="image/cart1.png" alt='l'/></Link></li>
                    </ul>
                    <h2 className="logo flex-left"><a style={{fontWeight: "bold", fontSize:"35px"}}>SYMBI/STATIONERY</a></h2>
                    <h1 className="brand" style={{ paddingBottom: "10px" }}><Link to="/"><img alt='l' style={{ height: "40px" }} src="image/symbimart.png" /></Link>
                    </h1>
                </div>
            </nav>
            <section className="showcase-area" id="showcase" style={{ backgroundImage: "url('image/background.jpeg')" }}>
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Find good Stationery from us</h1>
                    <p>Best quality items available at our store</p>
                    <Link to="#food-menu" className="btn btn-primary">Menu</Link>
                </div>
            </section>


            <section id="food">
                <h2>Types of stationery</h2>
                <div className="food-container container">
                    <div className="food-type fruite">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/books.webp" alt="error" />
                            <div className="img-content">
                                <h3>books</h3>
                                <Link to="https://en.wikipedia.org/wiki/Book" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type vegetable">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/writing.jpeg" alt="error" />
                            <div className="img-content">
                                <h3>writing materials</h3>
                                <Link to="https://en.wikipedia.org/wiki/Writing_implement" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type grin">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="image/other.jpeg" alt="error" />
                            <div className="img-content">
                                <h3>Other products</h3>
                                <Link to="https://en.wikipedia.org/wiki/Stationery" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-menu">
                <h2 className="food-menu-heading">Stationery menu</h2>
                <div className="food-menu-container container">

                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/pens.jpeg" alt="error" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Pens</h2>
                            <p>
                            A pen is a common writing instrument that applies ink to a surface, usually paper, for writing or drawing
                            </p>
                            <p className="food-price">Price: &#8377; 5</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Pen", "image/pens.jpeg", 5)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Books" />
                            <input type="hidden" name="Price" value="80" />
                        </div>
                    </div>
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/register.jpeg" alt="error" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">BOOKS</h2>
                            <p>
                                Register is a book, list or record of dates, events or other important pieces of information.
                            </p>
                            <p className="food-price">Price: &#8377; 80</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Books", "image/register.jpeg", 80)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Books" />
                            <input type="hidden" name="Price" value="80" />
                        </div>
                    </div>


                    <div className="food-menu-item">

                        <div className="food-img">
                            <img src="image/tape.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Tapes</h2>
                            <p>
                                Tape is used to stick things together or to cover or repair something.
                            </p>
                            <p className="food-price">Price: &#8377; 30</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Tape", "image/tape.jpeg", 30)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Tapes" />
                            <input type="hidden" name="Price" value="30" />
                        </div>

                    </div>

                    <div className="food-menu-item">

                        <div className="food-img">
                            <img src="image/set.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">rubber pencil sharpner scale set</h2>
                            <p>
                                A set conatining 5 pencils , a sharpner , a scale and a rubber.
                            </p>
                            <p className="food-price">Price: &#8377; 50</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Set", "image/set.jpeg", 50)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Pencil Set" />
                            <input type="hidden" name="Price" value="50" />
                        </div>

                    </div>

                    <div className="food-menu-item">

                        <div className="food-img">
                            <img src="image/scissor.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Scissor</h2>
                            <p>
                                Scissors are used for cutting various thin materials, such as paper, cardboard, metal foil, cloth, rope, and wire.
                            </p>
                            <p className="food-price">Price: &#8377; 60</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Scissor", "image/scissor.jpeg", 60)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Scissors" />
                            <input type="hidden" name="Price" value="60" />
                        </div>

                    </div>
                    <div className="food-menu-item">

                        <div className="food-img">
                            <img src="image/geometry.jpeg" alt="" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Geometry box</h2>
                            <p>
                                A geometry box is a set of various instruments required for basic geometric diagrams and graphs. It consists of instruments like a compass, divider, ruler, set squares, and protractor.
                            </p>
                            <p className="food-price">Price: &#8377; 200</p>
                            <button name="add_to_cart" type="submit" className="addtocart" onClick={() => props.addItems("Geometry Box", "image/geometry.jpeg", 200)}>
                                <div className="pretext">
                                    <i className="fas fa-cart-plus"></i> ADD TO CART
                                </div>
                            </button>
                            <input type="hidden" name="Item_name" value="Geometry Box" />
                            <input type="hidden" name="Price" value="200" />
                        </div>

                    </div>

                </div>
            </section>
            <div className="site-footer">
                <div className="container">
                    <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved
                        <br />
                        <img src="image/insta.jpg" alt='l' className="social" /><img src="image/twitter.png" alt='l' className="social" /><img src="image/linkdin.png" alt='l' className="social" />
                        <br /><Link>Privacy Policy </Link><Link>|</Link><Link> Terms of Use</Link>
                    </p>
                </div>
            </div>
        </>
    )
};

export default Stationery;