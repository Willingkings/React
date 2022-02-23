import React from "react";
import Jsx from "./jsx/Jsx";
import { ClassComponent, FunctionComponent, HomePage } from "./components";
import SetStatePage from "./setState/SetStatePage";
import ReduxPage from "./redux/ReduxPage";

export default function App() {
  return (
    /* // jsx
    <div><Jsx /></div> */

    /* // components
    <div>
      <ClassComponent />
      <FunctionComponent />
      <HomePage />
    </div> */

    /* // setState
    <div>
      <SetStatePage />
    </div> */

    // redux
    <div>
      <ReduxPage />
    </div>

  );
}
