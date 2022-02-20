// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor() ERC721("DemoNFT", "DNFT") {}

    function baseTokenUri() public pure returns (string memory) {
        return "https://paxtiz-demo-nft.digitalocean.com/metadata/";
    }

    function mint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}
