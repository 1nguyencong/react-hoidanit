import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    roles: [],
    position: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GRNDER_START:
            return {
                ...state,
            }   

        case actionTypes.FETCH_GRNDER_SUCCESS:
            return {
                ...state,
            } 

        case actionTypes.FETCH_GRNDER_FAILED:
            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;