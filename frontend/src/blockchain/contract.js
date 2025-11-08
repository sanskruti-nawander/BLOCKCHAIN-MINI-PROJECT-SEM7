import Web3 from "web3";
import FoodSupplyChain from "./SupplyChain.json";

let web3;
let contract;

export const connectWallet = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const contractAddress = "0x3144814c5279A7F101B7B78873bbF0C2C52A8411"; // YOUR DEPLOYED ADDRESS

    contract = new web3.eth.Contract(FoodSupplyChain.abi, contractAddress);

    const accounts = await web3.eth.getAccounts();
    return { account: accounts[0], contract, web3 };
  } else {
    alert("MetaMask not found. Install MetaMask.");
  }
};
