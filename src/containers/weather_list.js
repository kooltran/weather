import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderLoadingSpinner() {
    return (
      <div>
        <img src="../assets/images/loading-spinner" />
      </div>
    )
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={pressures} color="gray" units="hPa"/></td>
        <td><Chart data={humidity} color="green" units="%"/></td>
      </tr>
    );
  }

  render() {
    const { isLoading, weatherItem, error } = this.props.weather;
    return (
      <div>
        { isLoading ? this.renderLoadingSpinner() : '' }
        <table className="table table-hover forecast-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {weatherItem.map(this.renderWeather)}
          </tbody>
        </table>
        { error == null ? '' : alert(error) }
      </div>
    )
  }
}

function mapStateToProp(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProp)(WeatherList);
