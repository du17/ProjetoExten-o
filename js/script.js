//função principal
document.addEventListener('DOMContentLoaded', () => {
    const loadJSONData = (url, callback) => {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Erro ao carregar o JSON:', error));
    };

    const populateTable = (data, tableId) => {
        const tableBody = document.getElementById(tableId);
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    };

    // Carregar dados em cada página
    if (window.location.pathname.includes('laudos.html')) {
        loadJSONData('data/laudos.json', data => populateTable(data, 'laudosTable'));
    } else if (window.location.pathname.includes('estoque.html')) {
        loadJSONData('data/estoque.json', data => populateTable(data, 'estoqueTable'));
    } else if (window.location.pathname.includes('ordens.html')) {
        loadJSONData('data/ordens.json', data => populateTable(data, 'ordensTable'));
    } else if (window.location.pathname.includes('pedidos.html')) {
        loadJSONData('data/pedidos.json', data => populateTable(data, 'pedidosTable'));
    } else if (window.location.pathname.includes('notas.html')) {
        loadJSONData('data/notas.json', data => populateTable(data, 'notasTable'));
    } else if (window.location.pathname.includes('orcamentos.html')) {
        loadJSONData('data/orcamentos.json', data => populateTable(data, 'orcamentosTable'));
    }
});

let laudos = [
    { id: 1, data: '2024-08-01', equipamento: 'ECG', status: 'Concluído' },
    { id: 2, data: '2024-08-05', equipamento: 'Ultrassom', status: 'Em andamento' }
];

// Função para renderizar os laudos na tabela
function renderTable() {
    const tbody = document.getElementById('laudosTable');
    tbody.innerHTML = '';
    laudos.forEach((laudo) => {
        const row = `<tr>
                        <td>${laudo.id}</td>
                        <td>${laudo.data}</td>
                        <td>${laudo.equipamento}</td>
                        <td>${laudo.status}</td>
                     </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

// Função para adicionar um laudo
function addLaudo() {
    const id = laudos.length ? laudos[laudos.length - 1].id + 1 : 1;
    const data = prompt('Digite a data (AAAA-MM-DD):');
    const equipamento = prompt('Digite o equipamento:');
    const status = prompt('Digite o status:');

    if (data && equipamento && status) {
        laudos.push({ id, data, equipamento, status });
        renderTable();
    }
}

// Função para remover um laudo pelo ID
function removeLaudo() {
    const id = prompt('Digite o ID do laudo a ser removido:');
    const index = laudos.findIndex(laudo => laudo.id == id);
    if (index !== -1) {
        laudos.splice(index, 1);
        renderTable();
    } else {
        alert('Laudo não encontrado!');
    }
}

// Função para procurar um laudo pelo ID
function searchLaudo() {
    const id = document.getElementById('searchInput').value;
    const laudo = laudos.find(laudo => laudo.id == id);
    if (laudo) {
        alert(`Laudo encontrado:\nID: ${laudo.id}\nData: ${laudo.data}\nEquipamento: ${laudo.equipamento}\nStatus: ${laudo.status}`);
    } else {
        alert('Laudo não encontrado!');
    }
}

// Inicializa a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', renderTable);