document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("produto-form");
    const displayContainer = document.getElementById("produto-display-container");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const produtoValor = document.getElementById("produto-preco").value;
      const produtoCentavos = document.getElementById("produto-centavos").value;
      const taxaProduto = document.getElementById("taxa-produto").value;

      const porcentagemProduto = ( ((parseInt(produtoValor) * taxaProduto) / 100) + parseInt(produtoValor))
      const porcentagemCentavos = ( (( parseInt(produtoCentavos) * taxaProduto) / 100) + parseInt(produtoCentavos))
      
  
      if (produtoValor && produtoCentavos && porcentagemProduto && porcentagemCentavos ) {
        addProduto(produtoValor , produtoCentavos , porcentagemProduto , porcentagemCentavos  );
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos.");
      }

    });
  
    function addProduto(produtoValor, produtoCentavos, porcentagemProduto , porcentagemCentavos) {
      const produtoGrupo = document.createElement("div");
      produtoGrupo.classList.add("produto-grupo");
      produtoGrupo.innerHTML = `
        <h3>Valor do Produto: ${produtoValor},${produtoCentavos} R$</h3>
        <h2>Valor Total: ${porcentagemProduto},${porcentagemCentavos} R$</h2>
        <br>
      `;
      displayContainer.appendChild(produtoGrupo);
    }
});