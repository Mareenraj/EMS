import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListPage from "./pages/EmployeeListPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/add" element={<AddEmployeePage />} />
        <Route path="/update:id" element={<UpdateEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
