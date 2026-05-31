import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import ExpensePieChart from "../components/ExpensePieChart";
import ExpenseBarChart from "../components/ExpenseBarChart";
import CashflowChart from "../components/CashflowChart";
import AdvancedAIAnalytics from "../components/AdvancedAIAnalytics";
import PremiumTransactionTable from "../components/PremiumTransactionTable";
import EnterpriseKPIGrid from "../components/EnterpriseKPIGrid";
import SmartInsightsPanel from "../components/SmartInsightsPanel";

const API = "http://localhost:5000";

function Dashboard() {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        `${API}/api/transactions`
      );

      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce(
      (acc, t) => acc + Number(t.amount),
      0
    );

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce(
      (acc, t) => acc + Number(t.amount),
      0
    );

  const balance = income - expense;

  return (
    <div className="flex bg-[#030712] text-white min-h-screen overflow-hidden">
      {/* BACKGROUND EFFECT */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto relative z-10">
        <Navbar />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {/* KPI STRIP */}

          <EnterpriseKPIGrid />

          {/* MAIN CARDS */}

          <StatsCards
            income={income}
            expense={expense}
            balance={balance}
          />

          {/* AI ANALYTICS */}

          <AdvancedAIAnalytics
            income={income}
            expense={expense}
            balance={balance}
          />

          {/* ANALYTICS GRID */}

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <ExpenseBarChart />
            </div>

            <SmartInsightsPanel />
          </div>

          {/* CHART GRID */}

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <ExpensePieChart
              income={income}
              expense={expense}
            />

            <CashflowChart />
          </div>

          {/* TABLE */}

          <PremiumTransactionTable
            transactions={
              transactions
            }
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;