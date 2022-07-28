import React, { Fragment, useState } from "react";

//Components
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import DeleteRecipe from '../components/DeleteRecipe';
import UpdateRecipe from '../components/UpdateRecipe';


const Cookbook = () => {
    const [ id, setId ] = useState([]);

    return (
        <div>
            <Fragment>
                <div className="container">
                    <ListRecipes setId={setId}/>
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