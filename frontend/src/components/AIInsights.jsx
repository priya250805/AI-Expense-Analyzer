function AIInsights({ insights = [] }) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          AI Insights
        </h2>

        <p className="text-gray-500 mt-2">
          Personalized insights generated after analyzing your monthly bank statement.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {insights.map((item, index) => (

          <div
            key={index}
            className="bg-[#141821] border border-[#242A35] rounded-2xl p-7 hover:border-[#B8923F] transition"
          >

            <p className="text-[#B8923F] text-sm uppercase tracking-widest font-semibold">
              {item.title}
            </p>

            <div className="border-t border-[#242A35] my-5"></div>

            <p className="text-gray-300 text-lg leading-8">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;