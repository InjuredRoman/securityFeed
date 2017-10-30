import axios from "axios";

export function fetchLocationInfo(l){
    return function(dispatch){
        axios.get("freegeoip.net/json/github.com")
            .then((response) => {
                dispatch({
                    type: 'FETCH_LOCATION_FINISHED',
                    payload: l
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_LOCATION_FINISHED',
                    payload: l
                })
            })
    }
}