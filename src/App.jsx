import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <>
    <div className="bg-[url(/img/background.jpg)] bg-fit bg-center">
      <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
