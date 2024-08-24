function addItem() {
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

function removeItem() {
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            break;
        }
    }
}

function searchItem() {
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
