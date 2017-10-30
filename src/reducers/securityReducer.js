const initialState = {
    security: {},
    fetched: false,
    fetching: false,
    error: null
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_SECURITY_INFO':{
            return {...state, fetching:true}
        }
        case 'FETCH_SECURITY_FULFILLED':{
            return {...state, fetching:false, fetched:true, 
                security: action.payload}
        }
        case 'FETCH_SECURITY_REJECTED':{
            return {...state, fetching: false, error: action.payload}
        }
    }
    return state
}