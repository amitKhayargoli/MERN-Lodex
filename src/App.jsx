import { BrowserRouter, Routes, Route } from "react-router-dom";
import LodeX from "./LodeX";
import Login from "./Login";
import Signup from "./signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LodeX />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
