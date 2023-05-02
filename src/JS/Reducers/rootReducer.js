import { ActionTypes } from "../Constants/action-types";
const initialState = {
    errorMessage:"",
    loading: false,
    tasks: [
        {
            id: 1,
            description: "Do my checkpoint",
             isDone: true
        },
        {
            id: 2,
            
            description: "Read book",
             isDone: false
        },
        {
            id: 3,
            
            description: "footing",
             isDone: true
        },
        {
            id: 4,
            
            description: "shooping",
             isDone: false
        }
    ],
    filterdtask:[],
    filtreddata:false
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TASK:
            return {
                ...state,
                tasks: action.payload,
                loading:false
            }
        case ActionTypes.ADD_TASK:
           
            return {
                ...state,
                loading:false,
                
                tasks: [...state.tasks, action.payload]
            }
        case ActionTypes.EDIT_SELECTED_TASK:

            const { id, description } = action.payload;
            const updatedItems = state.tasks.map(item =>
                item.id === id ? { ...item, description: description } : item
            );
            return { ...state, tasks: updatedItems };


        case ActionTypes.REMOVE_SELECTED_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task)=> task.id !== action.payload.id),
                loading:false
            }
        case ActionTypes.FILTER_TASK:
        

        let filterlist = action.payload.value === "true" ? state.tasks.filter((task)=> task.isDone === true  ): state.tasks.filter((task)=> task.isDone === false  )

        return {
            ...state,
            filtreddata:action.payload.filter,
            filterdtask: action.payload.filter ? filterlist : [],
        }


        default:
            return state
    }
}

export default rootReducer