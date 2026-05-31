import { motion } from "framer-motion";

function PremiumTransactionTable({
  transactions,
}) {
  return (
    <div className="bg-[#101935]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
      <h2 className="text-3xl font-bold mb-8">
        Enterprise Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-slate-400 border-b border-white/10">
              <th className="pb-4">
                Category
              </th>

              <th className="pb-4">
                Amount
              </th>

              <th className="pb-4">
                Type
              </th>

              <th className="pb-4">
                Date
              </th>

              <th className="pb-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(
              (item, index) => (
                <motion.tr
                  key={item._id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                  }}
                  className="border-b border-white/5 hover:bg-white/5 transition-all"
                >
                  <td className="py-5 font-bold">
                    {item.category}
                  </td>

                  <td
                    className={`py-5 font-bold ${
                      item.type ===
                      "Income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹ {item.amount}
                  </td>

                  <td className="py-5">
                    {item.type}
                  </td>

                  <td className="py-5">
                    {item.date}
                  </td>

                  <td className="py-5">
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </motion.tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PremiumTransactionTable;