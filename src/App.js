import "./App.css";
import Call from "./Components/Call";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
            <Route path="/" element={<Call/>}/>
          </Routes>
    </div>
  );
}

export default App;
