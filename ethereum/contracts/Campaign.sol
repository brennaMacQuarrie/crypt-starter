// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string memory title) public {                                   
        address newCampaign =  address(new Campaign(minimum, msg.sender, title));                   
        deployedCampaigns.push(newCampaign);                                       
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    address public manager;
    string public campaignTitle;
    uint public minimumContribution;
    mapping(address => bool) public approvers;

    struct Request {
        string description; 
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    uint public approversCount;

    modifier restricted () {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, address creator, string memory title) {
        manager = creator;
        campaignTitle = title;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        // payable makes a fn able to receive money into the contract
        // require restricts the fn body
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    // args are assumed to be memory and not storage unless indicated otherwise
    function createRequest(string memory description, uint value, address payable recipient) public restricted {
        // storage would be exactly the location of the Request struct
       
        uint _index = requests.length;
 
        Request[] storage r = requests;
 
        r.push();
 
        r[_index].description = description;
        r[_index].value = value;
        r[_index].recipient = recipient;
        r[_index].complete = false;
        r[_index].approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getCampaignDetails() public view returns (string memory, uint, uint, uint, uint, address) {
        return (
            campaignTitle,
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

    function hasApproved(uint index) public view returns (bool) {
        return requests[index].approvals[msg.sender];
    }

}