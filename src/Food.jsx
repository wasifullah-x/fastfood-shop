import "./Food.css"

function Food({items, selectFood, selectQuantity}){


    return(
        <>
            <section className="items">

                {
                    items.map(item => {
                        return(
                            <div onClick={() => selectFood(item.id)} key={item.id} className={`food ${item.inCart ? 'selected' : ''}`}>

                            <div className="food-img">
                                <img src={item.photo} />
                            </div>

                            
                            <div className="food-description">

                                <span className="food-name">{item.name}</span>
                                <span className="food-price">Rs {item.price}</span>

                                {
                                    item.inCart  && 
                                     
                                     <div className="food-quantity-area">
                                        <button disabled={item.quantity <= 1} onClick={(e) => selectQuantity(e, item.id, -1)} className="minus">-</button>
                                        <span className="food-quantity">{item.quantity}</span>
                                        <button onClick={(e) => selectQuantity(e, item.id, +1)} className="plus">+</button>
                                    </div>
                                }

                                

                            </div>

                        </div>
                        );
                        
                    })
                }
                

            </section>
        </>
    );
}

export default Food