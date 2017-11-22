import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions/index';

const INITIAL_STATE = {
    weatherItem: [],
    error: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherItem: [ action.payload.data, ...state.weatherItem ],
        error: null
      };
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        weatherItem: [ ...state.weatherItem ],
        error: action.payload
      };
    default:
      return state;
  }
}
