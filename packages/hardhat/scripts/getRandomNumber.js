const fs = require("fs");
const { ethers } = require("hardhat");
const assert= require("assert");


const getRandomNumber = async (chainId) => {
    const { deployments } = hre
    const { log } = deployments
    const YourCollectibleContract = await ethers.getContractFactory("YourCollectible")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    // read contract address from local file
    const contract_address =  fs.readFileSync("./contract_address.txt").toString().trim()
    console.log(contract_address)
    const yourCollectible = new ethers.Contract(contract_address, YourCollectibleContract.interface, signer)
    // generate random number
    let rn;
    if (chainId != 31337) {
      console.log("Requesting for random result on test net...")
      tx = await yourCollectible.requestRandomNumber({ gasLimit: 300000 });
      await tx.wait(1)
      console.log("Let's wait for the Chainlink VRF node to respond...")
      await new Promise(r => setTimeout(r, 60000))
      tx = await yourCollectible.getRandomNumber({ gasLimit: 2000000 })
      tt = await tx.wait(1)
      // console.log(tt2)
      // console.log(`RandomNo: ${tt.events[0].args.randomNumber}`)
      rn = tt.events[0].args.randomNumber.toString()
    } else {
      console.log("Requesting for random result on local chain...")
      tx = await yourCollectible.requestRandomNumber();
      tt = await tx.wait(1)
      // console.log(tt)
      // console.log(`RequestId: ${tt.events[3].topics[1]}`)
      const VRFCoordinatorMock = await deployments.get('VRFCoordinatorMock')
      vrfCoordinator = await ethers.getContractAt('VRFCoordinatorMock', VRFCoordinatorMock.address, signer)
      let transactionResponse = await vrfCoordinator.callBackWithRandomness(tt.events[3].args.requestId, 77777, contract_address)
      await transactionResponse.wait(1)
      tx = await yourCollectible.getRandomNumber()
      tt = await tx.wait(1)
      // console.log(tt)
      // console.log(`RandomNo: ${tt.events[0].topics[1]}`)
      // console.log(`RandomNo: ${tt.events[0].args.randomNumber}`)
      rn = tt.events[0].args.randomNumber.toString()

    }
    return rn
}

getRandomNumber(42)
.then(rn => console.log(rn))
.catch(e => console.log(e))