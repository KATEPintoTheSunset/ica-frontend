import { deleteRecipe } from "../../delete/delete-recipe";

export function RecipesBlock(props) {
    let productElem = props.products.map(element => <li>{element.name + ' ' + element.recipe.amount + ' g'}</li>)
    return(
        <div className="login-form-container" key={props.id}>
            <p className="login-container-paragraph"> Name: {props.name} </p>
            <p className="login-container-paragraph"> Calories: {props.calories} </p>
            <p className="login-container-paragraph"> Carbohydrates: {props.carbohydrates} </p>
            <p className="login-container-paragraph"> Fat: {props.fat} </p>
            <ul className="product-list">
                {productElem}
            </ul>
            <button className="login-input" onClick={async() => {await deleteRecipe(props.id)
             window.location.reload()}}>Delete</button>
        </div>
        
    )
}