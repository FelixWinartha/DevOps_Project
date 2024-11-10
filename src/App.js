import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import Login from "./components/Login"; // Import komponen Login
import "./style/landingPage.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Halaman Home */}
          <Route path="/" element={
            <div className="myBG">
              <NavigationBar />
              <Intro />
            </div>
          } />

          {/* Halaman Trending */}
          <Route path="/trending" element={
            <div className="trending">
              <Trending />
            </div>
          } />

          {/* Halaman SuperHero */}
          <Route path="/superhero" element={
            <div className="superhero">
              <SuperHero />
            </div>
          } />

          {/* Halaman Login */}
          <Route path="/login" element={<Login />} /> {/* Menambahkan route login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
