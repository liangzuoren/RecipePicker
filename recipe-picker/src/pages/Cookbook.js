import React, { Fragment } from "react";

//Components
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import DeleteRecipe from '../components/DeleteRecipe';
import UpdateRecipe from '../components/UpdateRecipe';


const Cookbook = () => {
    return (
        <div>
            <Fragment>
                <div className="container">
                    <ListRecipes />
                </div>
            </Fragment>
            <Fragment>
                <div className="container">
                    <AddRecipe />
                </div>
            </Fragment>
            <Fragment>
                <div className = "container">
                    <DeleteRecipe />
                </div>
            </Fragment>
            <Fragment>
                <div className = "container">
                    <UpdateRecipe />
                </div>
            </Fragment>
            <div className="mt-5 text-left">
                    <a href='../' className='btn-primary  p-2'> Go to Fridge </a>
            </div>
      </div>
    );
};

export default Cookbook;