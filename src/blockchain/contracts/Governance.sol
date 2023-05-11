// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/timelocks/ERC20VotesComp.sol";

contract Governance is Governor, ERC20VotesComp {
    constructor(string memory name_, string memory symbol_)
        ERC20(name_, symbol_)
        Governor(name_)
    {}

    // Função para criar uma nova proposta
    function propose(string[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public returns (uint256) {
        return super.propose(targets, values, calldatas, description);
    }

    // Função para executar ações aprovadas pela proposta
    function execute(uint256 proposalId, string[] memory targets, uint256[] memory values, bytes[] memory calldatas) public payable {
        super.execute(proposalId, targets, values, calldatas);
    }

    // Função para votar em uma proposta
    function castVote(uint256 proposalId, uint8 support) public {
        super.castVote(proposalId, support);
    }

    // Função para verificar o resultado da votação em uma proposta
    function state(uint256 proposalId) public view returns (ProposalState) {
        return super.state(proposalId);
    }

    // Função para verificar o quórum necessário para uma proposta ser aprovada
    function quorum(uint256 blockNumber) public view override returns (uint256) {
        return totalSupplyAt(blockNumber) / 2;
    }

    // Função para verificar o período de votação de uma proposta
    function votingPeriod() public pure override returns (uint256) {
        return 17280; // ~3 dias em blocos (assumindo 15s por bloco)
    }

    // Função para verificar o saldo de votos de um endereço
    function getVotes(address account, uint256 blockNumber) public view returns (uint256) {
        return super.getVotes(account, blockNumber);
    }

    // Função para resgatar tokens do contrato
    function _afterProposalExecution(uint256 proposalId) internal override {
        super._afterProposalExecution(proposalId);
    }
}