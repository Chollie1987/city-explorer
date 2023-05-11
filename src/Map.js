import React from "react";
// import weatherData from ".data/weather.json";



class Map extends React.Component {
    render() {
        return (
            // {weatherData.data.map}
            <img src={this.props.mapUrl} alt="city map"/>
        )
    }
}

export default Map;