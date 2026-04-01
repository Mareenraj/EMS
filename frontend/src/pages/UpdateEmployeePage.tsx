import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";

export default function UpdateEmployeePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getEmployeeById(Number(id));
      setForm(data);
    } catch {
      setError("Failed to load employee");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await updateEmployee(Number(id), form);
      navigate("/");
    } catch {
      setError("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Update Employee</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <EmployeeForm
        form={form}
        onChange={handleChange}
        onSubmit={handleUpdate}
        loading={loading}
        buttonText="Update"
      />
    </div>
  );
}