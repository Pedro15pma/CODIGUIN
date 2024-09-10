function calculaDesconto(valor) {
    return valor * 0.12;
}
let vendas = [];
let tabela = document.getElementById("tabela");

function preencherVetor() {

    let nome = document.getElementById("nome").value;
    let valor = (document.getElementById("valor").value) *1;
    let desconto = calculaDesconto(valor);
    vendas.push({
        nome,
        valor,
        desconto,
       soma: valor+desconto
    });
    exibirTabela(vendas);
}

//console.log(vendas)

function exibirTabela() {
    let innerTabela = "";
    for (i = 0; i < vendas.length; i++) {
        innerTabela = `
        <tr>
        <td>
        ${i + 1}
        </td>
        <td>
        ${vendas[i].nome}
        </td>
        <td>
        ${vendas[i].valor.toFixed(2)}
        </td>
        <td>
        ${vendas[i].desconto.toFixed(2)}
        
        </td>
        <td>
        
        ${vendas[i].soma.toFixed(2)}
                </td>
            </tr>
        `;
    }

    tabela.innerHTML += innerTabela;
}

function excluirDado() {
    vendas.pop(); 
    const linhas = tabela.querySelectorAll('tr');
    if (linhas.length > 1) { 
        linhas[linhas.length - 1].remove(); 
    }
}

function limparLista(){
 vendas = [];
console.log(tabela.rows.length) 
while(tabela.rows.length>1){
tabela.deleteRow(1)
}
}

