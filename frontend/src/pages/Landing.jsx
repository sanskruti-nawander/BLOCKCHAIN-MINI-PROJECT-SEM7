import { useState } from "react";
import axios from "axios";

export default function Landing() {
  const [account, setAccount] = useState("");

  const [showRegister, setShowRegister] = useState(false);
  const [showStage, setShowStage] = useState(false);

  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");

  const [productId, setProductId] = useState("");
  const [stage, setStage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch {
      alert("MetaMask not detected.");
    }
  };

  const registerProduct = async () => {
    await axios.post("http://localhost:5000/register", { name, origin, account });
    alert("✅ Product Registered");
    setShowRegister(false);
  };

  const addStageUpdate = async () => {
    await axios.post("http://localhost:5000/stage", {
      productId: Number(productId),
      stage, location, date, info, account
    });
    alert("✅ Stage Added");
    setShowStage(false);
  };

  return (
    <div className="font-display bg-[#f8faf8] text-[#0a1a0f]">
      

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-2xl">🟢</span>
          <h1 className="font-bold text-lg">FoodChain</h1>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#how" className="hover:text-green-600">How it Works</a>
          <a href="#mission" className="hover:text-green-600">Our Mission</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>

          <button
            onClick={connectWallet}
            className="bg-[#13ec5b] hover:bg-[#11d453] transition px-4 py-2 rounded-lg font-semibold text-[#0d1b0f]"
          >
            {account ? `Connected: ${account.slice(0, 8)}...` : "Connect with MetaMask"}
          </button>
        </div>
      </nav>


      {/* HERO */}
      <header className="max-w-6xl mx-auto mt-12 rounded-xl p-20 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,34,22,0.75),rgba(16,34,22,0.9)), url("https://images.unsplash.com/photo-1542834369-f10ebf06d3e0")'
        }}
      >
        <h1 className="text-5xl font-black">Transparency from Farm to Table</h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Utilizing blockchain technology to ensure the safety, authenticity, and traceability
          of your food, every step of the way.
        </p>
      </header>


      {/* HOW IT WORKS */}
      <section id="how" className="text-center max-w-5xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our platform simplifies supply chain management into three steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["📦", "Register Product", "Producers register product on blockchain."],
            ["📍", "Track & Trace", "Every stage is recorded & visible."],
            ["✅", "Verify Authenticity", "Consumers can verify product journey instantly."]
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={() => setShowRegister(true)} className="btn-primary">
            + Register Product
          </button>
          <button onClick={() => setShowStage(true)} className="btn-light">
            + Add Stage
          </button>
          <a href="/track" className="btn-secondary">Track Product →</a>
        </div>
      </section>


      {/* MISSION */}
      <section id="mission" className="bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1598511725903-65f81e340ef0" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We empower farmers, protect consumers, and bring transparency to global food supply networks.
            </p>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="text-center py-20">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Fill the form and we’ll contact you soon.
        </p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input className="input" placeholder="Your Name" />
          <input className="input" placeholder="you@example.com" />
          <textarea className="input" rows="4" placeholder="Your message..." />
          <button className="bg-[#13ec5b] py-3 rounded-lg font-bold">Submit</button>
        </form>
      </section>


      {/* MODALS */}
      {(showRegister || showStage) && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">

            {showRegister && (
              <>
                <h3 className="text-xl font-bold mb-4">Register Product</h3>
                <input className="input" placeholder="Product Name" onChange={e => setName(e.target.value)} />
                <input className="input mt-2" placeholder="Origin" onChange={e => setOrigin(e.target.value)} />
                <div className="flex gap-2 mt-6">
                  <button className="btn-primary" onClick={registerProduct}>Submit</button>
                  <button className="btn-danger" onClick={() => setShowRegister(false)}>Cancel</button>
                </div>
              </>
            )}

            {showStage && (
              <>
                <h3 className="text-xl font-bold mb-4">Add Stage</h3>
                <input className="input" placeholder="Product ID" onChange={e => setProductId(e.target.value)} />
                <input className="input mt-2" placeholder="Stage" onChange={e => setStage(e.target.value)} />
                <input className="input mt-2" placeholder="Location" onChange={e => setLocation(e.target.value)} />
                <input className="input mt-2" placeholder="Date" onChange={e => setDate(e.target.value)} />
                <input className="input mt-2" placeholder="Info" onChange={e => setInfo(e.target.value)} />

                <div className="flex gap-2 mt-6">
                  <button className="btn-primary" onClick={addStageUpdate}>Submit</button>
                  <button className="btn-danger" onClick={() => setShowStage(false)}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
