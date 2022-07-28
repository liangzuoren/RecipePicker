import React, { Fragment, useState } from "react";

const AddRecipe = () => {

    const [ recipe, setRecipe ] = useState({
        name:"",
        steps:"",
        pic_url:""
    });

    const onSubmitChange = async (e) => {
        try {
            const body = {
                "name" : recipe.name,
                "steps" : recipe.steps,
                "pic_url" : recipe.pic_url
            };
            const response = await fetch("http://localhost:3001/recipes", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })
            
        } catch (err) {
            console.log(err.message)
        }
    };

    function handleChange(event) {
        const value = event.target.value;
        setRecipe({
            ...recipe,
            [event.target.name]:value
        })
    };

    return (
        <Fragment>
            <form className = "mt-5" onSubmit = {onSubmitChange}>
                <h1 className = 'text-center'> Add a Recipe </h1>
                <label> Recipe Name </label>
                <input
                    className = "form-control"
                    name = "name"
                    type = "text"
                    value = {recipe.name}
                    onChange = {handleChange}>
                    </input>
                <label> Recipe Steps </label>
                <input
                    className = "form-control"
                    name = "steps"
                    type = "text"
                    value = {recipe.steps}
                    onChange = {handleChange}>
                </input>
                <button className="btn-primary">
                    Add another step
                </button>
                <hr />
                <label> Recipe Picture </label>
                <input
                    className = "form-control"
                    name = "pic_url"
                    type = "text"
                    value = {recipe.pic_url}
                    onChange = {handleChange}>
                </input>
                <button className = "btn-success">
                    Add Recipe
                </button>
            </form>
        </Fragment>
    );
}

export default AddRecipe