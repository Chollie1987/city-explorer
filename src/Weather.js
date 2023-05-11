import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>{this.props.weatherData.map(day => <ul key={day.date}>{day.date}:{day.description}</ul>)}</div>
    )
  }
}
