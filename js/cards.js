function createCard(nomeModelo, categoria, carro, passageiros, arCondicionado, numeroPortas, bagagem, valor) {
  return `
  <div class="card mb-3 mx-auto" style="max-width: 550px;">
  <div class="row g-0">
    <div class="col-lg-12">
      <div class="card-body">
        <h5 class="card-title">Modelo ${nomeModelo}<small class="text-body-secondary"> ou similar</small></h5>
        <p class="card-text">Categoria ${categoria}</p>
        <div class="d-flex row">
          <div class="col-6">
            <img src="../images/${carro}.png" class="img-fluid" style="max-height: 150px;" alt="...">
          </div>
          <div class="col-6 d-flex flex-column justify-content-center mt-4">
            <div class="d-flex justify-content-space-between gap-5 fs-5 text-center">
              <p><i class="fa-solid fa-user"></i> ${passageiros}</p>
              <p><i class="fa-regular fa-snowflake"></i> ${arCondicionado}</p>
            </div>
            <div class="d-flex justify-content-space-between gap-5 fs-5 text-center">
              <p><i class="fa-solid fa-door-open"></i> ${numeroPortas}</p>
              <p><i class="fa-solid fa-suitcase"></i> ${bagagem}</p>
            </div>
          </div>
        </div>
        <div class="mt-3 d-flex justify-content-between">
          <p class="m-2 fs-5"><a>Verificar datas e horários disponíveis </a></p>
          <p class="m-2 fw-bold fs-5">${valor} <a>></a></p>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}

document.querySelector("#cards").innerHTML =

  createCard("MODELO1", "CATEGORIA1", "carro2", 4, "S", 4, 4, "123,45") +
  createCard("MODELO2", "CATEGORIA2", "carro1", 4, "N", 2, 3, "234,56") + 
  createCard("MODELO3", "CATEGORIA3", "carro3", 2, "S", 4, 4, "123,45") +
  createCard("MODELO4", "CATEGORIA4", "carro4", 4, "N", 2, 3, "234,56")