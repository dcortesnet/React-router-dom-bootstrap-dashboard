import { Outlet, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/public/SignInPage";
import { LoginPage } from "./pages/public/LoginPage";
import { DashboardPage } from "./pages/private/DashboardPage";
import { NotFoundPage } from "./pages/public/NotFoundPage";
import { HomePage } from "./pages/private/HomePage";
import { ArticlesListPage } from "./pages/private/ArticlesListPage";
import { UserListPage } from "./pages/private/UsersListPage";
import { ArticlesDetailPage } from "./pages/private/ArticlesDetailPage";
import { UserDetailPage } from "./pages/private/UsersDetailPage";
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
          <Route path="/" element={<Navigate to="home" />} />
          <Route element={<DashboardPage />}>
            <Route element={<HomePage />} path="home" />
            <Route element={<ArticlesListPage />} path="articles" />
            <Route
              element={<ArticlesDetailPage />}
              path="articles/:articleId"
            />
            <Route element={<UserListPage />} path="users" />
            <Route element={<UserDetailPage />} path="users/:userId" />
          </Route>
        </Route>
        <Route element={<LoginPage />} path="login" />
        <Route element={<SignInPage />} path="signin" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
