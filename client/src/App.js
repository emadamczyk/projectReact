import React from "react";
import Incidents from "./pages/Incidents";
import Landing from "./pages/Landing";
import Create from "./pages/Create";

import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import './index';
//import 'typeface-montserrat';
import UserForm from "./components/UserForm";
<<<<<<< HEAD
=======

>>>>>>> 689cc7a9817b9235044d254e17fba920d423e592



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
