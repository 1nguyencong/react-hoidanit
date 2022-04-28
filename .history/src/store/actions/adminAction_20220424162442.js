import { getAllCodeService } from "../../services/userService";
import actionTypes from './actionTypes';

export const fetchGenderStart = () => ({
    type: actionTypes.FETCH_GRNDER_START
})

export const fetchGenderSuccess = () => ({
    type: actionTypes.FETCH_GRNDER_SUCCESS
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GRNDER_FAILED
})
