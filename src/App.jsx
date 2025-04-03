import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import NavBarApp from "./components/NavBarApp";
import ProductScreen from "./pages/ProductScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  return (
    <div className="bg-light vh-100">
      <BrowserRouter>
        <NavBarApp />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
