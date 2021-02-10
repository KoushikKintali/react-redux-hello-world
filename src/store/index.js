import { createStore } from "redux";
import reducers from '../reducers/index'

const initialState = {tech: "React "}

export const store = createStore(reducers, initialState);