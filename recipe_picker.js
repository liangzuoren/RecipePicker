const { Pool } = require('pg')
const pool = require('./config')

//Method to get ingredients from the ingredients database
const getIngredients = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT name,amount FROM ingredients ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createIngredient = (body) => {
    return new Promise(function(resolve, reject){
        const { name, amount } = body
        pool.query('INSERT INTO ingredients (name, amount) VALUES ($1, $2) RETURNING *', [name,amount], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new ingredient has been added to the fridge: ${results.rows[0]}`);
        })
    })
}

const deleteIngredient = (reqId) => {
    return new Promise(function(resolve, reject){
        const id = parseInt(reqId)
        pool.query('DELETE from ingredients WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Ingredient deleted with ID: ${id}`);
        })
    })
}

const updateIngredient = (body) => {
    return new Promise(function(resolve, reject){
        const { id, name, amount } = body
        const intId = parseInt(id)
        pool.query('UPDATE ingredients SET name = $1, amount = $2 WHERE id = $3', [name,amount,intId], (error,results) => {
            if (error) {
                reject(error)
            }
            resolve(`Ingredient ${id} updated to name: ${name} and amount: ${amount}`);
        })

    })
}

async function poolDemo() {
    const text = 'SELECT * FROM ingredients';
    const result = await pool.query(text);
    return result
    //const output =  pool.query(text); 
    //return JSON.stringify(output.rows[0], null, " ");
}

module.exports = {
    getIngredients,
    createIngredient,
    deleteIngredient,
    poolDemo
}