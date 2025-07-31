import "./Details.css"

function Details({selectedItems}){

    let total = selectedItems.reduce((sum, item) => {
        return sum + item.price * item.quantity 
    }, 0);

    return(
        <>
            <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedItems.map(item => {
                                return(

                                        <tr key={item.id}>
                                            <td>{item.quantity}x {item.name}</td>
                                            <td>Rs {item.price*item.quantity}</td>
                                        </tr>        
                            
                                );
                            })
                            
                        }
                        {
                            <tr>
                                    <th>Total</th>
                                    <th>Rs {total}</th>
                            </tr>
                        }
                        
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Details