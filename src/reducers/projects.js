import { SHOW_PROJECTS } from '../request'

const initialState = {
    list: []
}

export function showProjects(state = initialState, action) {   
    switch (action.type) {
        case SHOW_PROJECTS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
}
