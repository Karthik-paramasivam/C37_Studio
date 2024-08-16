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
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Wedding from './Pages/Wedding';
import Family from './Pages/Family';
import Maternity from './Pages/Maternity';

function App() {
  return (
    <div className="App">
         <Router>
      <div>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery/wedding" element={<Wedding />} />
          <Route path="/gallery/family&baby" element={<Family />} />
          <Route path="/gallery/maternity" element={<Maternity />} />


        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

