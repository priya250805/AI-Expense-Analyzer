import { useState } from "react";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">

      {/* Navbar */}

      <nav className="border-b border-[#242A35]">

        <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold tracking-wide">
              <span className="text-[#B8923F]">AI</span> Expense Analyzer
            </h1>

            <p className="text-gray-500 mt-1">
              Smart Personal Finance Assistant
            </p>

          </div>

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Monthly Statement
            </p>

            <h2 className="text-xl font-semibold">
              March 2025
            </h2>

          </div>

        </div>

      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {result ? (
          <Dashboard data={result} />
        ) : (
          <div className="min-h-[75vh] flex items-center justify-center">
            <Upload setResult={setResult} />
          </div>
        )}

      </main>

    </div>
  );
}

export default App;