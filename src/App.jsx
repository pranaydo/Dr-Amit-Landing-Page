import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default App;
