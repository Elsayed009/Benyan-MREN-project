import React from "react";
import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./statusPage";
import Projects from "./Projects";
import Users from "./Users";
import Developers from "./Developers";

function Dashboard() {
  const [isDraft, setIsDraft]=useState(false);

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
      <Sidebar hasUsersDraft={isDraft}/>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<StatusPage/>}/>
          <Route path="/users" element={<Users setHasDraft={setIsDraft}/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/developers" element={<Developers/>}/>
        </Routes>
      </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
