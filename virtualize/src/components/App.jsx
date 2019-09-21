import React from "react";
import ListContainer from "./ListContainer";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
  console.log("actualDuration", Math.round(actualDuration));
}

export default function App() {
  return (
    <div>
      <h1>Runtime Demo</h1>
      <React.Profiler id="PreviewPane" onRender={onRenderCallback}>
        <ListContainer />
      </React.Profiler>
    </div>
  );
}
