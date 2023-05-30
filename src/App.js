import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Movies from "./Movies";
import { Container } from "react-bootstrap";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {



    }
  }
  render() {
    return (
      <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
      </>
    )
  }
}

export default App;