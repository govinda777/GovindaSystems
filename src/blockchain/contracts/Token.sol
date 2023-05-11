// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Token is ERC20 {
    using SafeERC20 for IERC20;

    constructor(uint256 initialSupply) ERC20("GovindaToken", "GOV") {
        _mint(msg.sender, initialSupply);
    }

    // Função para transferir tokens de forma segura
    function safeTransfer(address to, uint256 amount) public {
        super.safeTransfer(to, amount);
    }

    // Função para transferir tokens de outro endereço de forma segura
    function safeTransferFrom(address from, address to, uint256 amount) public {
        super.safeTransferFrom(from, to, amount);
    }

    // Função para aprovar um endereço para gastar tokens em seu nome de forma segura
    function safeApprove(address spender, uint256 amount) public {
        super.safeApprove(spender, amount);
    }

    // Função para aumentar a quantidade de tokens que um endereço tem permissão para gastar em seu nome de forma segura
    function safeIncreaseAllowance(address spender, uint256 addedValue) public {
        super.safeIncreaseAllowance(spender, addedValue);
    }

    // Função para diminuir a quantidade de tokens que um endereço tem permissão para gastar em seu nome de forma segura
    function safeDecreaseAllowance(address spender, uint256 subtractedValue) public {
        super.safeDecreaseAllowance(spender, subtractedValue);
    }
}