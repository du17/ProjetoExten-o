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


// Função para adicionar um laudo
function addLaudo() {
    const id = prompt('Digite o ID:')
    const data = prompt('Digite a data (AAAA-MM-DD):');
    const equipamento = prompt('Digite o equipamento:');
    const status = prompt('Digite o status:');

    if (data && equipamento && status) {
        const newRow = `<tr>
            <td>${id}</td>
            <td>${data}</td>
            <td>${equipamento}</td>
            <td>${status}</td>
        </tr>`;
        document.getElementById('laudosTable').insertAdjacentHTML('beforeend', newRow);
    }
}

// Função para remover um laudo pelo ID
function removeLaudo() {
    const id = prompt('Digite o ID do item a ser removido:');
    const table = document.getElementById('laudosTable');
    const rows = table.getElementsByTagName('tr');
    for(let i = 0; i < rows.length; i++){
        if(rows[i].cells[0].textContent === id){
            table.deleteRow(i);
            break;
        }

        else {
            alert('Laudo não encontrado!');
        }
    }
}

// Função para procurar um laudo pelo ID
function searchLaudo() {
    const id = document.getElementById('searchInput').value;
    const table = document.getElementById('laudosTable');
    const rows = table.getElementsByTagName('tr');
    let itemFound = false;

    for (let i = 0; i < rows.length; i++) {
        const cellValue = rows[i].cells[0].textContent; // ID assumido na primeira coluna
        if (cellValue === id) {
            const itemDetails = Array.from(rows[i].cells).map(cell => cell.textContent).join('\n');
            alert(`Laudo encontrado:\n${itemDetails}`);
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert('Laudo não encontrada!');
    }
}

//Login

// Função para inicializar a validação do Bootstrap
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    // Se o formulário estiver válido, realizar o login
                    event.preventDefault(); // Evita o envio padrão do formulário
                    login();
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

// Função de login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Exemplo de validação simples (em um ambiente real, a validação deve ser feita no backend)
    const validEmail = "adm@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        // Redirecionar para a página principal
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}