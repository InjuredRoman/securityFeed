import axios from "axios";

export function fetchSecurityInfo(query){
    switch(query.type){
        case "hostnameSearch":{
            var address = "https://api.cymon.io/v2/ioc/search/hostname/" + query.hostname;
            break;
        }
        case "ipSearch":{
            var address = "https://api.cymon.io/v2/ioc/search/ip/" + query.ip;
            break;
        }
    }   
    return function(dispatch){
        axios.get(address)
            .then((response) => {
                dispatch({
                    type: 'FETCH_SECURITY_FULFILLED',
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_SECURITY_REJECTED',
                    payload: err.data
                })
            })
    }
}