import { Outlet, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/public/SignInPage";
import { LoginPage } from "./pages/public/LoginPage";
import { DashboardPage } from "./pages/private/DashboardPage";
import { NotFoundPage } from "./pages/public/NotFoundPage";
import "./App.css";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardPage />} path="/" exact />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignInPage />} path="/signin" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
