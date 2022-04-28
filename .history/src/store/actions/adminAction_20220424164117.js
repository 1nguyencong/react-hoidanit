import { getAllCodeService } from "../../services/userService";
import actionTypes from './actionTypes';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GRNDER_START
// })

export const fetchGenderStart = () => {
    return (dispatch, getState) => {
        try {
            let res =  getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                fetchGenderSuccess(res.data);
            } else {
                fetchGenderFailed()
            }
        } catch (e) {
            fetchGenderFailed();
            console.log('fetchGenderStart error', e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GRNDER_SUCCESS
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GRNDER_FAILED
})
