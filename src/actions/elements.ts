import {ADD_ELEMENT, DELETE_ELEMENT} from './types'

export const addElement = (name: string) => {
    return {
        type: ADD_ELEMENT,  
        data: name
    }
}

export const deleteElement = (id: string) => {
    return {
        type: DELETE_ELEMENT,
        id: id
    }
}