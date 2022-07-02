import React, { Fragment, useState, useEffect } from "react";

const ListIngredients = () => {

    const [ingredients, setIngredients] = useState([]);

    const getIngredients = async() => {
        try{
            const response = await fetch("http://localhost:3001/", {
                method:"GET"
            });
            const jsonData = await response.json();

            setIngredients(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getIngredients();
    }, []);

    return (
        <Fragment>
            <h2 class="text-center">Current Ingredients In Fridge</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ingredient</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(ingredient => (
                        <tr>
                            <td>{ingredient.id}</td>
                            <td>{ingredient.name}</td>
                            <td>{ingredient.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListIngredients;
