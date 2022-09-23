
const hre = require("hardhat");

async function main() {

  //deploy the code
  const simpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await simpleStorageFactory.deploy();

  await simpleStorage.deployed();

  console.log(
    `simpleStorage deployed to ${simpleStorage.address}`
  );

  //update the current value
  const currentValue = await simpleStorage.retrieve();
  console.log(`current value is ${currentValue}`)

  const transactionResp = await simpleStorage.store(7);
  await transactionResp.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`updated value ${updatedValue}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
