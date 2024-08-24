//funçoes da tabela orçamentos
function addOrcamentos(){
    const id = prompt('Digite o ID:');
    const cliente = prompt('Digite o Nome do Cliente:');
    const valor = prompt('Digite o Valor:');
    const data = prompt('Digite a data (AAAA-MM-DD):');
    const status = prompt('Digite o status:');

    if(id && cliente && valor && data && status){
        const newRow = `<tr>
            <td>${id}</td>
            <td>${cliente}</td>
            <td>${valor}</td>
            <td>${data}</td>
            <td>${status}</td>
        </tr>`;
        document.getElementById('orcamentosTable').insertAdjacentHTML('beforeend', newRow);
    }
}

function removeOrcamentos(){
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('orcamentosable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            break;
        }

        else {
            alert('Orçamento não encontrado!');
        }
    }
}

function searchOrcamentos() {
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('orcamentosTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 0; i < rows.length; i++) {
        const cellValue = rows[i].cells[0].textContent; // ID assumido na primeira coluna
        if (cellValue === id) {
            const itemDetails = Array.from(rows[i].cells).map(cell => cell.textContent).join('\n');
            alert(`Orçamento encontrado:\n${itemDetails}`);
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert('Nota não encontrada!');
    }
}