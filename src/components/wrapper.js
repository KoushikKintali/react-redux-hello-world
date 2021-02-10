import { HelloWorld } from "./hello-world";
import React from 'react';
import ButtonGroup from "./button-group";
import { store } from "../store";

export class Wrapper extends React.Component {

    render(){
        return (
            <>
                <HelloWorld tech = {store.getState().tech}></HelloWorld>
                <ButtonGroup technologies={["React", "Elm", "React-redux"]} />
            </>
        )
    }
}