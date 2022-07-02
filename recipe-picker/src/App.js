import React, { Fragment } from 'react';


//Components
import AddIngredient from "./components/AddIngredient";
import ListIngredients from './components/ListIngredients';
import DeleteIngredient from './components/DeleteIngredient';

function App() {

  return (
    <div>
      <Fragment>
        <div className="container">
          <ListIngredients />
        </div>
      </Fragment>
      <Fragment>
        <div className="container">
          <AddIngredient />
        </div>
      </Fragment>
      <Fragment>
        <div className="container">
          <DeleteIngredient />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
