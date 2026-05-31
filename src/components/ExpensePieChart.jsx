import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ExpensePieChart({
  income,
  expense,
}) {
  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expense",
      value: expense,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-[#101935] p-8 rounded-3xl">
      <h2 className="text-3xl font-bold mb-6">
        Expense Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;