import './App.css';
import Menubar from './Pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      
      <Menubar />
      <Home />
    </div>
  );
}

export default App;
