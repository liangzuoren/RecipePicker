import React, { Fragment, useState, useEffect } from "react";

const ListIngredients = () => {

    const [ingredients, setIngredients] = useState([]);

    const getIngredients = async() => {
        try{
            const response = await fetch("http://localhost:3001/pool");
            const jsonData = await response.json();

            setIngredients(jsonData);
        } catch (err) {
            console.log(err.message);
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
                        <th>Ingredient</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                            <td>Apple</td>
                            <td>1</td>
                        </tr>
                    */}
                    {ingredients.map(ingredient => (
                        <tr>
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
