import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

function ExpenseChart({ data }) {

  const chartData = Object.entries(data).map(([category, amount]) => ({
    category,
    amount,
  }));

  return (

    <div className="bg-[#141821] border border-[#242A35] rounded-2xl p-6 h-full">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold text-white">
          Category-wise Spending
        </h2>

        <p className="text-gray-500 mt-1">
          Distribution of expenses across different categories.
        </p>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <CartesianGrid
            stroke="#242A35"
            vertical={false}
          />

          <XAxis
            dataKey="category"
            stroke="#7B8495"
            tick={{ fill: "#9CA3AF" }}
          />

          <YAxis
            stroke="#7B8495"
            tick={{ fill: "#9CA3AF" }}
          />

          <Tooltip
            contentStyle={{
              background: "#141821",
              border: "1px solid #242A35",
              borderRadius: "12px",
              color: "white",
            }}
          />

          <Bar
            dataKey="amount"
            fill="#B8923F"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ExpenseChart;