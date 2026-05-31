import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { monthlyData } from "../data/mockData";

function ExpenseBarChart() {
  return (
    <div className="bg-[#101935] p-8 rounded-3xl">
      <h2 className="text-3xl font-bold mb-6">
        Monthly Expense Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="expense"
            fill="#06b6d4"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseBarChart;