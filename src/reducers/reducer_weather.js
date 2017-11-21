import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions/index';

const INITIAL_STATE = {
    weatherItem: [],
    error: null
}

export default function(state = INITIAL_STATE, action) {
  // switch (action.type) {
  //   case FETCH_WEATHER:
  //     return [ action.payload.data, ...state ];
  // }
  // return state;
  switch (action.type) {
    case FETCH_WEATHER:
      console.log(action, 'init');
      return {
        ...state,
        weatherItem: [],
        error: null
      };
    case FETCH_WEATHER_SUCCESS:
      console.log(action, 'success');
      return {
        ...state,
        weatherItem: [ action.payload.data, ...state.weatherItem ],
        error: null
      };
    case FETCH_WEATHER_FAIL:
      console.log(action, 'fail');
      let errorMessg = action.payload || {message: action.payload.message}
      return {
        ...state,
        weatherItem: [ ...state.weatherItem ],
        error: errorMessg
      };
    default:
      return state;
  }
}
