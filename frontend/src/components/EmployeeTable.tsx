import type { EmployeeResponse } from "../types/employee";

type Props = {
  employees: EmployeeResponse[];
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
};

export default function EmployeeTable({
  employees,
  onDelete,
  onUpdate,
}: Props) {
  return (
    <div className="w-full overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
      <table className="min-w-full border-collapse border border-slate-200 bg-white text-sm text-left">
        <thead className="bg-slate-50">
          <tr>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">
              Full name
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900 ">
              Address
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900 ">
              Email
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">
              Join Date
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900 ">
              Current salary (LKR)
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900 ">
              Employee status
            </th>
            <th className="border border-slate-200 px-6 py-4 font-semibold text-slate-900 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.firstName} {emp.lastName}
              </td>
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.address}
              </td>
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.email}
              </td>
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.joinDate}
              </td>
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.currentSalary}
              </td>
              <td className="border border-slate-200 px-6 py-4 text-slate-700">
                {emp.employeeStatus}
              </td>
              <td className="border border-slate-200 px-6 py-4">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => onUpdate(emp.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(emp.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
