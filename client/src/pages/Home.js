import React, { Fragment, useState } from "react";

//Components
import AddIngredient from "../components/AddIngredient";
import ListIngredients from '../components/ListIngredients';
import DeleteIngredient from '../components/DeleteIngredient';
import UpdateIngredient from '../components/UpdateIngredient';

const Home = () => {
    const [ recipe, setRecipe ] = useState([]);
    const [ clicked, setClicked ] = useState(false);

    const onClick = async () => {
        try {
            const response = await fetch("http://localhost:3001/random/", {
                method: 'GET'
            });
            const jsonData = await response.json();
            setRecipe(jsonData[0]);

        } catch (err) {
            console.error(err.message);
        }

        setClicked(true);
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ListIngredients />
                        <hr className="mt-5"/>
                        <AddIngredient />
                        <hr className="mt-5"/>
                        <DeleteIngredient />
                        <hr className="mt-5"/>
                        <UpdateIngredient />
                    </div>
                    <div className="col-lg-4 text-center">
                        <h1> {recipe.name}</h1>
                        <div className="container">
                            {clicked && <img src={recipe.pic_url} alt="Pick a Recipe" />}
                        </div>
                        <p> {recipe.steps} </p>
                        <hr className="mt-5" />
                        <button className="btn-primary" onClick={onClick}> Random Recipe</button>
                        <button className="btn-success"> Select </button>
                    </div>
                </div>
                <div className="mt-5 text-right">
                        <a href='./Cookbook' className='btn-primary  p-2'> Go to Cookbook </a>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;