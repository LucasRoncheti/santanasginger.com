const list = document.getElementById('menu-list');
const footer = document.querySelector('footer')

//header 
const menuList = () => {
    /* html */
    list.innerHTML = `
    <li class="nav-item">
      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./index.html" class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold">
        Home
      </a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./about.html#welcome">The Company</a></li>
        <li><a class="dropdown-item" href="./about.html#ourValues">Our Values</a></li>
        <li><a class="dropdown-item" href="./about.html#ourhistory">Our History</a></li>
        <li><a class="dropdown-item" href="./about.html#team">The Dream Team</a></li>
        <li><a class="dropdown-item" href="./about.html#certificates">Certificates</a></li>
       
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="./services.html"  data-bs-toggle="dropdown" aria-expanded="false">
        Products
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./services.html#products">Our Products</a></li>
        <li><a class="dropdown-item" href="./services.html#gallery">Gallery</a></li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Export
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./exportacao.html#network">Network Worldwide</a></li>
        <li><a class="dropdown-item" href="./exportacao.html#OurProcess">Work Process</a></li>
        <li><a class="dropdown-item" href="./exportacao.html#exportPriciples">Export Principles</a></li>

      </ul>
    </li>



    <div class="nav-item dropdown d-flex align-items-center gap-3">
      <div   onclick="selecionarIdioma('pt')" id="pt" class="w-auto d-flex align-items-center gap-3  cursor-pointer flagUnActive ">
        <img title="Alterar para Português" style="cursor:pointer;"  src="./assets/flags/pt-br.svg" height="20" alt="Santanas Ginger Logo" loading="lazy" class="d-block mx-auto">
      </div>
      <div  onclick="selecionarIdioma('en')" id="en" class="w-auto d-flex align-items-center gap-3  cursor-pointer flagActive ">
        <img  title="Change to English"  style="cursor:pointer;"  src="./assets/flags/eng.svg" height="20" alt="Santanas Ginger Logo" loading="lazy" class="d-block mx-auto">
      </div>
      <div  onclick="selecionarIdioma('es')" id="es" class="w-auto d-flex align-items-center gap-3  cursor-pointer  flagUnActive ">
      <img title="Cambiar a español" style="cursor:pointer;"     src="./assets/flags/spn.svg" height="20" alt="Santanas Ginger Logo" loading="lazy" class="d-block mx-auto">
      </div>
    </div>

    <li style="display:flex;max-height:40px;align-items:center;justify-content:center;gap:15px;" class="nav-item ms-xl-auto    ">
    <a href="https://www.instagram.com/santanas.ginger/" target="_blank"><i class="bi bi-instagram text-white"></i></a>
    <a href="https://wa.me/+5527996561133" target="_blank"><i class="bi bi-whatsapp text-white"></i></a>
     
      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./contact.html" class="px-3 bg-body-secondary-hover border nav-link rounded-3 text-base leading-6 fw-semibold text-center">
        Contact Us
      </a>
    </li>
  `;
};


// footer 

const footerList = () => {

    /*html*/
    footer.innerHTML = `
   

  <div class="container">
    <div class="row gy-5">
      <div class="col-12 col-xl-6">
        <div class="pb-3 max-w-lg position-relative">
          <h2 class="text-body-emphasis leading-6 text-4xl tracking-tight fw-bold">
            Santanas Ginger
          </h2>
          <p class="m-0 mt-3 text-body-secondary text-lg leading-8">
            Based in Marechal Floriano, ES – Brazil, Santanas Ginger is committed to
            providing premium quality ginger for both domestic and international markets.
          </p>
          <p class="m-0 mt-2 text-body-secondary text-lg leading-8">
            A family Owned business with tradition and a strong commitment to excellence.
          </p>
        </div>
      </div>

      <div class="col-12 col-xl-6">
        <div class="row row-cols-1 row-cols-sm-2 gx-3 gy-5">
          <div class="d-flex flex-column align-items-start">
            <div class="p-2 rounded-3 border bg-white">
              <i class="bi bi-geo-alt text-body-emphasis"></i>
            </div>
            <div class="m-0 mt-3 text-body-emphasis fw-semibold">Address</div>
            <div class="m-0 mt-2 text-body-tertiary leading-7">
              Rua Magno Tadeu Effgen, 139 – Centro<br>
              Marechal Floriano/ES – Brazil
            </div>
          </div>

          <div class="d-flex flex-column align-items-start">
            <div class="p-2 rounded-3 border bg-white">
              <i class="bi bi-telephone text-body-emphasis"></i>
            </div>
            <div class="m-0 mt-3 text-body-emphasis fw-semibold">Contact</div>
            <div class="m-0 mt-2 text-body-tertiary leading-7">
              Djalma Santana<br>
              <i class="bi bi-telephone-outbound-fill text-body-emphasis"></i> <a href="tel:+5527999836007" class="text-decoration-none text-body-secondary">+55 27 99983 6007</a><br>
              <i class="bi bi-envelope-at-fill text-body-emphasis"></i> <a href="mailto:sales@santanasginger.com" class="text-decoration-none text-body-secondary">sales@santanasginger.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-4">
      <div>
     
        <h6 class="fw-bold text-body-emphasis"> <i class="bi bi-boxes text-body-emphasis"></i> PRODUCTS</h6>
        <ul class="list-unstyled text-body-secondary">
          <a href="./services.html">
            <li>Ginger</li>
            <li>Eddoes</li>
            <li>Sweet Potato</li>
            <li>Lime</li>
          </a>
        </ul>
      </div>
      <div>
        <h6 class="fw-bold text-body-emphasis">
          <img src="./assets/img/bg/brasilFlag.jpg" width="20" alt="Brazil Flag" class="me-2">BRAZIL
        </h6>
        <p class="text-body-secondary">
          Hiago Santana<br>
          Email: <a href="mailto:hiago@santanasginger.com" class="text-decoration-none text-body-secondary">hiago@santanasginger.com</a><br>
          Phone: <a href="tel:+5527999207338" class="text-decoration-none text-body-secondary">+55 27 99920 7338</a>
        </p>
      </div>
      <div>
        <h6 class="fw-bold text-body-emphasis">
          <img src="./assets/img/bg/argentinaFlag.jpg" width="20" alt="Argentina Flag" class="me-2">ARGENTINA
        </h6>
        <p class="text-body-secondary">
          Lays Santana<br>
          Email: <a href="mailto:lays@santanasginger.com" class="text-decoration-none text-body-secondary">lays@santanasginger.com</a><br>
          Phone: <a href="tel:+5527999701585" class="text-decoration-none text-body-secondary">+55 27 99970 1585</a>
        </p>
      </div>
      <div>
        <h6 class="fw-bold text-body-emphasis">
          <img src="./assets/img/bg/world.jpg" width="20" alt="World Icon" class="me-2">INTERNATIONAL
        </h6>
        <p class="text-body-secondary">
          Patrick Santana<br>
          Email: <a href="mailto:patrick@santanasginger.com" class="text-decoration-none text-body-secondary">patrick@santanasginger.com</a><br>
          Phone: <a href="tel:+5527996561133" class="text-decoration-none text-body-secondary">+55 27 99656 1133</a>
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <hr class="my-6 text-body-emphasis opacity-10">
    <div class="d-flex flex-column flex-xl-row gap-5 justify-content-between align-items-xl-center">
      <div class="order-first order-xl-last">
        <ul class="nav row gy-4 gx-sm-4 row-cols-2 row-cols-sm-auto">
        <li class="nav-item">
        <a href="./index.html" class="p-0 text-body-secondary nav-link leading-6 text-sm">Home</a>
      </li>
          <li class="nav-item">
            <a href="./about.html" class="p-0 text-body-secondary nav-link leading-6 text-sm">About</a>
          </li>
          <li class="nav-item">
            <a href="./services.html" class="p-0 text-body-secondary nav-link leading-6 text-sm">Products</a>
          </li>
          <li class="nav-item">
          <a href="./exportacao.html" class="p-0 text-body-secondary nav-link leading-6 text-sm">Export</a>
        </li>
          <li class="nav-item">
            <a href="./contact.html" class="p-0 text-body-secondary nav-link leading-6 text-sm">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="./index.html" class="link-body-emphasis d-flex align-items-center text-decoration-none">
          <img src="./assets/img/bg/logo.png" height="80" alt="Santanas Ginger Logo" loading="lazy">
        </a>
      </div>
      <div class="order-last order-xl-first">
        <p class="mb-0 text-body-secondary leading-6 text-sm">
          © 2025 <a href="https://www.lucasrd.site" target="_blank" class="text-decoration-none">
            <em>Lucas Roncheti Designer && Code</em>
          </a>
        </p>
      </div>
    </div>
  </div>




    `
}


menuList();
footerList()