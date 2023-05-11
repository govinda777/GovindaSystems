// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Treasury is AccessControl {
    using SafeERC20 for IERC20;

    bytes32 public constant TREASURY_MANAGER_ROLE = keccak256("TREASURY_MANAGER_ROLE");

    IERC20 public govindaToken;

    constructor(IERC20 _govindaToken) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(TREASURY_MANAGER_ROLE, msg.sender);

        govindaToken = _govindaToken;
    }

    function deposit(uint256 amount) external onlyRole(TREASURY_MANAGER_ROLE) {
        govindaToken.safeTransferFrom(msg.sender, address(this), amount);
    }

    function withdraw(address recipient, uint256 amount) external onlyRole(TREASURY_MANAGER_ROLE) {
        govindaToken.safeTransfer(recipient, amount);
    }

    function distributeFunds(address[] memory recipients, uint256[] memory amounts) external onlyRole(TREASURY_MANAGER_ROLE) {
        require(recipients.length == amounts.length, "Mismatched recipients and amounts arrays");

        for (uint256 i = 0; i < recipients.length; i++) {
            govindaToken.safeTransfer(recipients[i], amounts[i]);
        }
    }

    function getTreasuryBalance() external view returns (uint256) {
        return govindaToken.balanceOf(address(this));
    }
}