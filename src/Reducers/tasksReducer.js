import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../Constants/action-types";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      description: "Visit Pyramids",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Swim in the Red Sea",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Go to Charm",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Go To Elskandareya",
      isDone: false,
    },
  ],
};

function tasksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  
    case ADD_TASK: 
      return {
        tasks: [
          ...state.tasks,
          { 
            id: uuidv4(), 
            description: payload.description, 
            isDone: false, 
          },
        ],
      
    };

    case COMPLETE_TASK: 
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      
    };

    case EDIT_TASK: 
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, description: payload.newDescription } : task
        ),
      
    };
    default:
      return state;
  }
}

export default tasksReducer;
