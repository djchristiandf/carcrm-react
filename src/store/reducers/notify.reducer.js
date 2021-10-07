import { actionTypes } from "../actions/notify.actions"

const initialState = {
    open: true,
    horizontal: 'center',
    vertical: 'top',
    class: 'success',
    time: 300,
    msg: 'Dados Atualizados'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}
