import React from "react";
import { store } from "../store";


const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchButtonAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

function dispatchButtonAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

export function setTechnology (text) {
    return {
       type: "SET_TECHNOLOGY",
       tech: text
     }
  }


export default ButtonGroup;