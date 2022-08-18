import { elementArray } from "./popup-element-array";

export function PopUp(open) {
    return(
        <div className="popup-container" onClick={(e) => {
            e.stopPropagation();
            }}>
            <p className="login-container-paragraph">New Recipe</p>
            <p className="login-container-paragraph">Name</p>
            <input className='login-input'></input>
            <p className="login-container-paragraph">Products</p>

            <div className="products-list">
                {elementArray().map(item => item)}
            </div>
            <button className="login-input" onClick={() => elementArray(true)}>Add product</button>
            {/* <button className="login-input">New product</button> */}
        </div>
    )
}