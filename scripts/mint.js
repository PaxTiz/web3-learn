require('dotenv').config()
const hre = require("hardhat")

async function main () {
    const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, hre.ethers.provider)
    const artifact = await hre.artifacts.readArtifact('NFT')
    const contract = new hre.ethers.Contract(process.env.CONTRACT_ADDRESS, artifact.abi, signer)
    console.log(await contract.functions.mint(process.env.WALLET_ADDRESS, 2))
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
