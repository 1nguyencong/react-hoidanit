import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    role: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyStates = { ...state };
            copyState.isLoadingGender = true;
            console.log('check start', action)
            return {
                ...copyStates,
            }    

        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.gender = action.data1;
            console.log('check success', copyState)
            return {
                ...copyState,
            } 

        case actionTypes.FETCH_GENDER_FAILED:
            console.log('check failed', action)
            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;