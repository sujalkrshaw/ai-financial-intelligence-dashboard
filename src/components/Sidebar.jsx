import {
  FaChartPie,
  FaWallet,
  FaCog,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#081028] border-r border-white/10 p-6 hidden lg:block">
      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        Finora AI
      </h1>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-lg hover:text-cyan-400 cursor-pointer">
          <FaChartPie />
          Dashboard
        </div>

        <div className="flex items-center gap-4 text-lg hover:text-cyan-400 cursor-pointer">
          <FaWallet />
          Transactions
        </div>

        <div className="flex items-center gap-4 text-lg hover:text-cyan-400 cursor-pointer">
          <FaRobot />
          AI Insights
        </div>

        <div className="flex items-center gap-4 text-lg hover:text-cyan-400 cursor-pointer">
          <FaCog />
          Settings
        </div>
      </div>
    </div>
  );
}

export default Sidebar;