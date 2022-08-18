import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { getRecipes } from "../../get/recipes-get";
import { RecipesBlock } from "./recipes-block";
import { PopUp } from "./pop-up/popup";

export function RecipesList() {
    const [ data, setValues ] = useState(null);
    const [isActive, setActive] = useState(false);

    async function getRecipesList(){
        try {
            const data = await getRecipes();
            setValues(data);
        } catch (error) {
            setValues([]);
        }
    }

    const toggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        getRecipesList();
    }, []);

    return (
        localStorage.getItem('token') ?
        <section className="login-form">
               {  data ? data.map(element => <RecipesBlock id = {element.id}  key = {element.id} name = {element.name} calories = {element.calories} carbohydrates = {element.carbohydrates} fat = {element.fat} products = {element.products}/>) : null }
               <button className="login-input" onClick={toggleClass}>Add</button>
               <div className={isActive ? "popup-wrapper" : "popup-wrapper popup-closed"} onClick={toggleClass}>
                <PopUp open={isActive}/>
               </div>
               
        </section>
        : <Navigate replace to="/login" />
    ); 
}