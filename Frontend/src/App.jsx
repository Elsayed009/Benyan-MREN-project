import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginDashboard from "./components/Dashboard/LoginDashboard/LoginDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<LoginDashboard />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
