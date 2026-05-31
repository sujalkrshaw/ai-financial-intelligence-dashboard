import { aiInsights } from "../data/mockData";

function AIInsights() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-3xl mb-10 shadow-2xl">
      <h2 className="text-3xl font-bold mb-5">
        AI Financial Insights
      </h2>

      <div className="space-y-4">
        {aiInsights.map(
          (insight, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-2xl"
            >
              {insight}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AIInsights;