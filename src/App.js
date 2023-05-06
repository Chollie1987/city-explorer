import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Button } from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {



    }
  }
  render() {
    return (
      <>
        <Header />
        <Main
      // <Button variant="primary" onClick={this.state}>Close</Button>
        <Footer />
      </>
    )
  }
}

export default App;