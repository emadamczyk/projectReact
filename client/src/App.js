import React from "react";
import Incidents from "./pages/Incidents";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import SearchResultContainer from "./components/SearchResultContainer";
import UserForm from "./components/UserForm";
function App() {

  return (

    <div>
      <Nav />
      <UserForm/>
      <SearchResultContainer />
      <br></br><br></br>
      <Container >
        <Incidents />
        {/* <UserForm/> */}
      </Container>
    </div>
    
  );
}

export default App;
