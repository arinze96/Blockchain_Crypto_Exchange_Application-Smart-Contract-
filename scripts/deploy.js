
const hre = require("hardhat");

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

  const runMain = async () => {
    try {
      await main();
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1);
    }
  }

  // 0x7E21e89561c43d95c40435A42e92ABf6E3b70A3D
  runMain();
