function createCard(nomeModelo, marca, moto, cilindradas, peso, altura, consumo, valor) {
  return `
  <div class="card mb-3 mx-auto" style="max-width: 600px;">
  <div class="row g-0">
    <div class="col-11">
      <div class="card-body">
        <h5 class="card-title">Modelo ${nomeModelo}<small class="text-body-secondary"> ou similar</small></h5>
        <p class="card-text">Categoria ${marca}</p>
        <div class="d-flex row">
          <div class="col-5">
            <img src="../images/${moto}.png" class="img-fluid" style="max-height: 150px;" alt="...">
          </div>
          <div class="col-5 d-flex flex-column justify-content-center mt-4">
            <div class="d-flex justify-content-space-between gap-5 fs-5 text-center">
              <p><i class="fa-solid fa-gear"></i> ${cilindradas}</p>
              <p><i class="fa-solid fa-weight-scale"></i> ${peso}kg</p>
            </div>
            <div class="d-flex justify-content-space-between align-itens-baseline gap-5 fs-5 text-center">
              <p><i class="fa-solid fa-ruler"></i> ${altura}</p>
              <p><i class="fa-solid fa-gas-pump"></i> ${consumo}</p>
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

  document.querySelector("#motos").innerHTML =

  createCard("MODELO 1", "MARCA 1", "moto1", 200, 150, 80, "15 km/L", "123,45") +
  createCard("MODELO 2", "MARCA 2", "moto2", 100, 200.00, 85, "20 km/L", "234,56") + 
  createCard("MODELO 3", "MARCA 3", "moto3", 200, 100, 90, "25 km/L", "123,45") +
  createCard("MODELO 4", "MARCA 4", "moto4", 150, 100, 95, "30 km/L", "234,56")