import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    gender: [],
    role: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            console.log('check start', action)
            return {
                ...copyState,
            }    

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.gender = action.data1;
            state.isLoadingGender = false;

            console.log('check success', action)
            return {
                ...state,
            } 

        case actionTypes.FETCH_GENDER_FAILED:
            state.gender = [];
            state.isLoadingGender = false;
            console.log('check failed', action)

            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;