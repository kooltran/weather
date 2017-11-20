import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions/index';

const INITIAL_STATE = {
  weatherList: {
    weatherItem: [],
    error: null
  }
}

export default function(state = INITIAL_STATE, action) {
  // switch (action.type) {
  //   case FETCH_WEATHER:
  //     return [ action.payload.data, ...state ];
  // }
  // return state;
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      console.log(action, 'success');
      return {
        ...state,
        weatherList: {
          weatherItem: [ action.payload.list ],
          error: null
        }
      };
    case FETCH_WEATHER_FAIL:
      let errorMessg = action.payload || {message: action.payload.message}
      console.log(action, 'fail');
      return {
        ...state,
        weatherList: {
          weatherItem: [],
          error: errorMessg
        }
      };
    case FETCH_WEATHER:
      console.log(action, 'init');
      return {
        ...state,
        weatherList: {
          weatherItem: [],
          error: null
        }
      };
    default:
      return state;
  }
}
