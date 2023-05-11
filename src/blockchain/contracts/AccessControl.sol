// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Counter is AccessControl {
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
    int256 private _count;

    constructor() {
        // Conceder a função OPERATOR_ROLE para o endereço que implanta o contrato
        _setupRole(OPERATOR_ROLE, msg.sender);
    }

    // Incrementa o contador em 1
    function increment() public onlyRole(OPERATOR_ROLE) {
        _count += 1;
    }

    // Decrementa o contador em 1
    function decrement() public onlyRole(OPERATOR_ROLE) {
        _count -= 1;
    }

    // Retorna o valor atual do contador
    function getCount() public view returns (int256) {
        return _count;
    }

    // Concede a função OPERATOR_ROLE para outro endereço
    function grantOperatorRole(address operator) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(OPERATOR_ROLE, operator);
    }

    // Revoga a função OPERATOR_ROLE de um endereço
    function revokeOperatorRole(address operator) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(OPERATOR_ROLE, operator);
    }
}