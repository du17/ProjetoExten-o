//funçoes da tabela ordens
function addOrdem(){
    const id = prompt('Digite o ID:');
    const data = prompt('Digite a data (AAAA-MM-DD):');
    const descricao = prompt('Digite o a Descrição:');
    const status = prompt('Digite o status:');

    if(id && data && descricao && status){
        const newRow = `<tr>
            <td>${id}</td>
            <td>${data}</td>
            <td>${descricao}</td>
            <td>${status}</td>
        </tr>`;
        document.getElementById('ordensTable').insertAdjacentHTML('beforeend', newRow);
    }
}

function removeOrdem(){
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('ordensTable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            break;
        }

        else {
            alert('Ordem não encontrado!');
        }
    }
}

function searchOrdem() {
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('ordensTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 0; i < rows.length; i++) {
        const cellValue = rows[i].cells[0].textContent; // ID assumido na primeira coluna
        if (cellValue === id) {
            const itemDetails = Array.from(rows[i].cells).map(cell => cell.textContent).join('\n');
            alert(`Ordem encontrada:\n${itemDetails}`);
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert('Ordem não encontrada!');
    }
}