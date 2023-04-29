import React from 'react'
import { Link } from "react-router-dom";
import "../css/symbi-eat.css"
const SymbiEat = (props) => {
    return (
        <>
            <nav className="navbar" style={{paddingBottom: "70px", top: 0}}>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li style={{ marginTop: "12px" }}><Link to="/"><a style={{fontSize: "18px"}}>Home</a></Link></li>
                        <li style={{ marginTop: "12px" }}><Link to="#food-menu"><a style={{fontSize: "18px"}}>Menu</a></Link></li>
                        <li><Link to="/cart"><img style={{ height: "40px", marginTop:"7px" }} src="../image/cart1.png" alt='logo'/></Link></li>
                    </ul>
                    <h2 className="logo flex-left"><a style={{fontWeight: "bold", fontSize: "35px"}}>SYMBI/EAT</a></h2>
                    <h1 className="brand" style={{ paddingBottom: "10px" }}><Link to="index.html"><img style={{ height: "40px" }} src="image/symbimart.png" alt='logo'/></Link>
                    </h1>
                </div>
            </nav>
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Eat Right Food</h1>
                    <p>Eat Healty, it is good for our health.</p>
                    <Link to="#food-menu" className="btn btn-primary">Menu</Link>
                </div>
            </section>
            <section id="food">
                <h2>Types of food</h2>
                <div className="food-container container">
                    <div className="food-type fruite">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
                            <div className="img-content">
                                <h3>FRUIT</h3>
                                <Link to="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type vegetable">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
                            <div className="img-content">
                                <h3>VEGETABLE</h3>
                                <Link to="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="food-type grin">
                        <div className="img-container">
                            <img style={{height: "300px", width:"350px"}} src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
                            <div className="img-content">
                                <h3>GRAIN</h3>
                                <Link to="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary" target="blank">learn
                                    more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-menu">
                <h2 className="food-menu-heading">Food Menu</h2>
                <div className="food-menu-container container">
                    <div className="food-menu-item">
                        <div className="food-img">
                            <img src="image/masala dosa.jpeg" alt="logo" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Masala Dosa</h2>
                            <p>
                                Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter.</p>
                            <p className="food-price">Price: &#8377; 100</p>
                            <button className="addtocart" onClick={() => props.addItems("Masala Dosa", "image/masala dosa.jpeg", 100)}>
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
                            <img src="image/misalpav.jpeg" alt="error" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Misal pav</h2>
                            <p>
                                Misal pav is a popular Maharashtrian street food of usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture), lemon juice, coriander leaves and served with a side of soft pav
                            </p>
                            <p className="food-price">Price: &#8377; 80</p>
                            <button className="addtocart" onClick={() => props.addItems("Misal Pav", "image/misalpav.jpeg", 80)}>
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
                            <img src="image/vadapav.webp" alt="logo" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Vada Pav</h2>
                            <p>
                                Vada pav is a savory dinner roll stuffed with fried mashed and spiced potato fritters. It is a popular vegan street food snack eaten in Mumbai and rest of Maharashtra. This dish is full of flavors and various textures!
                            </p>
                            <p className="food-price">Price: &#8377; 20</p>
                            <button className="addtocart" onClick={() => props.addItems("Vada Pav", "image/vadapav.webp", 20)}>
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
                            <img src="image/pavbhaji.webp" alt="logo" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Pav Bhaji</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                quae.
                            </p>
                            <p className="food-price">Price: &#8377; 80</p>
                            <button className="addtocart" onClick={() => props.addItems("Pav Bhaji", "image/pavbhaji.webp", 80)}>
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
                            <img src="image/pulao.jpeg" alt="logo" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-titile">Pulao</h2>
                            <p>
                                Veg Pulao is a delicious, flavourful one pot meal by cooking veggies & spices along with rice.
                            </p>
                            <p className="food-price">Price: &#8377; 100</p>
                            <button className="addtocart" onClick={() => props.addItems("Pulao", "image/pulao.jpeg", 100)}>
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
                            <img src="image/sandwich.webp" alt="logo" />
                        </div>
                        <div className="food-description">
                            <h2 className="food-title">Sandwich</h2>
                            <p>
                                It is a dish having vegetables and cheese stuffed in between two breads.
                            </p>
                            <p className="food-price">Price: &#8377; 90</p>
                            <button className="addtocart" onClick={() => props.addItems("Sandwich", "image/sandwich.webp", 90)}>
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
                        <img src="image/insta.jpg" className="social" alt='logo' /><img src="image/twitter.png" alt='logo' className="social" /><img src="image/linkdin.png" className="social" alt='logo' />
                        <br /><Link>Privacy Policy </Link><Link>|</Link><Link> Terms of Use</Link>
                    </p>
                </div>
            </div>
        </>
    )

};

export default SymbiEat;
