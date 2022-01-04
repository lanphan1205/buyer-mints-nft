// deploy/00_deploy_your_contract.js

const fs = require("fs");
const { ethers } = require("hardhat");
const { networkConfig, getNetworkIdFromName } = require("../constants.js")

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, get, log } = deployments
  const { deployer } = await getNamedAccounts();

  console.log("\n\n 📡 Deploying...\n");
  
  const chainId = await getChainId()
  let linkTokenAddress
  let vrfCoordinatorAddress

  if (chainId == 31337) {
      let linkToken = await get('LinkToken')
      let VRFCoordinatorMock = await get('VRFCoordinatorMock')
      linkTokenAddress = linkToken.address
      vrfCoordinatorAddress = VRFCoordinatorMock.address
      additionalMessage = " --linkaddress " + linkTokenAddress
  } else {
      linkTokenAddress = networkConfig[chainId]['linkToken']
      vrfCoordinatorAddress = networkConfig[chainId]['vrfCoordinator']
  }
  const keyHash = networkConfig[chainId]['keyHash']
  const fee = networkConfig[chainId]['fee']
  args = [vrfCoordinatorAddress, linkTokenAddress, keyHash, fee]
  log("----------------------------------------------------")
  const YourCollectible = await deploy('YourCollectible', {
      from: deployer,
      args: args,
      log: true
  })
  log(`You have deployed an NFT contract to ${YourCollectible.address}`)

  // write contract address to <contract_address>.txt
  fs.writeFileSync("./contract_address.txt", YourCollectible.address.toString())

  const networkName = networkConfig[chainId]['name']
  log(`Verify with:\n npx hardhat verify --network ${networkName} ${YourCollectible.address} ${args.toString().replace(/,/g, " ")}`)
  // const YourCollectibleContract = await ethers.getContractFactory("YourCollectible")
  const accounts = await hre.ethers.getSigners()
  const signer = accounts[0]
  // const yourCollectible = new ethers.Contract(YourCollectible.address, YourCollectibleContract.interface, signer)

  // fund with LINK
  // let networkId = await getNetworkIdFromName(network.name)
  // const fundAmount = networkConfig[networkId]['fundAmount']
  // const linkTokenContract = await ethers.getContractFactory("LinkToken")
  // const linkToken = new ethers.Contract(linkTokenAddress, linkTokenContract.interface, signer)
  // let fund_tx = await linkToken.transfer(YourCollectible.address, fundAmount)
  // await fund_tx.wait(1)




  // log("Let's create an NFT now!")
  // tx = await randomSVG.create({ gasLimit: 300000 })
  // let receipt = await tx.wait(1)
  // let tokenId = receipt.events[3].topics[2]
  // log(`You've made your NFT! This is number ${tokenId}`)
  // log("Let's wait for the Chainlink VRF node to respond...")
  // if (chainId != 31337) {
  //     await new Promise(r => setTimeout(r, 180000))
  //     log(`Now let's finsih the mint...`)
  //     tx = await randomSVG.finishMint(tokenId, { gasLimit: 2000000 })
  //     await tx.wait(1)
  //     log(`You can view the tokenURI here ${await randomSVG.tokenURI(0)}`)
  // } else {
  //     const VRFCoordinatorMock = await deployments.get('VRFCoordinatorMock')
  //     vrfCoordinator = await ethers.getContractAt('VRFCoordinatorMock', VRFCoordinatorMock.address, signer)
  //     let transactionResponse = await vrfCoordinator.callBackWithRandomness(receipt.logs[3].topics[1], 77777, randomSVG.address)
  //     await transactionResponse.wait(1)
  //     log(`Now let's finsih the mint...`)
  //     tx = await randomSVG.finishMint(tokenId, { gasLimit: 2000000 })
  //     const tt = await tx.wait(1)
  //     log(`You can view the tokenURI here ${await randomSVG.tokenURI(0)}`)
  //     console.log(`You can view Random No here=> ${tt.events[0].args.randomNumber}`)
  //   }

  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");

    To take ownership of yourContract using the ownable library uncomment next line and add the
    address you want to be the owner.
    // yourContract.transferOwnership(YOUR_ADDRESS_HERE);

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */
};
module.exports.tags = ["YourCollectible"];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
