// import './App.css';
// import Menubar from './Pages/Menu';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from "./Pages/Home";

// function App() {
//   return (
//     <div className="App">
      
//       <Menubar />
//       <Home />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Menubar from './Pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Home />
      </Router>
    </div>
  );
}

export default App;

