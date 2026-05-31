import { motion } from "framer-motion";

const metrics = [
  {
    title: "Budget Utilization",
    value: "82%",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Savings Rate",
    value: "34%",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Expense Growth",
    value: "+12%",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Active Categories",
    value: "12",
    color: "from-purple-500 to-indigo-500",
  },
];

function EnterpriseKPIGrid() {
  return (
    <div className="grid lg:grid-cols-4 gap-6 mb-10">
      {metrics.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.03,
          }}
          className={`bg-gradient-to-br ${item.color} p-[1px] rounded-3xl`}
        >
          <div className="bg-[#081028] rounded-3xl p-6 h-full">
            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {item.value}
            </h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default EnterpriseKPIGrid;