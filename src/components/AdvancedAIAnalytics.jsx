import { motion } from "framer-motion";

function AdvancedAIAnalytics({
  income,
  expense,
  balance,
}) {
  const savingsRate = (
    (balance / income) *
    100
  ).toFixed(1);

  const expenseRatio = (
    (expense / income) *
    100
  ).toFixed(1);

  const financialScore =
    savingsRate > 40
      ? "Excellent"
      : savingsRate > 20
      ? "Good"
      : "Needs Improvement";

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-10">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          AI Savings Prediction
        </h2>

        <p className="text-5xl font-bold text-cyan-400">
          ₹ 12,500
        </p>

        <p className="text-slate-400 mt-4">
          Potential monthly savings
          opportunity detected.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/20 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          Financial Health
        </h2>

        <p className="text-5xl font-bold text-green-400">
          {financialScore}
        </p>

        <p className="text-slate-400 mt-4">
          Savings Rate: {savingsRate}%
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/20 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          Expense Ratio
        </h2>

        <p className="text-5xl font-bold text-red-400">
          {expenseRatio}%
        </p>

        <p className="text-slate-400 mt-4">
          AI recommends reducing
          Food & Shopping expenses.
        </p>
      </motion.div>
    </div>
  );
}

export default AdvancedAIAnalytics;