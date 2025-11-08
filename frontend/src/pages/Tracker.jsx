import { useState } from "react";
import axios from "axios";

const iconForStage = (name) => {
  name = name.toLowerCase();
  if (name.includes("farm") || name.includes("harvest")) return "agriculture";
  if (name.includes("process") || name.includes("pack")) return "factory";
  if (name.includes("ship") || name.includes("trans")) return "local_shipping";
  if (name.includes("retail") || name.includes("store")) return "storefront";
  return "person";
};

export default function Tracker() {
  const [productId, setProductId] = useState("");
  const [timeline, setTimeline] = useState([]);

  const fetchTimeline = async () => {
    const res = await axios.get(`http://localhost:5000/track/${productId}`);
    const formatted = res.data.map(item => ({
      stage: item[0], location: item[1], date: item[2], info: item[3]
    }));
    setTimeline(formatted);
  };

  return (
    <div className="bg-neutral-light dark:bg-neutral-dark min-h-screen px-10 py-12">
      <h1 className="text-4xl font-black text-center mb-10">Product Journey Tracker</h1>

      <div className="max-w-xl mx-auto flex gap-3">
        <input className="border p-2 flex-1 rounded" placeholder="Enter Product ID"
          onChange={(e) => setProductId(e.target.value)} />
        <button onClick={fetchTimeline} className="bg-primary text-white px-5 rounded font-bold">
          Track
        </button>
      </div>

      <div className="mt-14 relative border-l border-neutral-400 pl-10 max-w-3xl mx-auto">
        {timeline.length === 0 ? (
          <p className="text-center text-neutral-medium">No stages recorded yet.</p>
        ) : (
          timeline.map((item, i) => (
            <div key={i} className="mb-10 relative">
              <span className="absolute -left-5 top-1 bg-white rounded-full p-2 shadow border">
                <span className="material-symbols-outlined text-2xl text-green-600">
                  {iconForStage(item.stage)}
                </span>
              </span>

              <h2 className="text-xl font-bold">{item.stage}</h2>
              <p className="text-neutral-medium">{item.date}</p>
              <p className="mt-2 text-green-800">{item.location}</p>
              <p className="text-sm mt-1">{item.info}</p>
            </div>
          ))
        )}
      </div>

      <a href="/" className="block text-center mt-10 text-blue-600 underline">
        ← Back to Dashboard
      </a>
    </div>
  );
}
