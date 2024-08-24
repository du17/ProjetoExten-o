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
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            rows[i].style.backgroundColor = 'yellow'; // Destaque
        } else {
            rows[i].style.backgroundColor = ''; // Remove o destaque
        }
    }
}