import React from 'react'

const Card = (props) => {
    return (
        <>
            {props.items === null ? "No items added" : props.items.map((item, key) => (
                <div key={key} className="card" style={{width: "10rem", marginLeft: "10px"}}>
                    <img className="card-img-top" src={item.image} alt="Card cap" height={100}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: {item.price}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card