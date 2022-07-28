import React, { Fragment, useState, useEffect } from "react";

const ListRecipes = () => {

    const [ rows, setRows ] = useState([]);
    const [ selected, setSelected ] = useState([]);

    const getRecipes = async () => {
        try {
            const response = await fetch("http://localhost:3001/recipes", {
                method : "GET"
            });
            const jsonData = await response.json();

            setRows(jsonData);
        } catch (err) {
            let message;
            if (err instanceof Error) message = err.message;
            else message = String(err);
            console.log(message);
        }
    }

    
    useEffect(() => {
        getRecipes()
    }, []);


    const onClick = async () => {
        let content = [];
        for (let row in selected) {
            if (selected[row]) {
                content.push(row);
            }
        }
        
        let body = { "id" : content }
        try {
            const response = await fetch("http://localhost:3001/recipes", {
                method: 'DELETE',
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })
            
        } catch (err) {
            console.error(err.message);
        }

        getRecipes()
    }

    function handleCheckBoxChange(event) {
        const id = event.target.id;
        const checked = event.target.checked;
        setSelected( {
            ...selected,
            [id]: checked
        });
    }

    return (
        <div>
            <Fragment>
                <h2 class="text-center">Recipes in Cookbook</h2>
                <table class="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th> </th>
                            <th> Recipe ID </th>
                            <th> Image Placeholder </th>
                            <th> Recipe Name </th>
                            <th> Recipe Steps Temporary </th>
                            <th> Ingredients Required Temporary </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr>
                                <td> <input type="checkbox" id= {row.id} onChange={handleCheckBoxChange}/> </td>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.steps}</td>
                                <td>{row.pic_url}</td>
                                <td></td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
                <button 
                  className="btn-danger"
                  onClick={onClick}>
                    Delete
                </button>
            </Fragment>
        </div>
    )
}

export default ListRecipes;