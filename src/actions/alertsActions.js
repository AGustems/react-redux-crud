import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types/index'


// Action to show the alert
export function showAlertAction (alert) {
    return async (dispatch) => {
        dispatch( showAlert (alert))
    }
}

// Action to hide the alert
export function hideAlertAction () {
    return async (dispatch) => {
        dispatch(hideAlert())
    }
}

// Functions to dispatch
const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

const hideAlert = () => ({
    type: HIDE_ALERT
})