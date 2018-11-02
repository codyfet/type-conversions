import React from "react";
import ReactDOM from "react-dom";
import {App} from './App';
import {confetti} from './Confetti';
import "./styles";

ReactDOM.render(<App />, document.getElementById("root"));
confetti();
