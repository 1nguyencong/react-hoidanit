import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUser, deleteUserSeverice, editUserSeverice } from "../../services/userService";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
// frtchGender
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

// fetchPosition
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");   
            console.log('check result', res) 
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('fetchPositionFailed error', e)
        }
    }

}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data1: positionData
})  

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


// fetchRole

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");   
            console.log('check result', res) 
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('fetchRoleFailed error', e)
        }
    }

}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data1: roleData
})  

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


// CREATE_USER_SUCCESS

export const createNewUser = (data) =>{
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data); ;   
            if (res && res.errCode === 0) {
                toast.success("Create a new user succ");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed())
            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


// DELETE USER 
export const deleteNewUser = (userId) =>{
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserSeverice(userId); ;   
            if (res && res.errCode === 0) {
                toast.success("Delete user succ");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            toast.error("Delete user failed");
            dispatch(saveUserFailed())
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})


// DELETE USER 
export const editUser = (data) =>{
    return async (dispatch, getState) => {
        try {
            let res = await editUserSeverice(data); ;   
            if (res && res.errCode === 0) {
                toast.success("Update user succ");  
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart())
            } else {
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Update user failed");
            dispatch(editUserFailed())
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})






//ALL USER FETCH

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser("ALL");   
            console.log('check result', res) 
            if (res && res.errCode === 0) {
                toast.success("fetch user succ");
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUserFailed())
            }
        } catch (e) {
            toast.error("fetch user failed");
            dispatch(fetchAllUserFailed())
            console.log('fetchAllUserFailed error', e)
        }
    }

}

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUserFailed = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
    users: data
})