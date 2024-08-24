

function addNota(){
    const id = prompt('Digite o ID: ');
    const cliente = prompt('Digite o Nome do Cliente: ');
    const valor = prompt('Digite o Valor: ');
    const data = prompt('Digite a data (AAAA-MM-DD):');
    const status = prompt('Digite o status:');

    if(id && cliente && valor && data && status){
        const newRow = `<tr>
            <td>${id}</td>
            <td>${clientem}</td>
            <td>${valor}</td>
            <td>${data}</td>
            <td>${status}</td>
        </tr>`;
        document.getElementById('notasTable').insertAdjacentHTML('beforeend', newRow);
    }
}

function removeNota(){
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('notasTable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === id) {
            table.deleteRow(i);
            break;
        }
    }
}

function searchNotas(){
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('notasTable');
    if (table) {
        alert(`Laudo encontrado:\nID: ${laudo.id}\nData: ${laudo.data}\nEquipamento: ${laudo.equipamento}\nStatus: ${laudo.status}`);
    } 
    
    else {
        alert('Nota não encontrado!');
    }
}

document.addEventListener('DOMContentLoaded', renderTable);