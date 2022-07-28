import React, { Fragment } from "react";

//Components
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import DeleteRecipe from '../components/DeleteRecipe';
import UpdateRecipe from '../components/UpdateRecipe';


const Cookbook = () => {

    return (
        <Fragment>
            <div className="container">
                <ListRecipes />
            </div>

            <div className="container">
                <AddRecipe />
            </div>

            <div className = "container">
                <DeleteRecipe />
            </div>

            <div className = "container">
                <UpdateRecipe />
            </div>
            <div className="mt-5 text-left">
                    <a href='../' className='btn-primary  p-2'> Go to Fridge </a>
            </div>
      </Fragment>
    );
};

export default Cookbook;