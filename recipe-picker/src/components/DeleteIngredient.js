import React, { Fragment, useState } from "react";

const DeleteIngredient = () => {

    const [ingredient,setIngredient] = useState([]);

    const onSubmitForm = async (e) => {
        try{
            const body = {'id':ingredient};
            const response = await fetch("http://localhost:3001/ingredients/", {
                method: "DELETE",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'> Delete Ingredient</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <label>
                    Ingredient ID
                </label>
                <input
                    type="text" 
                    className="form-control"
                    value={ingredient}
                    onChange={e => setIngredient(e.target.value)}>
                </input>
                <button className="btn btn-danger">
                    Delete Ingredient
                </button>
            </form>
        </Fragment>

    )
}

export default DeleteIngredient;