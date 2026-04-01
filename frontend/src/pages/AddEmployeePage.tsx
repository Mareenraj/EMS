import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";

export default function AddEmployeePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<any>({ employeeStatus: "ACTIVE" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      await createEmployee(form);
      navigate("/");
    } catch {
      setError("Create failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Employee</h1>

      {error && <p className="text-red-500">{error}</p>}

      <EmployeeForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        buttonText="Save"
      />
    </div>
  );
}