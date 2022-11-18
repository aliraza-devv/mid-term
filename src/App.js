import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SavedTasbeeh from "./components/SavedTasbeeh/SavedTasbeeh";
import CustomTasbeeh from "./components/CustomTasbeeh/CustomTasbeeh";
import Tasbeeh from "./components/Tasbeeh/Tasbeeh";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/savedtasbeeh" element={<SavedTasbeeh />} />
            <Route exact path="/customtasbeeh" element={<CustomTasbeeh />} />
            <Route exact path="/tasbeeh" element={<Tasbeeh />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
