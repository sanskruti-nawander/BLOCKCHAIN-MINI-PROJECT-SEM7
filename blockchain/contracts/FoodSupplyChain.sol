// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FoodSupplyChain {

    struct StageDetails {
        string stage;
        string location;
        string date;
        string info;
    }

    struct Product {
        uint256 id;
        string name;
        string origin;
        string currentStage;
        address owner;
    }

    uint256 public productCounter = 0;
    mapping(uint256 => Product) public products;
    mapping(uint256 => StageDetails[]) public productStages;

    event ProductRegistered(uint256 productId, string name, string origin);
    event StageAdded(uint256 productId, string stage, string location);

    function registerProduct(string memory _name, string memory _origin) public {
        productCounter++;
        products[productCounter] = Product(
            productCounter,
            _name,
            _origin,
            "Registered",
            msg.sender
        );

        emit ProductRegistered(productCounter, _name, _origin);
    }

    function addStage(
        uint256 _productId,
        string memory _stage,
        string memory _location,
        string memory _date,
        string memory _info
    ) public {
        require(products[_productId].id != 0, "Product not found");

        productStages[_productId].push(StageDetails(_stage, _location, _date, _info));
        products[_productId].currentStage = _stage;

        emit StageAdded(_productId, _stage, _location);
    }

    function getStages(uint256 _productId) public view returns (StageDetails[] memory) {
        return productStages[_productId];
    }
}
