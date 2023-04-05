import React from "react";


const Inventory = (props) => {
    const {inventory} = props

    return(
        <div className="inventory">
            <h3>Inventory</h3>
            {inventory.map((el, i) => {
                return (
                    <div key={i}>
                        <h5 >{el.item_name}</h5>
                        <article >{el.description}</article>
                    </div>
                    )
            })}
        </div>
    )
}

export default Inventory