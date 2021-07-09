import { COMPLETE_TASK } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";
import { ADD_TASK } from "../Constants/action-types";

export const completeTask = (payload) => {
    return {
        type: COMPLETE_TASK,
        payload: payload,
    };
};
export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
};
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
