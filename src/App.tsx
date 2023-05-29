import { Route, Routes } from "react-router-dom";
import SideNavigationBar from "./navigation/Sidebar/Sidebar";
import { Business } from "@mui/icons-material";
import Country from "./screens/Country/Country";
import Factories from "./screens/Factories/Factories";
import Labour from "./screens/Labour/Labour";
import Transport from "./screens/Transport/Transport";

function App() {
  return (
    <div className="container">
      <SideNavigationBar />
      <Routes>
        <Route path="/country" element={<Country />} />
        <Route path="/business" element={<Business />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </div>
  );
}

export default App;
