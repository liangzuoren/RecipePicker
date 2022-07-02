import React, { Fragment, useState } from "react";

const DeleteIngredient = () => {

    const [ingredient,setIngredient] = useState([]);

    const onSubmitForm = async () => {
        try{
            const request = await fetch(`http://localhost:3001/ingredients/${ingredient}`, {
                method:"DELETE"
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'> Delete Ingredient</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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