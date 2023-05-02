import { ActionTypes } from "../Constants/action-types";

export const addTask = newTask => {
    return {
        type: ActionTypes.ADD_TASK,
        payload: newTask
    }
}


export const setTask =() =>{
    return {
        type: ActionTypes.SET_TASK,
        payload: 'get',
    }
}


export const selectedTask =(Task) =>{
    return {
        type: ActionTypes.SELECTED_TASK,
        payload: Task,
    }
} 

export const removeTask =(Task) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_TASK,
        payload: Task,
    }
}

export const editTask =(Task) => {
    return {
        type: ActionTypes.EDIT_SELECTED_TASK,
        payload: Task,
    }
}

export const filterTask = (value) => {
    return {
        type: ActionTypes.FILTER_TASK,
        payload: value
    }
}

