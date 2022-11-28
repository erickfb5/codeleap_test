import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Signup from "./pages/Signup/Signup";
import MainScreen from "./pages/MainScreen/MainScreen";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="signup" element={<Signup />} />
      <Route path="feed" element={<MainScreen />} />
    </Routes>
  </div>
);

export default App;
