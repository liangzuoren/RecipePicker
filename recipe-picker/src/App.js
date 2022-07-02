import React, { useState, useEffect, Fragment} from 'react';
import DataGrid from 'react-data-grid';

//Components
import AddIngredient from "./components/AddIngredient";
import ListIngredients from './components/ListIngredients';

function App() {
  const [ingredients, setIngredients] = useState(false);
  useEffect(() => {
    getIngredient();
  }, []);

  const columns = [
    { key: 'name', name: 'Ingredient'},
    { key: 'amount', name: 'Amount'}
  ]

  const rows = [
    { id: 0, name: 'Potatos', amount: '200'},
    { id: 1, name: 'Tomatos', amount: '300'}
  ]

  function getIngredient() {
    fetch('http://localhost:3001/', {
      method: 'GET',
    })
    .then(result => {
      return result.text();
    })
    .then(data => {
      setIngredients(data);
    })
  }

  function createIngredient() {
    let name = prompt('Enter ingredient name');
    let amount = prompt('Enter ingredient amount');
    fetch('http://localhost:3001/ingredients',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,amount}),
    })
    .then(data => {
      alert(data);
      getIngredient();
    });
  }

  function deleteIngredient() {
    let id = prompt('Enter ingredient id');
    fetch(`http://localhost:3001/ingredients/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
      getIngredient();
    });
  }

  function getPool() {
    fetch('http://localhost:3001/pool',{
      method: 'GET',
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
  }

  return (
    <div>
      {ingredients ? ingredients : 'There are no ingredients in the fridge.'}
      <DataGrid columns={columns} rows={rows} />;
      <br />
      <button onClick={createIngredient}>Add Ingredient to Fridge</button>
      <br />
      <button onClick={deleteIngredient}>Delete Ingredient from Fridge</button>
      <br />
      <button onClick={getPool}>Pool Test</button>
      <br />
      <Fragment>
        <div className="container">
          <AddIngredient />
        </div>
      </Fragment>
      <Fragment>
        <div className="container">
          <ListIngredients />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
