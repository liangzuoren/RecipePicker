import React, { Fragment, useState } from "react";

const DeleteRecipe = () => {

    const [ recipe, setRecipe ] = useState([]);

    const onSubmitForm = async (e) => {
        try {
            const body = { "id" : [recipe] };
            const response = await fetch("http://localhost:3001/recipes/", {
                method : "DELETE",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
            <form className = "mt-5" onSubmit = {onSubmitForm}>
                <h1 className = "text-center"> Delete a Recipe </h1>
                <label> Recipe ID </label>
                <input
                    className = "form-control"
                    name = "id"
                    type = "text"
                    value = {recipe}
                    onChange = {e => setRecipe(e.target.value)}>
                </input>
                <button className = "btn-danger">
                    Delete Recipe
                </button>
            </form>
        </Fragment>
    )
}

export default DeleteRecipe;