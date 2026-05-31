import { motion } from "framer-motion";

const insights = [
  "AI detected unusually high Shopping expenses.",
  "Food spending increased by 18% this month.",
  "Travel expenses reduced compared to April.",
  "Potential savings opportunity: ₹12,500",
];

function SmartInsightsPanel() {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      className="bg-[#101935]/80 backdrop-blur-xl border border-cyan-500/10 p-8 rounded-3xl shadow-2xl"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          AI Insights Engine
        </h2>

        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="space-y-5">
        {insights.map(
          (item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-cyan-400/30 transition-all"
            >
              {item}
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}

export default SmartInsightsPanel;