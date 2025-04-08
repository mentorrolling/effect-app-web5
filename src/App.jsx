import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen";
import PrincipalRoutes from "./routes/PrincipalRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div className="bg-light min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <PrincipalRoutes />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
