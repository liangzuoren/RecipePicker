const express = require('express')
const app = express()
const port = 3001

const recipe_picker = require('./recipe_picker')

//Use JSON to parse requests
app.use(express.json())
app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers');
  next();
});

//Endpoint to send a HTTP GET request down to the ingredients database
app.get('/', async (req,res) => {
  try{
    const result = await recipe_picker.getIngredients();
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Endpoint to send a HTTP GET request to get a random recipe from the recipes database
app.get('/random/', async (req,res) => {
  try {
    const result = await recipe_picker.randomRecipe();
    res.json(result.rows);
  } catch (err) {
    cconsole.error(err.message);
  }
})

//Endpoint to send a HTTP POST request to the ingredients database
app.post('/ingredients/', async (req,res) => {
  try {
    const result = await recipe_picker.createIngredient(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP DELETE request down to the ingredients database
app.delete('/ingredients/', async (req,res) => {
  try {
    const result = await recipe_picker.deleteIngredient(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP PUT request down to the ingredients database
app.put('/ingredients/', async (req,res) => {
  try {
    const result = await recipe_picker.updateIngredient(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP GET request to the recipes database
app.get('/recipes/', async(req,res) => {
  try {
    const result = await recipe_picker.getRecipes();
    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP POST request to the recipes database
app.post('/recipes/', async(req,res) => {
  try {
    const result = await recipe_picker.createRecipe(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP DELETE request to the recipes database
app.delete('/recipes/', async (req,res) => {
  try {
    const result = await recipe_picker.deleteRecipe(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

//Endpoint to send a HTTP PUT request to the recipes database
app.put('/recipes/', async (req,res) => {
  try {
    const result = await recipe_picker.updateRecipe(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
})

app.listen(port, () => {
  console.log(`Recipe Picker app listening on port ${port}`);
})