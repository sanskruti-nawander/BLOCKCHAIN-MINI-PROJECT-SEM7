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

### 1️⃣ Clone the Repository

   ```bash
   git clone https://github.com/sanskruti-nawander/BLOCKCHAIN-MINI-PROJECT-SEM7.git
   cd BLOCKCHAIN-MINI-PROJECT-SEM7
2️⃣ Install Dependencies
Blockchain (Smart Contract)
bash
Copy code
cd blockchain
npm install
Backend (API Server)
bash
Copy code
cd ../backend
npm install
Frontend (UI)
bash
Copy code
cd ../frontend
npm install
3️⃣ Configure Blockchain Network
Open Ganache

Ensure RPC Server is running at:

cpp
Copy code
http://127.0.0.1:7545
4️⃣ Deploy Smart Contract
bash
Copy code
cd blockchain
truffle migrate --reset --network development
Copy the contract address printed after deployment.

5️⃣ Add Contract Address to Backend
Inside backend/.env, add:

ini
Copy code
CONTRACT_ADDRESS=0xYourContractAddressHere
6️⃣ Start Backend Server
bash
Copy code
cd backend
node server.js
Server will start at:

arduino
Copy code
✅ Backend running → http://localhost:5000
7️⃣ Start Frontend UI
bash
Copy code
cd ../frontend
npm run dev
Now open:

arduino
Copy code
http://localhost:5173
🕹 Usage Flow
Action	Steps
Connect Wallet	Click Connect MetaMask
Register Product	Fill name + origin → Submit
Add Stage Update	Enter product ID + stage + location + date + info
Track Product	Open Track Page and enter Product ID

🧠 Smart Contract Overview
Function	Purpose
registerProduct()	Creates blockchain entry for product
addStage()	Logs movement / process stage
getStages()	Retrieves complete history

🎥 Demo Video (Click to Watch)
👉 https://youtu.be/GW7ZgXXkC-o

🖼 UI Preview
sql
Copy code
Landing Page → Register → Add Stage → Tracker Visualization
(Add screenshots here if you want your repo to look even more 🔥)

🤝 Contributing
Pull requests and suggestions are welcome!
Open issues for improvements or bugs.

📜 License
This project is licensed under the MIT License.

Made with ❤️ and strong chai ☕
