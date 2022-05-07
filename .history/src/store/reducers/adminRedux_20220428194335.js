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
            let copyState1 = { ...state };
            copyState.isLoadingGender = true;
            console.log('check start', action)
            return {
                ...copyState1,
            }    

        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState2 = { ...state };
            copyState.gender = action.data1;
            copyState.isLoadingGender = false;

            console.log('check success', copyState)
            return {
                ...copyState2,
            } 

        case actionTypes.FETCH_GENDER_FAILED:
            let copyState = { ...state };
            copyState.gender = [];
            copyState.isLoadingGender = false;
            console.log('check failed', action)

            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;