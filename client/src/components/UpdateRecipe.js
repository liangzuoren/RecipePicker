import React, { Fragment, useState } from "react";

const UpdateRecipe = () => {

    const [ recipe, setRecipe ] = useState({
        id : "",
        name : "",
        steps : "",
        pic_url : ""
    });

    const onSubmitForm = async (e) => {
        try {
            const body = {
                "id" : recipe.id,
                "name" : recipe.name,
                "steps" : recipe.steps,
                "pic_url" : recipe.pic_url
            };
            
            const response = await fetch("http://localhost:3001/recipes/", {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });

        } catch (err) {
            console.log(err.message);
        }
    };

    function handleChange(event) {
        const value = event.target.value;
        setRecipe({
            ...recipe,
            [event.target.name] : value
        });
    };

    return (
        <Fragment>
            <form className = 'mt-5' onSubmit = {onSubmitForm}>
                <h1 className = 'mt-5 text-centered'> Update a Recipe</h1>
                <label> Recipe ID </label>
                <input
                    className = 'form-control'
                    name = 'id'
                    type = 'text'
                    value = {recipe.id}
                    onChange = {handleChange}
                    >
                </input>
                <label> Recipe Name </label>
                <input
                    className = 'form-control'
                    name = 'name'
                    type = 'text'
                    value = {recipe.name}
                    onChange = {handleChange}>
                </input>
                <label> Recipe Steps </label>
                <input
                    className = 'form-control'
                    name = 'steps'
                    type = 'text'
                    value = {recipe.steps}
                    onChange = {handleChange}>
                </input>
                <label> Recipe Picture </label>
                <input
                    className = 'form-control'
                    name = 'pic_url'
                    type = 'text'
                    value = {recipe.pic_url}
                    onChange = {handleChange}>
                </input>
                <button className = 'btn-warning'> Update Recipe </button>
            </form>
        </Fragment>
    );
}

export default UpdateRecipe;
