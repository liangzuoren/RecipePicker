const { Pool } = require('pg')
const pool = require('./config')

//Method to get ingredients from the ingredients database
async function getIngredients() {
    const text = 'SELECT * FROM ingredients ORDER BY id ASC';
    const result = await pool.query(text);
    return result;
}

//Method to create an ingredient in the ingredients database
async function createIngredient(body) {
    const { name, amount } = body;
    const text = `INSERT INTO ingredients (name, amount) VALUES ( '${name}', ${amount} ) RETURNING *`;
    const result = await pool.query(text);
    return result;
}

//Method to delete an ingredient from the ingredients database by ID
async function deleteIngredient(body) {
    const {id} = body;
    const numId = parseInt(id);
    const text = `DELETE FROM ingredients WHERE id=${numId}`;
    const result = await pool.query(text);
    return result;
}

//Method to update an ingredient from the ingredients database by ID
async function updateIngredient(body) {
    const {id, name, amount} = body;
    const text = `UPDATE ingredients 
                SET name = '${name}', amount = ${amount}
                WHERE id = ${id}`;
    const result = await pool.query(text);
    return result;
}

//Method to get all recipes from the recipes database, ordered by increasing ID
async function getRecipes() {
    const text = 'SELECT * FROM recipes ORDER BY id ASC';
    const result = await pool.query(text);
    return result;
}

//Method to get create a new recipe in the recipes database
async function createRecipe(body) {
    const { name, steps, pic_url } = body;
    const text = `INSERT INTO recipes ( name, steps, pic_url) VALUES ( '${name}', '${steps}', '${pic_url}') RETURNING *`;
    const result = await pool.query(text);
    return result;
}

//Method to delete a recipe in the recipes database by ID
async function deleteRecipe(body) {
    const { id } = body;
    var numId = id.map(function(item) {
        return parseInt(item,10);
    });
    const text = `DELETE FROM recipes WHERE ID IN (${numId.join(',')})`;
    const result = pool.query(text);
    return result;
}

//Method to update a recipe in the recipes database by ID
async function updateRecipe(body){
    const { id, name, steps, pic_url } = body;
    const text = `UPDATE recipes
                SET name = '${name}', steps = '${steps}', pic_url = '${pic_url}'
                WHERE id = ${id}`;
    const result = pool.query(text);
    return result
}

async function randomRecipe(){
    const text = 'SELECT * FROM recipes ORDER BY RANDOM() LIMIT 1'
    const result = pool.query(text);
    return result;
}

module.exports = {
    getIngredients,
    createIngredient,
    deleteIngredient,
    updateIngredient,
    getRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    randomRecipe
}