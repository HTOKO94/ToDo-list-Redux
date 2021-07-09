import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      task: "Go to Egypt",
      isDone: false,
    },
    {
      id: uuidv4(),
      task: "Go to Zonzibar",
      isDone: false,
    },
  ],
};

export default function ideasReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
