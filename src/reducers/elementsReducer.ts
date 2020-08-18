import {ADD_ELEMENT, DELETE_ELEMENT} from '../actions/types'

const initialState = {
    elementsList: []
}

const elementsReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case ADD_ELEMENT:
            return {
                ...state, elementsList: state.elementsList.concat({
                    id: (Math.random()).toString(),
                    name: action.data
                })
            }

        case DELETE_ELEMENT:
            return {
                ...state, elementsList: state.elementsList.filter((element) => {
                    return element.id != action.id
                })
            }

        default:
            return state
    }
}

export default elementsReducer

