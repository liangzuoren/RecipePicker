import React, { Fragment, useState } from "react";

const UpdateIngredient = () => {

    const [ ingredient, setIngredient ] = useState({
        id:"",
        name:"",
        amount:""
    });

    function handleChange(event) {
        const value = event.target.value;
        setIngredient({
            ...ingredient,
            [event.target.name]: value
        });
    }

    const onSubmitForm = async (e) => {
        try {
            const body = {  "id": ingredient.id,
                            "name": ingredient.name,
                            "amount": ingredient.amount};
            const response = await fetch("http://localhost:3001/ingredients", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className = "text-center mt-5"> Update Ingredient </h1>
            <form className = "mt-5" onSubmit={onSubmitForm}>
                <label>
                    Ingredient ID:
                </label>
                <input 
                    type="text"
                    name="id"
                    className="form-control"
                    value={ingredient.id}
                    onChange={handleChange}>
                </input>
                <label>
                    Ingredient Name:
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={ingredient.name}
                    onChange={handleChange}>
                </input>
                <label>
                    Ingredient Amount:
                </label>
                <input
                    type="text"
                    name="amount"
                    className="form-control"
                    value={ingredient.amount}
                    onChange={handleChange}>
                </input>
                <button className="btn-warning">Update Ingredient</button>
            </form>
        </Fragment>
    )
}

export default UpdateIngredient;