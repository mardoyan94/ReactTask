import {
    SET_LIST,
    SET_LIST_LOADING
} from "../constants/actionsTypes";

const mainData = {
    list: [],
    listLoading: true
}

const mainDataReducer = (state = mainData, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                list: action.value,
                listLoading: false
            }
        case SET_LIST_LOADING:
            return {
                ...state,
                listLoading: action.value,
            }
        default: break;
    }
    return state;
}
export default mainDataReducer