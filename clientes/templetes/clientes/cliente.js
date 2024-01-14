<script>
// Adiciona um evento de clique a cada item da lista

var listaClientes = document.getElementById('clientes-lista');

listaClientes.addEventListener('click', function (event) {
    // Código para tratar o clique em um item da lista de clientes
    var elementoClicado = event.target;

    // Exemplo: Se clicar em um <li>, exiba seu conteúdo no console
    if (elementoClicado.tagName === 'LI') {
        console.log(elementoClicado.innerText);
    }
});
        
    {
    var li = event.target.closest('li'); // Encontra o elemento <li> mais próximo
    
    if (li) }
    
    {
        // Alterna a classe 'ativo' para mostrar/ocultar detalhes
        li.classList.toggle('ativo');
    }
});
</script>