import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })

            let res = await getAllCodeService("GENDER");   
            console.log('check result', res) 
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error', e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data1: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSTION_SUCCESS,
    data1: positionData
})  

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSTION_FAILED
})

export const fetchRoleSuccess = (positionData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data1: positionData
})  

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

