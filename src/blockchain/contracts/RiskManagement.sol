// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RiskManagement is AccessControl {
    bytes32 public constant RISK_MANAGER_ROLE = keccak256("RISK_MANAGER_ROLE");

    struct RiskThreshold {
        uint256 minThreshold;
        uint256 maxThreshold;
    }

    mapping(uint256 => RiskThreshold) private _projectRiskThresholds;

    event RiskThresholdSet(uint256 indexed projectId, uint256 minThreshold, uint256 maxThreshold);

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(RISK_MANAGER_ROLE, msg.sender);
    }

    function setRiskThreshold(uint256 projectId, uint256 minThreshold, uint256 maxThreshold) external onlyRole(RISK_MANAGER_ROLE) {
        require(minThreshold < maxThreshold, "Invalid risk threshold values");

        _projectRiskThresholds[projectId] = RiskThreshold({
            minThreshold: minThreshold,
            maxThreshold: maxThreshold
        });

        emit RiskThresholdSet(projectId, minThreshold, maxThreshold);
    }

    function getRiskThreshold(uint256 projectId) external view returns (RiskThreshold memory) {
        return _projectRiskThresholds[projectId];
    }

    function isWithinRiskThreshold(uint256 projectId, uint256 riskValue) external view returns (bool) {
        RiskThreshold memory threshold = _projectRiskThresholds[projectId];
        return riskValue >= threshold.minThreshold && riskValue <= threshold.maxThreshold;
    }
}