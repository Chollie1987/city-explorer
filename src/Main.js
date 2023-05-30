import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Map from "./Map";
import axios from "axios";
import Weather from "./Weather";
import Movies from "./Movies";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            city: '',
            cityName: '',
            mapUrl: '',
            lat: '',
            lon: '',
            weatherData: [],
            movieData: []
        }
    }

    handleInput = (e) => {
        this.setState({city: e.target.value})
    }

    getWeather = async(lat, lon) => {
        // let url = `https://api.weatherbit.io/v2.0/forcast/daily?lat=35.7796&lon=-78.6382&key=${process.env.REACT_APP_WEATHERBIT_KEY}`
        try {
            let url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${lat}&lon=${lon}`
            const response = await axios.get(url)
            this.setState({weatherData:response.data},()=> console.log(this.state.weatherData))
        } catch (e) {
            this.setState({ hasError: true })
        
        }
    }

    handleExplore = async (e) => {
        e.preventDefault();
        let url = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
        try {
        const response = await axios.get(url)
        const location = response.data[0]
        const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${location.lat},${location.lon}&zoom=12`
        let movies = await this.getMovieData()
            this.setState({
                movieData: movies,
                displayInfo: true, hasError: false,
                cityName: response.data[0].display_name, mapUrl, lat:location.lat, lon:location.lon})
                this.getWeather(location.lat, location.lon)
        } catch (e){
            this.setState({hasError:true})
        }
        
    }

    getMovieData = async() => {
        let url = `${process.env.REACT_APP_SERVER_URL}/movies?city=${this.state.city}`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (e) {
            this.setState({
                alertError: true
            })
        }
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
       
        {this.state.displayInfo &&
            <>
            <h6>
            {`${this.state.cityName} Lat:${this.state.lat} Lon:${this.state.lon}`}
            </h6>
            <Map mapUrl={this.state.mapUrl}/>
            </>
        }
        {this.state.weatherData.length > 0 && <Weather weatherData={this.state.weatherData} />}
        {this.state.movieData.length > 0 && <Movies movieData= {this.state.movieData}/>}
        {this.state.hasError && <h6>could not complete request</h6>}
        </>
        )
    }
}

export default Main;