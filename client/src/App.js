import logo from './logo.svg';
import './App.css';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import Create from './components/Create';
import Edit from './components/Edit';
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>

      <AllPets path= "/"></AllPets>

      <Create path= "/pets/new"></Create>

      <PetDetails path= "/pets/:id"></PetDetails>

      <Edit path= "/pets/edit/:id"></Edit>






      </Router>
    </div>
  );
}

export default App;
