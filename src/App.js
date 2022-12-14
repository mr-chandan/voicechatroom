import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navigation } from "./components/shared/Navigation/Navigation";
import { Authenticate } from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<SemiProtectedRoute />}>
          <Route path="/activate" element={<Activate />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = () => {
  const { isauth } = useSelector((state) => state.authSlice)
  return (isauth ? <Navigate to="/rooms" /> : <Outlet />)
}
const SemiProtectedRoute = () => {
  const { isauth, user } = useSelector((state) => state.authSlice)
  return (!isauth ? <Navigate to='/' /> : isauth && !user.activated ? <Outlet /> : <Navigate to='/rooms' />)
}
const ProtectedRoute = () => {
  const { isauth, user } = useSelector((state) => state.authSlice)
  return (!isauth ? <Navigate to='/' /> : isauth && !user.activated ? <Navigate to='/activate' /> : <Outlet />)
}

export default App;