import React from 'react'
import { Link } from "react-router-dom";
import "../css/home.css"
const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand fixed-top navbar-light bg-light" style={{ opacity: "90%", height:"70px" }}>
                <Link className="navbar-brand" to="/"><img style={{ height: "30px", filter: "contrast(200%)" }} alt="logo" src="image/symbimart.png" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><a style={{fontSize: "18px"}}>LOGIN</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup"><a style={{fontSize: "18px"}}>SIGN UP</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="logo" to="/cart"><img style={{ height: "45px", filter: "contrast(200%)",marginTop: "14px" }} alt="logo" src="image/cart.png" /></Link>
                    </li>
                    </ul>
                </div>
            </nav>


            <div className="card bg-dark text-white" style={{ width: "100%" }}>
                <img src="image/header-bg.jpg" style={{ maxHeight: "500px" , marginTop: "70px"}} className="card-img" alt="Stony Beach" />
                <div className="card-img-overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", marginTop: "70px", textAlign: "center"}}>
                    <h1 className="card-title" style={{
                        background: "linear-gradient(80deg, rgba(255,102,102,1) 0%, rgba(237,255,67,1) 47%, rgba(255,193,44,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textAlign: "center",
                        fontSize: "70px",
                    }}>Welcome to Symbi-Mart</h1>
                    <p className="card-text" style={{ fontStyle: "italic" }}>GOOD FOOD IS WHAT YOU NEED TO BE HAPPY</p>
                </div>
            </div>
            <div className="text-center" style={{ marginTop: "40px" }}>
                <h3>SERVICES</h3>
                <h6 className="text-muted"><em>WHAT'S YOUR DESIRE!</em></h6>
            </div>
            <div className="well text-center">
                <div className="float-left" style={{ margin: "0px 20px 20px 200px" }}>
                    <Link to="/symbi-eat"><img style={{ borderRadius: "50%", width: "130px", height: "130px", margin: "50px 50px 20px 50px" }} src="image/plate.jpg" alt="inn_logo" /></Link>
                    <h3 className="stores-title">SYMBI-EAT</h3>
                    <p className="store-quotes">The chatter is loud,<br />
                        and the food keeps on coming,<br />
                        as we reach over each other for<br />
                        a serving of something.</p>
                </div>
                <div className="float-right" style={{ margin: "0px 200px 20px 50px" }}>
                    <Link to="/rangoli" ><img style={{ borderRadius: "50%", height: "130px", margin: "50px 50px 20px 50px" }} src="image/rangoli.jpg" alt="ccs_logo" /></Link>
                    <h3 className="store-title">RANGOLI</h3>
                    <p className="store-quotes">Almods and dates,<br />
                        share them with mates!<br />
                        Milk and Oil,<br />
                        Can't pack with a foil!<br /></p>
                </div>
                <div className="mx-auto d-block" style={{ margin: "0px 20px 20px 50px" }}>
                    <Link to="/stationery" ><img style={{ borderRadius: "50%", height: "130px", margin: "50px 50px 20px 50px" }} src="image/stationery.jpg" alt="ccs_logo" /></Link>
                    <h3 className="store-title">STATIONERY</h3>
                    <p className="store-quotes"> Writing is my Greatest Desire,<br />
                        So why not write more and more!<br />
                        Don't worry if your pen gets over,<br />
                        Just buy it from our stationery Store!</p>
                </div>
            </div>

            <section className="deneb_cta">
                <div className="container cta_wrapper row align-items-center col-lg-7 cta_content" style={{backgroundColor: "Orange"}}>
                    <h3>Since you visited, I have felt excellently happy and excited to meet you again.</h3>
                    <p>I’m already excited about the next time you visit! Thank you so much for coming into town and making it seem so much brighter and better. Your energy and worldview never cease to inspire me, and I’m so happy we found the time to see each other. Thank you for coming!</p>
                </div>
            </section>

            <footer className="bg-dark text-center text-white" style={{ marginTop: "200px" }}>
                <div className="container p-1 pb-0">
                    <section className="mb-4" style={{ margin: "5px", height:"38px"}}>
                    <Link className="logo" to="/"><img style={{ height: "40px", filter: "contrast(200%)",margin: "8px" }} alt="logo" src="image/twitter.png" /></Link>
                    <Link className="logo" to="/"><img style={{ height: "40px", filter: "contrast(200%)",margin: "8px" }} alt="logo" src="image/linkdin.png" /></Link>
                    <Link className="logo" to="/"><img style={{ height: "40px", filter: "contrast(200%)",margin: "8px" }} alt="logo" src="image/insta.jpg" /></Link>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" , height:"50px"}}>
                    © 2022 Copyright |
                    <Link className="text-white">PRIVACY POLICY</Link>
                </div>
            </footer>
        </>
    )
};

export default Home;