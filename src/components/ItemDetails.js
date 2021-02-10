import React, { useState, useEffect } from "react"

function ItemDetails({match}) {

    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])

    const [item, setItem] = useState({})
    const fetchItem = async () => { 
       const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
       const items = await data.json()       
       setItem(items.drinks)
    }
    return (
        <div>
            {/* {items.map(item => (
                <h1 key={item.idDrink}>
                    <Link to={`shop/${item}`}>{ item.strDrink}</Link>
                </h1>
            ))} */}
            
        </div>
    )
}

export default ItemDetails