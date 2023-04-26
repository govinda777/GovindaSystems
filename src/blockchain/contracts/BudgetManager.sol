/*

Esse smart contract permite que os clientes criem orçamentos e aceitem os orçamentos propostos. As informações de orçamento, como descrição e valor, são armazenadas na struct Budget. Os orçamentos são armazenados em um mapeamento chamado budgets e cada orçamento recebe um ID único.

O smart contract possui as seguintes funções:

createBudget: Permite aos clientes criar um novo orçamento fornecendo uma descrição e um valor. A função emite um evento BudgetCreated.
acceptBudget: Permite aos clientes aceitar um orçamento especificando o ID do orçamento. A função emite um evento BudgetAccepted.
getBudget: Retorna as informações de um orçamento específico, com base no ID do orçamento.
Lembre-se de que esse é apenas um exemplo simples e você pode precisar ajustar o smart contract de acordo com suas necessidades específicas e adicionar funcionalidades adicionais conforme necessário. Além disso, teste e verifique seu smart contract antes de implantá-lo em uma rede blockchain.

*/

pragma solidity ^0.8.0;

contract BudgetManager {
    struct Budget {
        uint256 id;
        address client;
        string description;
        uint256 amount;
        bool accepted;
    }

    uint256 public nextBudgetId;
    mapping(uint256 => Budget) public budgets;

    event BudgetCreated(uint256 indexed budgetId, address indexed client, string description, uint256 amount);
    event BudgetAccepted(uint256 indexed budgetId, address indexed client);

    function createBudget(string memory _description, uint256 _amount) public {
        require(bytes(_description).length > 0, "Description is required");
        require(_amount > 0, "Amount must be greater than 0");

        uint256 budgetId = nextBudgetId++;

        Budget memory newBudget = Budget({
            id: budgetId,
            client: msg.sender,
            description: _description,
            amount: _amount,
            accepted: false
        });

        budgets[budgetId] = newBudget;

        emit BudgetCreated(budgetId, msg.sender, _description, _amount);
    }

    function acceptBudget(uint256 _budgetId) public {
        require(budgets[_budgetId].client == msg.sender, "Only the client can accept the budget");
        require(!budgets[_budgetId].accepted, "Budget is already accepted");

        budgets[_budgetId].accepted = true;

        emit BudgetAccepted(_budgetId, msg.sender);
    }

    function getBudget(uint256 _budgetId) public view returns (Budget memory) {
        return budgets[_budgetId];
    }
}