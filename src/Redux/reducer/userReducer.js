import { SET_RESPONSE } from "../constant/userConstatnt"

const initialState = []

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESPONSE:
            return [...action.response]
        default:
            return state
    }

}

export default Reducer