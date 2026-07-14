import { useRef } from "react";
import SummaryCards from "./SummaryCards";
import ExpenseChart from "./ExpenseChart";
import SubscriptionTable from "./SubscriptionTable";
import AIInsights from "./AIInsights";

function Dashboard({ data }) {

  const summaryRef = useRef(null);
  const subscriptionRef = useRef(null);
  const assistantRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (

    <div className="w-full space-y-10">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Expense Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Overview of your March 2025 financial activity.
        </p>

      </div>

      {/* Summary Cards */}

      <SummaryCards data={data} />

      {/* Chart + Navigation */}

      <div className="grid lg:grid-cols-3 gap-8 items-start">

        {/* Chart */}

        <div className="lg:col-span-2">

          <ExpenseChart
            data={data["Category Wise Expense"]}
          />

        </div>

        {/* Navigation */}

        <div className="bg-[#141821] border border-[#242A35] rounded-2xl p-7 sticky top-6">

          <h2 className="text-2xl font-semibold">
            Quick Navigation
          </h2>

          <p className="text-gray-500 text-sm mt-2 mb-8">
            Jump to any section of your financial report.
          </p>

          <button
            onClick={() => scrollToSection(summaryRef)}
            className="w-full text-left bg-[#0F131B] border border-[#242A35] rounded-2xl px-6 py-5 hover:border-[#B8923F] hover:bg-[#181E29] transition mb-4"
          >
            <p className="text-lg font-semibold">
              📊 Monthly Summary
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Income, expenses and savings
            </p>
          </button>

          <button
            onClick={() => scrollToSection(subscriptionRef)}
            className="w-full text-left bg-[#0F131B] border border-[#242A35] rounded-2xl px-6 py-5 hover:border-[#B8923F] hover:bg-[#181E29] transition mb-4"
          >
            <p className="text-lg font-semibold">
              💳 Subscriptions
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Monthly recurring payments
            </p>
          </button>

          <button
            onClick={() => scrollToSection(assistantRef)}
            className="w-full text-left bg-[#0F131B] border border-[#242A35] rounded-2xl px-6 py-5 hover:border-[#B8923F] hover:bg-[#181E29] transition"
          >
            <p className="text-lg font-semibold">
              🤖 AI Financial Assistant
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Personalized insights & recommendations
            </p>
          </button>

        </div>

      </div>

      {/* Monthly Summary */}

      <section
        ref={summaryRef}
        className="bg-[#141821] border border-[#242A35] rounded-2xl p-8"
      >

        <h2 className="text-2xl font-semibold mb-8">
          Monthly Summary
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div>

            <p className="text-gray-500 text-sm">
              Estimated Salary
            </p>

            <h2 className="text-3xl font-bold mt-3">
              ₹85,000
            </h2>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Total Expenses
            </p>

            <h2 className="text-3xl font-bold mt-3">
              ₹ {Number(data["Total Expense"]).toLocaleString()}
            </h2>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Estimated Savings
            </p>

            <h2 className="text-3xl font-bold mt-3">
              ₹ {(85000 - Number(data["Total Expense"])).toLocaleString()}
            </h2>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Predicted Month End
            </p>

            <h2 className="text-3xl font-bold mt-3">
              ₹ {Number(data["Next Month Prediction"]).toLocaleString()}
            </h2>

          </div>

        </div>

      </section>

      {/* Subscriptions */}

      <section
        ref={subscriptionRef}
        className="space-y-4"
      >

        <h2 className="text-2xl font-semibold">
          Subscriptions
        </h2>

        <SubscriptionTable
          subscriptions={data["Subscriptions"]}
        />

      </section>

      {/* AI Assistant */}

      <section
        ref={assistantRef}
        className="bg-[#141821] border border-[#242A35] rounded-2xl p-8"
      >

        <h2 className="text-2xl font-semibold">
          AI Financial Assistant
        </h2>

        <p className="text-gray-400 leading-7 mt-4">
          AI has analyzed your monthly bank statement,
          categorized your spending, estimated your month-end
          expenses, detected unusual transactions and generated
          personalized financial insights.
        </p>

        <div className="mt-10">

          <AIInsights
            insights={data.insights}
          />

        </div>

      </section>

    </div>

  );

}

export default Dashboard;