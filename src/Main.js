import React from "react";
import { Form } from "react-bootstrap";

class Main extends React.Component {
    render() {
        return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Enter City</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
        </Form>
        </>
        )
    }
}

export default Main;