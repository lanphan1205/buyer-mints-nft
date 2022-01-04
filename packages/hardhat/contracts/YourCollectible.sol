pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//import "@openzeppelin/contracts/access/Ownable.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract YourCollectible is ERC721Enumerable, ERC721URIStorage, VRFConsumerBase, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  uint256 public tokenCount; 

  bytes32 internal keyHash;
  uint256 internal fee;

  // can create mapping with key as tokenId
  uint256 public randomNumber;

  event RandomNumber(uint256 indexed randomNumber);
  event RequestedId(bytes32 indexed requestId);

  constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash, uint256 _fee) 
  VRFConsumerBase(_VRFCoordinator, _LinkToken) 
  ERC721("YourCollectible", "YCB") {
    keyHash = _keyhash;
    fee = _fee;
    // _setBaseURI("https://ipfs.io/ipfs/");
  }

  function mintItem(string memory tokenURI)
      public
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();
      tokenCount = _tokenIds.current();
      _mint(msg.sender, id);
      _setTokenURI(id, tokenURI);

      return id;
  }

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
          internal
          override(ERC721, ERC721Enumerable)
      {
          super._beforeTokenTransfer(from, to, tokenId);
      }

  function supportsInterface(bytes4 interfaceId)
      public
      view
      override(ERC721, ERC721Enumerable)
      returns (bool)
  {
      return super.supportsInterface(interfaceId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
      return super.tokenURI(tokenId);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
      super._burn(tokenId);
  }

  function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

  // return randomNumber
  /** 
  * Requests randomness 
  */
  function requestRandomNumber() public returns (bytes32 requestId) {
    require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
    requestId = requestRandomness(keyHash, fee);
    emit RequestedId(requestId);
  }

  /**
  * Callback function used by VRF Coordinator
  */
  function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
    randomNumber = randomness;
  }

  function getRandomNumber() public returns (uint256) {
    require(randomNumber > 0, "ChainLink VRF has not responded!");
    emit RandomNumber(randomNumber);
    return randomNumber;
  }
}
