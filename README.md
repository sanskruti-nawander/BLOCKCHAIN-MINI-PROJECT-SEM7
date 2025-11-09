# 🌿 FoodChain – Farm to Table Traceability Platform

**FoodChain** is a blockchain-based supply chain transparency system that ensures trust, authenticity, and traceability of food products from farmers to consumers.  
Every stage of the product's journey is recorded on the blockchain and can be verified in real-time.

---

## 🎯 Objective

To solve the problem of food fraud, mislabeling, and lack of consumer trust by ensuring every product’s journey is **transparent**, **tamper-proof**, and **verifiable**.

---

## 🧩 Project Architecture

FoodChain
│
├── blockchain/ # Smart contract + Truffle config
│ └── FoodSupplyChain.sol
│
├── backend/ # Node.js + Express API server
│ └── server.js
│
└── frontend/ # React + Vite + Tailwind UI
└── src/

yaml
Copy code

---

## 🚀 Key Features

| Feature | Description |
|--------|-------------|
| **Register Product** | Farmers/manufacturers register products on blockchain. |
| **Add Supply Stages** | Each step (processing, shipping, retail) is logged immutably. |
| **Track Product** | Anyone can view a product’s complete lifecycle by ID. |
| **MetaMask Integration** | Transactions are signed securely on-chain. |
| **Clean UI Dashboard** | Modern, responsive, professional interface. |

---

## 🔧 Technologies Used

| Layer | Tools |
|------|-------|
| Smart Contract | **Solidity**, Truffle |
| Blockchain Network | **Ganache** (Local Ethereum Network) |
| Backend | **Node.js**, Express.js, Web3.js |
| Frontend | **React + Vite**, Tailwind CSS, Axios |
| Wallet Interaction | **MetaMask** |

---

## 📦 Installation & Setup

🧰 Installation & Setup
1️⃣ Clone the Repository
   git clone https://github.com/sanskruti-nawander/BLOCKCHAIN-MINI-PROJECT-SEM7.git
   cd BLOCKCHAIN-MINI-PROJECT-SEM7

2️⃣ Install Dependencies
   📌 Blockchain (Smart Contract)
   cd blockchain
   npm install

📌 Backend (API Server)
   cd ../backend
   npm install

📌 Frontend (React UI)
   cd ../frontend
   npm install

3️⃣ Start Ganache

   Ensure Ganache RPC is running at:

   http://127.0.0.1:7545

4️⃣ Deploy Smart Contract
   cd blockchain
   truffle migrate --reset


   Copy the Contract Address printed in terminal.

5️⃣ Configure Backend

   Create .env inside backend/:

   CONTRACT_ADDRESS=0xPasteDeployedContractAddress


   Run server:

   cd backend
   node server.js


   Backend will run at:

   http://localhost:5000

6️⃣ Run Frontend
   cd ../frontend
   npm run dev


Open in browser:

   http://localhost:5173


🕹 Usage Guide
Action	How it Works
Connect Wallet	Click Connect MetaMask on landing page
Register Product	Enter product name + origin → Submit
Add Stage Update	Select Product ID → Enter stage data
Track Product	Go to Tracker → Enter Product ID
🎥 Demo Video

👉 https://youtu.be/GW7ZgXXkC-o

🤝 Contribution & Support

Pull requests are welcome.
For major changes, open an issue first to discuss improvements.
