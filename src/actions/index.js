import axios from 'axios';

const API_KEY = 'dd076be7448f7fba850550eb269bec06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherSuccess(response) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: response
  }
}

export function fetchWeatherError(error) {
  return {
    type: FETCH_WEATHER_FAIL,
    payload: error
  }
}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return dispatch => {
    return request.then(response => { dispatch(fetchWeatherSuccess(response)); })
                  .catch(error => { dispatch(fetchWeatherError(error)); });
  }

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
