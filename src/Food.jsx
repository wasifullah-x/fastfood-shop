import "./Food.css"

function Food({items}){

    return(
        <>
            <section className="items">

                {
                    items.map(item => {
                        return(
                            <div key={item.id} className={`food ${item.inCart ? 'selected' : ''}`}>

                            <div className="food-img">
                                <img src={item.photo} />
                            </div>

                            
                            <div className="food-description">

                                <span className="food-name">{item.name}</span>
                                <span className="food-price">Rs {item.price}</span>

                                {
                                    item.inCart  && 
                                     
                                     <div className="food-quantity-area">
                                        <button className="minus">-</button>
                                        <span className="food-quantity">{item.quantity}</span>
                                        <button className="plus">+</button>
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