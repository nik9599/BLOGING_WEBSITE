import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <BrowserRouter>
    <SkeletonTheme baseColor="#ded9d9" highlightColor="#bdbbbb" >
      <div className="App"></div>
      </SkeletonTheme>
    </BrowserRouter>
  );
}

export default App;
