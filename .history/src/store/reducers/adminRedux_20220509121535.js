import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    gender: [],
    role: [],
    position: [],
    users: [],
    topDoctor: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            }    

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.gender = action.data1;
            state.isLoadingGender = false;
            return {
                ...state,
            } 

        case actionTypes.FETCH_GENDER_FAILED:
            state.gender = [];
            state.isLoadingGender = false;
            return {
                ...state,
            }
        
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.position = action.data1;
            return {
                ...state,
            } 
    
        case actionTypes.FETCH_POSITION_FAILED:
            state.position = [];
            return {
                ...state,
            }      
        
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.role = action.data1;
            return {
                ...state,
            } 
        
        case actionTypes.FETCH_ROLE_FAILED:
            state.role = [];
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;    
            return {
                ...state,
            }
            
        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];    
            return {
                ...state,
            } 

            case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
                state.topDoctor = action.dataDoctor;    
                return {
                    ...state,
                }    

                case actionTypes.FETCH_TOP_DOCTORS_FAILED:
                state.topDoctor = [];    
                return {
                    ...state,
                } 
        default:
            return state;
    }
}

export default adminReducer;