import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
