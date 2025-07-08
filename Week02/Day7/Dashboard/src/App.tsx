// src/App.tsx
import { Routes, Route, Navigate } from "react-router";
import Sidebar from "./components/Sidebar";
import PatientsPage from "./Pages/PatientsPage";
import OverviewPage from "./Pages/OverviewPage";
import MapPage from "./Pages/MapPage";
import DepartmentsPage from "./Pages/DepartmentsPage";
import DoctorsPage from "./Pages/DoctorsPage";
import HistoryPage from "./Pages/HistoryPage";
import SettingsPage from "./Pages/SettingsPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/patients" />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
