import React, { Fragment } from "react";

//Components
import AddIngredient from "../components/AddIngredient";
import ListIngredients from '../components/ListIngredients';
import DeleteIngredient from '../components/DeleteIngredient';
import UpdateIngredient from '../components/UpdateIngredient';

const Home = () => {
    return (
        <div>
            <Fragment>
                <div className="container">
                <ListIngredients />
                </div>
            </Fragment>
            <Fragment>
                <div className="container">
                <AddIngredient />
                </div>
            </Fragment>
            <Fragment>
                <div className="container">
                <DeleteIngredient />
                </div>
            </Fragment>
            <Fragment>
                <div className="container">
                <UpdateIngredient />
                </div>
            </Fragment>
            <div className="mt-5 text-right">
                <a href='./Cookbook' className='btn-primary  p-2'> Go to Cookbook </a>
            </div>
        </div>
    );
}

export default Home;