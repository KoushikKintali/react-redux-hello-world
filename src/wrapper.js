import { HelloWorld } from "./hello-world";
import React from 'react';
import { store } from "./store";

export class Wrapper extends React.Component {

    render(){
        return (
            <HelloWorld tech = {store.getState().tech}></HelloWorld>
        )
    }
}