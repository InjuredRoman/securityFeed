const initialState = {
    location: {},
    fetching: false,
    fetched: false,
    error: null
}


export default function reducer(state = initialState, action){
    console.log("reducing!");
    switch(action.type){
        case 'FETCH_LOCATION':{
            return {...state, fetching:true}
        }
        case 'FETCH_LOCATION_FINISHED':{
            return {...state, fetching:false, fetched:true, 
                location: action.payload}
        }
        case 'FETCH_LOCATION_REJECTED':{
            return {...state, fetching: false, error: action.payload}
        }
    }
    return state
}