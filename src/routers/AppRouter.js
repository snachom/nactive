import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <HashRouter basename="/nactive" >
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/" element={
          <PrivateRoute>
            <HomeRouter />
          </PrivateRoute>
        } />

        <Route path="/nactive/" element={
          <PrivateRoute>
            <HomeRouter />
          </PrivateRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </HashRouter>
  )
};
