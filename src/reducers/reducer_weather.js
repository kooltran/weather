import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions/';

const INITIAL_STATE = {
    weatherItem: [],
    isLoading: false,
    error: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherItem: [ action.payload.data, ...state.weatherItem ],
        isLoading: false,
        error: null
      };
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
}
