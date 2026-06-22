import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHome from "./DashboardHome";
import Users from "./User";
import Projects from "./Projects";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar adminName="Super Admin" />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="home" element={<DashboardHome />} />
            <Route path="users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="projects" element={<Projects />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
