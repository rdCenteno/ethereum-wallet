async function main() {
  // ethers is available in the global scope
  [deployer, addr1] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const SmartWallet = await ethers.getContractFactory("SmartWallet");
  const smartWallet = await SmartWallet.deploy(addr1.address);
  await smartWallet.deployed();

  console.log("Wallet address:", smartWallet.address);
  console.log("Wallet owner:", addr1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
