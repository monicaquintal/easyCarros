function inserirNavbar() {
  return `
  <nav class="navbar bg-body-tertiary fixed-top fixed-top shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../images/logo.svg" width="120px" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Easy Carros 🚗</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form><br/>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Veículos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Histórico de Locações</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fale Conosco</a>
          </li>
          <li>
            <hr>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Área do Associado</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sugestões de frota
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Carros</a></li>
              <li><a class="dropdown-item" href="#">Motos</a></li>
              <li><a class="dropdown-item" href="#">Carros adaptados</a></li>
            </ul>
          </li>
          <li>
            <hr>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Motoristas de App</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Preços exclusivos 
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<!-- Fim Barra de Navegação -->
  `
}

document.querySelector("#inserir-navbar").innerHTML = inserirNavbar()