const hre = require("hardhat")

async function main () {
  const CONTRACT_NAME = "NFT"
  // await hre.run('compile');

  const contractFactory = await hre.ethers.getContractFactory(CONTRACT_NAME)
  const contract = await contractFactory.deploy()

  await contract.deployed()

  console.log(`${CONTRACT_NAME} deployed to : '${contract.address}'`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
