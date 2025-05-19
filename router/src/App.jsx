import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<NavBar />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
