const express = require('express')
const app = express()
const port = 3001

const recipe_picker = require('./recipe_picker')

app.use(express.json())
app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async (req,res) => {
  try{
    const result = await recipe_picker.getIngredients();
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.post('/ingredients', (req,res) => {
  recipe_picker.createIngredient(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/ingredients/:id', (req,res) => { 
  recipe_picker.deleteIngredient(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('ingredients/:id', (req,res) => {
    recipe_picker.updateIngredient(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error =>{
        res.status(500).send(error);
    })
})


app.listen(port, () => {
  console.log(`Recipe Picker app listening on port ${port}`);
})