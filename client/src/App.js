import React from "react";
import Incidents from "./pages/Incidents";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import SearchResultContainer from "./components/SearchResultContainer";
function App() {

  return (
    <div>
      <Nav />
      <SearchResultContainer />
      <br></br><br></br>
      <Container >
        <Incidents />
      
      </Container>
    </div>
    
  );
}

export default App;
