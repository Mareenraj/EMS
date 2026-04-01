type Props = {
  form: any;
  onChange: (e: any) => void;
  onSubmit: () => void;
  loading: boolean;
  buttonText: string;
};

export default function EmployeeForm({
  form,
  onChange,
  onSubmit,
  loading,
  buttonText,
}: Props) {
  return (
    <div className="grid gap-2">
      <input name="firstName" value={form.firstName || ""} onChange={onChange} className="border p-2" />
      <input name="lastName" value={form.lastName || ""} onChange={onChange} className="border p-2" />
      <input name="address" value={form.address || ""} onChange={onChange} className="border p-2" />
      <input name="email" value={form.email || ""} onChange={onChange} className="border p-2" />
      <input type="date" name="joinDate" value={form.joinDate || ""} onChange={onChange} className="border p-2" />
      <input type="number" name="currentSalary" value={form.currentSalary || 0} onChange={onChange} className="border p-2" />

      <select name="employeeStatus" value={form.employeeStatus || "ACTIVE"} onChange={onChange} className="border p-2">
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {loading ? "Processing..." : buttonText}
      </button>
    </div>
  );
}