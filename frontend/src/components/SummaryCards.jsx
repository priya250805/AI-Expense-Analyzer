function SummaryCards({ data }) {

  const cards = [

    {
      title: "Total Spent",
      value: `₹ ${Number(data["Total Expense"]).toLocaleString()}`,
      footer: "March 2025"
    },

    {
      title: "Highest Expense",
      value: `₹ ${Number(data["Highest Expense"]).toLocaleString()}`,
      footer: "Largest Transaction"
    },

    {
      title: "Average Spend",
      value: `₹ ${Number(data["Average Expense"]).toLocaleString()}`,
      footer: "Per Transaction"
    },

    {
      title: "Predicted Spend",
      value: `₹ ${Number(data["Next Month Prediction"]).toLocaleString()}`,
      footer: "Month End Estimate"
    }

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-[#141821] border border-[#242A35] rounded-2xl p-6 transition-all duration-300 hover:border-[#B8923F] hover:-translate-y-1"
        >

          <p className="text-gray-400 text-sm tracking-wide uppercase">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-4">
            {card.value}
          </h2>

          <div className="mt-5 border-t border-[#242A35] pt-4">

            <p className="text-sm text-gray-500">
              {card.footer}
            </p>

          </div>

        </div>

      ))}

    </div>

  );
}

export default SummaryCards;