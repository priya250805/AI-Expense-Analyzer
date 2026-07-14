import { useState } from "react";
import axios from "axios";

function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post(
        "https://ai-expense-analyzer-yhwp.onrender.com/upload",
        formData
      );

      setResult(res.data);

    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-3xl bg-[#141821] border border-[#242A35] rounded-3xl p-10 shadow-2xl">

      <h2 className="text-4xl font-bold text-white mb-3">
        Upload Bank Statement
      </h2>

      <p className="text-gray-400 mb-8">
        Upload your CSV file and let AI analyze your expenses.
      </p>

      <input
        id="csvFile"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <label
        htmlFor="csvFile"
        className="cursor-pointer flex items-center justify-between bg-[#0B0D12] border border-[#242A35] rounded-xl px-6 py-5 hover:border-[#B8923F] transition"
      >
        <span className="text-gray-300 truncate">
          {file ? file.name : "Choose CSV File"}
        </span>

        <span className="bg-[#B8923F] text-black px-5 py-2 rounded-lg font-semibold">
          Browse
        </span>
      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full bg-[#B8923F] text-black font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? "Analyzing..." : "Analyze Expenses"}
      </button>

    </div>
  );
}

export default Upload;