import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { monthlyData } from "../data/mockData";

function CashflowChart() {
  return (
    <div className="bg-[#101935] p-8 rounded-3xl">
      <h2 className="text-3xl font-bold mb-6">
        Cashflow Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#8b5cf6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CashflowChart;