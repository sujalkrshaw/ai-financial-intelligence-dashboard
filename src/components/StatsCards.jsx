function StatsCards({
  income,
  expense,
  balance,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-10">
      <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold">
          Total Income
        </h2>

        <p className="text-5xl mt-5">
          ₹ {income}
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold">
          Total Expense
        </h2>

        <p className="text-5xl mt-5">
          ₹ {expense}
        </p>
      </div>

      <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold">
          Balance
        </h2>

        <p className="text-5xl mt-5">
          ₹ {balance}
        </p>
      </div>
    </div>
  );
}

export default StatsCards;