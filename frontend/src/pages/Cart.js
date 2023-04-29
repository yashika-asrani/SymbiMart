import React from 'react'
import Card from '../components/Card'
import "../css/Cart.css"

const cart = (props) => {
    // const deleteI = () => {
    //     props.cartItems = [];
    // }
    console.log(typeof props.cartItems)
    return (
        <>
            <nav className="nav" style={{backgroundColor: "black", padding: "0px 0px"}}>
                <div className="nav__center container">
                    <div className="nav__logo">
                        <h1>SymbiMart<span>Cart</span></h1>
                    </div>

                    <ul className="nav__list">
                        <button  className="login" onClick={() => props.setCartItems(null)}>Checkout</button>
                        <div className="cart__icon">
                            <h2>cart</h2>
                            <span className="item__total">{props.cartItems === null ? 0 :  props.cartItems.length}</span>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className='cart-items' style={{marginTop: "200px", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                <Card items={props.cartItems} />
            </div>
        </>
    )
}

export default cart