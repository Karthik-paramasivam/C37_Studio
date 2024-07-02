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

function App() {
  return (
    <div className="App">
         <Router>
      <div>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

