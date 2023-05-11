// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ProjectManagement is AccessControl {
    bytes32 public constant PROJECT_MANAGER_ROLE = keccak256("PROJECT_MANAGER_ROLE");
    IERC20 private _govToken;

    struct Project {
        uint256 id;
        string name;
        string description;
        uint256 requiredFunding;
        uint256 currentFunding;
        bool funded;
    }

    Project[] private _projects;
    uint256 private _nextProjectId;

    event ProjectCreated(uint256 indexed projectId, string name, string description, uint256 requiredFunding);
    event ProjectFunded(uint256 indexed projectId, address indexed funder, uint256 amount);

    constructor(IERC20 govToken) {
        _govToken = govToken;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PROJECT_MANAGER_ROLE, msg.sender);
    }

    function createProject(string calldata name, string calldata description, uint256 requiredFunding) external onlyRole(PROJECT_MANAGER_ROLE) {
        _projects.push(Project({
            id: _nextProjectId,
            name: name,
            description: description,
            requiredFunding: requiredFunding,
            currentFunding: 0,
            funded: false
        }));

        emit ProjectCreated(_nextProjectId, name, description, requiredFunding);
        _nextProjectId++;
    }

    function fundProject(uint256 projectId, uint256 amount) external {
        require(projectId < _projects.length, "Invalid project ID");
        require(!_projects[projectId].funded, "Project already funded");

        _govToken.transferFrom(msg.sender, address(this), amount);

        _projects[projectId].currentFunding += amount;
        if (_projects[projectId].currentFunding >= _projects[projectId].requiredFunding) {
            _projects[projectId].funded = true;
        }

        emit ProjectFunded(projectId, msg.sender, amount);
    }

    function getProject(uint256 projectId) external view returns (Project memory) {
        require(projectId < _projects.length, "Invalid project ID");
        return _projects[projectId];
    }

    function getProjectCount() external view returns (uint256) {
        return _projects.length;
    }
}