//funçoes da tabela estoque
function addEstoque() {
    const id = prompt('Digite o ID:');
    const item = prompt('Digite o nome do item:');
    const quantidade = prompt('Digite a quantidade:');
    const local = prompt('Digite o local:');
    if (id && item && quantidade && local) {
        const newRow = `<tr>
            <td>${id}</td>
            <td>${item}</td>
            <td>${quantidade}</td>
            <td>${local}</td>
        </tr>`;
        document.getElementById('estoqueTable').insertAdjacentHTML('beforeend', newRow);
    }
}

function removeEstoque() {
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            break;
        }

        else {
            alert('Nota não encontrado!');
        }
    }
}

function searchEstoque() {
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 0; i < rows.length; i++) {
        const cellValue = rows[i].cells[0].textContent; // ID assumido na primeira coluna
        if (cellValue === id) {
            const itemDetails = Array.from(rows[i].cells).map(cell => cell.textContent).join('\n');
            alert(`Item encontrado:\n${itemDetails}`);
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert('Item não encontrado!');
    }
}

// Função para Adicionar Item
function addItem() {
    const id = document.getElementById('addId').value;
    const date = document.getElementById('addDate').value;
    const equipamento = document.getElementById('addEquipamento').value;
    const status = document.getElementById('addStatus').value;

    const table = document.getElementById('estoqueTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = id;
    newRow.insertCell(1).textContent = date;
    newRow.insertCell(2).textContent = equipamento;
    newRow.insertCell(3).textContent = status;

    alert('Item adicionado com sucesso!');
    // Fechar modal após salvar
    document.querySelector('#addModal .btn-close').click();
}

// Função para Remover Item
function removeItem() {
    const id = document.getElementById('removeId').value;
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            itemFound = true;
            alert('Item removido com sucesso!');
            break;
        }
    }

    if (!itemFound) {
        alert('Item não encontrado!');
    }
    // Fechar modal após remover
    document.querySelector('#removeModal .btn-close').click();
}

// Função para Procurar Item
function searchNotas() {
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            const itemDetails = Array.from(rows[i].cells).map(cell => cell.textContent).join('\n');
            alert(`Nota encontrada:\n${itemDetails}`);
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert('ID não encontrada!');
    }
    // Fechar modal após procurar
    document.querySelector('#searchModal .btn-close').click();
}