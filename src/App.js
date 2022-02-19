import React from "react";
import Jsx from "./jsx/Jsx";
import { ClassComponent, FunctionComponent } from "./components";

export default function App() {
  return (
    /* // jsx
    <div><Jsx /></div> */

    // components
    <div>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}
