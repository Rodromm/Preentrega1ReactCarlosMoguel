
import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={"¿Cual es el auto de tus sueños?"}/>
    </div>
  );
}

export default App;
