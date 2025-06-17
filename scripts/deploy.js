
const hre = require("hardhat");

async function main() {
  const Fest_tips = await hre.ethers.getContractFactory("fest_tips"); //fetching bytecode and ABI
  const fest_tips = await Fest_tips.deploy(); //creating an instance of our smart contract

  await fest_tips.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${fest_tips.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//   0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512