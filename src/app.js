import React from 'react';
import LoginForm from './form/login/login-form';
import SignupForm from "./form/signup/signup-form";
import {RecipesList} from "./form/recipes/recipes-form";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
      return (
        <BrowserRouter>
          <div>
            <Routes>
                <Route path="/login" element={ <LoginForm /> }/>
                <Route path="/signup" element={ <SignupForm /> }/>
                <Route path="/recipes" element={ <RecipesList /> }/>
            </Routes>
          </div>
        </BrowserRouter>

        
    );
}

export default App;