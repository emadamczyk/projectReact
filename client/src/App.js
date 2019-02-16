import React from "react";
import Incidents from "./pages/Incidents";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'typeface-roboto';



function App() {

  return (
    <Router>
      <div>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Incidents} />
      </div>
    </Router>
    
  );
}

export default App;
