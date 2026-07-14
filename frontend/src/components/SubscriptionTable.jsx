function SubscriptionTable({ subscriptions }) {

  const totalCost = subscriptions.reduce(
    (sum, item) => sum + Number(item.Amount),
    0
  );

  return (

    <div className="bg-[#141821] border border-[#242A35] rounded-2xl p-8">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-semibold text-white">
            Recurring Subscriptions
          </h2>

          <p className="text-gray-500 mt-2">
            Monthly recurring payments detected by AI.
          </p>

        </div>

        <div className="text-right">

          <p className="text-gray-500 text-sm">
            Monthly Total
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            ₹ {totalCost.toLocaleString()}
          </h2>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl border border-[#242A35]">

        <table className="w-full">

          <thead className="bg-[#10141C]">

            <tr>

              <th className="text-left px-6 py-4 text-gray-400 font-medium">
                Merchant
              </th>

              <th className="text-left px-6 py-4 text-gray-400 font-medium">
                Category
              </th>

              <th className="text-right px-6 py-4 text-gray-400 font-medium">
                Amount
              </th>

            </tr>

          </thead>

          <tbody>

            {subscriptions.map((item, index) => (

              <tr
                key={index}
                className="border-t border-[#242A35] hover:bg-[#181E29] transition"
              >

                <td className="px-6 py-5 text-white font-medium">
                  {item.Merchant}
                </td>

                <td className="px-6 py-5 text-gray-400">
                  {item.Category}
                </td>

                <td className="px-6 py-5 text-right text-white font-semibold">
                  ₹ {Number(item.Amount).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default SubscriptionTable;