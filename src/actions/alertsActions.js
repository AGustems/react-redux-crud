import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types/index'


// Action to show/hide the alert
export function showAlertAction (alert) {
    return async (dispatch) => {
        dispatch( showAlert (alert))
    }
}

// Functions to dispatch
const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})