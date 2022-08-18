import { getProducts } from "../../../get/products-get";
import React, {useEffect, useState } from 'react';

export function AddProducts(props) {
    const [ data, setValues ] = useState(null);
    const del = React.createRef();

    async function getProductsList(){
        try {
            const data = await getProducts();
            setValues(data);
        } catch (error) {
            setValues([]);
        }
    }

    useEffect(() => {
        getProductsList();
    }, []);

    console.log(props.arr)

    return(
        <div className="product-container">
            <select className='login-input'>
                { data ? data.map(element => (<option key={element.id}>{element.name}</option>)) : <option>Products missing</option> }
            </select>
            <p className="login-container-paragraph">Amount</p>
            <input className='login-input'></input>
            <button ref={del} className="login-input" id={props.id} onClick={() => console.log(del.current.id)}>Delete product</button>
        </div>
    )
}