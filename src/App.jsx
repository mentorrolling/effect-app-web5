import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import NavBarApp from "./components/NavBarApp";
import ProductScreen from "./pages/ProductScreen";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="bg-light">
      {/* <BrowserRouter>
        <NavBarApp />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter> */}
      <TodoApp />
    </div>
  );
};

export default App;
