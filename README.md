# FoodChain – Farm to Table Traceability Platform

**FoodChain** is a full-stack application that demonstrates supply-chain transparency from farm to table.  
It uses blockchain technology (Ethereum smart contract) to register products, track each stage of the product’s journey and allow consumers to verify authenticity.

## 🧩 Project Structure  
- `blockchain/` — Smart contract (Solidity) logic and Truffle migration.  
- `backend/` — Express.js API server bridging frontend to blockchain.  
- `frontend/` — React + Vite UI, Tailwind CSS styling, MetaMask wallet integration.  

## 🚀 Features  
- Producers can register a new product.  
- Add supply-chain stages (processing, shipping, retail) to a product.  
- Consumer can enter a Product ID (or scan QR) to view full trace timeline.  
- MetaMask wallet connection for blockchain transactions.  
- Clean, responsive UI with modern styling.

## 🧠 Technologies Used  
- Solidity v0.8.x  
- Truffle for contract deployment  
- Ganache (local blockchain simulation)  
- Express.js & Web3.js for backend  
- React + Vite for frontend  
- Tailwind CSS for styling  
- Axios for HTTP requests  
- MetaMask for wallet interaction

## 📦 Getting Started

### Prerequisites  
- Node.js (v18 recommended)  
- npm or yarn  
- MetaMask browser extension  
- Ganache or similar local Ethereum network

### Setup Steps  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/foodchain.git
   cd foodchain

 2. **Install dependencies for each partClone the repository**  
   ```bash
   cd blockchain
   npm install

   cd ../backend
   npm install
 
   cd ../frontend
   npm install

