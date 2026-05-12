import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
