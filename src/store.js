import { createStore } from "redux";
import reducers from "./reducers";

const initialState = {tech: "React "}

export const store = createStore(reducers, initialState);