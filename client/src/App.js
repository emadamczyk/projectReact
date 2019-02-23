import React from "react";
import Incidents from "./pages/Incidents";
import Landing from "./pages/Landing";
import Create from "./pages/Create";

import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import './index';
//import 'typeface-montserrat';
import UserForm from "./components/UserForm";



function App() {

  return (
    <Router>
      <div>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Incidents} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/login" component={UserForm} />
      </div>
    </Router>
    
  );
}

export default App;
