import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Map from "./Map";
import axios from "axios";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            city: '',
            cityName: ''
        }
    }

    handleInput = (e) => {
        this.setState({city: e.target.value})
    }

    handleExplore = async (e) => {
        e.preventDefault();
        let url = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
        console.log(url);
        const response = await axios.get(url)
        this.setState({displayInfo: true,
        cityName: response.data[0].display_name})
    }

    render() {
        return (
        <>
       
        <Form onSubmit={this.handleExplore}>
            <Form.Group>
                <Form.Label>Enter City</Form.Label>
                <Form.Control type="text" onChange={this.handleInput} />
            </Form.Group>
            <Button type="submit">Check it out!</Button>
        </Form>
        <Map/>
       
        {this.state.displayInfo &&
            <>
                 <p>{this.state.cityName}</p>
            </>
        }
        </>
        )
    }
}

export default Main;