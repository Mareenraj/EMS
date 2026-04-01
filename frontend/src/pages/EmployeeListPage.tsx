import { useEffect, useState } from "react";
import type { EmployeeResponse } from "../types/employee";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../services/employeeService";
import EmployeeTable from "../components/EmployeeTable";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (err) {
      setError("Failed to load employees!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await deleteEmployee(id);
      await loadEmployees();
    } catch (err) {
      setError("Delete Failed!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          onClick={() => navigate("/add")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <EmployeeTable
          employees={employees}
          onDelete={handleDelete}
          onUpdate={(id) => navigate(`/update/${id}`)}
        />
      )}
    </div>
  );
};

export default EmployeeListPage;
