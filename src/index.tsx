import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/index"
import Root from "./root";

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
