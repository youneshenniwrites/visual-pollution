import SideNavigationBar from "./navigation/Sidebar/Sidebar";

function App() {
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <SideNavigationBar />
      {/* <Route path="/country" element={<Country />} /> */}
      {/* <Routes>
        <Route path="/country" element={<Country />} />
        <Route path="/business" element={<Business />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/transport" element={<Transport />} />
      </Routes> */}
    </div>
  );
}

export default App;
