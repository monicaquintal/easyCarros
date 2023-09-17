function createCard(veiculo, categoria, descricao) {
  return `
<div class="card mb-3 mx-auto" style="width: 570px;">
  <div class="row g-0">
    <div class="col-4 exemplos">
      <img src="../images/${veiculo}" class="img-fluid rounded-start" alt="..." style="max-height:200px;">
    </div>
    <div class="col-8 my-auto conteudo-card">
      <div class="card-body text-center">
          <h4 class="card-title text-primary">${categoria}</h4>
          <p class="card-text text-center">${descricao}.</p>
          <p class="card-text text-end"><small class="">Confira valores e datas disponíveis!</small></p>
      </div>
    </div>
  </div>
</div>
  `
}

document.querySelector("#veiculos").innerHTML =

  createCard("acelerador-e-freio-manual-pcd.jpg", "Acelerador e freio manuais", "carro2") +
  createCard("controle-manual-e-eletronico.png", "Controle manual e eletrônico", "carro1") + 
  createCard("veiculo-com-rampa-pcd.jpg", "Veículos com rampa", "carro3") + 
  createCard("acelerador-e-freio-manual-pcd.jpg", "Acelerador e freio manuais", "carro2")