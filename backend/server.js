const express = require("express");
const cors = require("cors");
const { Web3 } = require("web3");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Ganache RPC
const web3 = new Web3("http://127.0.0.1:7545");

// Load ABI
const abi = JSON.parse(fs.readFileSync("./abi/FoodSupplyChain.json")).abi;

// Load Contract
const contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

// ✅ Register Product
app.post("/register", async (req, res) => {
  const { name, origin, account } = req.body;
  try {
    await contract.methods.registerProduct(name, origin).send({ from: account });
    res.json({ success: true, message: "Product Registered ✅" });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

// ✅ Add Stage Update
app.post("/stage", async (req, res) => {
  const { productId, stage, location, date, info, account } = req.body;
  try {
    await contract.methods.addStage(productId, stage, location, date, info).send({ from: account });
    res.json({ success: true, message: "Stage Added ✅" });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

// ✅ Get Journey History
app.get("/track/:productId", async (req, res) => {
  try {
    const result = await contract.methods.getStages(req.params.productId).call();
    res.json(result);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

app.listen(5000, () => console.log("✅ Backend running → http://localhost:5000"));
