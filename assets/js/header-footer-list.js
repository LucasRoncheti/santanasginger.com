const list = document.getElementById('menu-list');
const footer = document.querySelector('footer')

const langSelected = localStorage.getItem("idioma") ;

//header 
const menuList = () => {
  let brasilFlag = "./assets/flags/pt-br.svg";
  let euaFlag = "./assets/flags/eng.svg";
  let esFlag = "./assets/flags/spn.svg";

  if (langSelected === "pt" || langSelected === "es") {
    brasilFlag = "../assets/flags/pt-br.svg";
    euaFlag = "../assets/flags/eng.svg";
    esFlag = "../assets/flags/spn.svg";
  }

  // Textos dinâmicos por idioma
  const texts = {
    pt: {
      home: "Início",
      about: "Sobre",
      company: "A Empresa",
      values: "Nossos Valores",
      history: "Nossa História",
      team: "Time dos Sonhos",
      certificates: "Certificados",
      products: "Produtos",
      ourProducts: "Nossos Produtos",
      gallery: "Galeria",
      export: "Exportação",
      network: "Rede Global",
      process: "Nosso Processo",
      principles: "Princípios de Exportação",
      contact: "Contato",
      changeTo: "Alterar para Português"
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      company: "La Empresa",
      values: "Nuestros Valores",
      history: "Nuestra Historia",
      team: "El Equipo de Ensueño",
      certificates: "Certificados",
      products: "Productos",
      ourProducts: "Nuestros Productos",
      gallery: "Galería",
      export: "Exportación",
      network: "Red Global",
      process: "Nuestro Proceso",
      principles: "Principios de Exportación",
      contact: "Contacto",
      changeTo: "Cambiar a Español"
    },
    en: {
      home: "Home",
      about: "About",
      company: "The Company",
      values: "Our Values",
      history: "Our History",
      team: "The Dream Team",
      certificates: "Certificates",
      products: "Products",
      ourProducts: "Our Products",
      gallery: "Gallery",
      export: "Export",
      network: "Network Worldwide",
      process: "Work Process",
      principles: "Export Principles",
      contact: "Contact Us",
      changeTo: "Change to English"
    }
  };

  const t = texts[langSelected] || texts.en;

  list.innerHTML = `
    <li class="nav-item">
      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./index.html" class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold">
        ${t.home}
      </a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${t.about}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./about.html#welcome">${t.company}</a></li>
        <li><a class="dropdown-item" href="./about.html#ourValues">${t.values}</a></li>
        <li><a class="dropdown-item" href="./about.html#ourhistory">${t.history}</a></li>
        <li><a class="dropdown-item" href="./about.html#team">${t.team}</a></li>
        <li><a class="dropdown-item" href="./about.html#certificates">${t.certificates}</a></li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="./services.html" data-bs-toggle="dropdown" aria-expanded="false">
        ${t.products}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./services.html#products">${t.ourProducts}</a></li>
        <li><a class="dropdown-item" href="./services.html#gallery">${t.gallery}</a></li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${t.export}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./exportacao.html#network">${t.network}</a></li>
        <li><a class="dropdown-item" href="./exportacao.html#OurProcess">${t.process}</a></li>
        <li><a class="dropdown-item" href="./exportacao.html#exportPriciples">${t.principles}</a></li>
      </ul>
    </li>

    <div class="nav-item dropdown d-flex align-items-center gap-3">
      <div onclick="selecionarIdioma('pt')" id="pt" class="w-auto d-flex align-items-center gap-3 cursor-pointer flagUnActive">
        <img title="Alterar para Português" style="cursor:pointer;" src=${brasilFlag} height="20" alt="Português" loading="lazy" class="d-block mx-auto">
      </div>
      <div onclick="selecionarIdioma('en')" id="en" class="w-auto d-flex align-items-center gap-3 cursor-pointer flagActive">
        <img title="Change to English" style="cursor:pointer;" src=${euaFlag} height="20" alt="English" loading="lazy" class="d-block mx-auto">
      </div>
      <div onclick="selecionarIdioma('es')" id="es" class="w-auto d-flex align-items-center gap-3 cursor-pointer flagUnActive">
        <img title="Cambiar a español" style="cursor:pointer;" src=${esFlag} height="20" alt="Español" loading="lazy" class="d-block mx-auto">
      </div>
    </div>

    <li style="display:flex;max-height:40px;align-items:center;justify-content:center;gap:15px;" class="nav-item ms-xl-auto">
      <a href="https://www.instagram.com/santanas.ginger/" target="_blank"><i class="bi bi-instagram text-white"></i></a>
      <a href="https://wa.me/+5527996561133" target="_blank"><i class="bi bi-whatsapp text-white"></i></a>

      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./contact.html" class="px-3 bg-body-secondary-hover border nav-link rounded-3 text-base leading-6 fw-semibold text-center">
        ${t.contact}
      </a>
    </li>
  `;
};



// footer 

const footerList = () => {
  let brasilFlag = './assets/img/bg/brasilFlag.jpg';
  let argentinaFlag = './assets/img/bg/argentinaFlag.jpg';
  let worldFlag = './assets/img/bg/world.jpg';
  let logo = "./assets/img/bg/logo.png";

  if (langSelected === 'pt' || langSelected === 'es') {
    brasilFlag = '../assets/img/bg/brasilFlag.jpg';
    argentinaFlag = '../assets/img/bg/argentinaFlag.jpg';
    worldFlag = '../assets/img/bg/world.jpg';
    logo = "../assets/img/bg/logo.png";
  }

  const t = {
    pt: {
      sloganTitle: "Santanas Ginger",
      sloganDesc1: "Sediada em Marechal Floriano, ES – Brasil, a Santanas Ginger se dedica a fornecer gengibre de alta qualidade para os mercados nacional e internacional.",
      sloganDesc2: "Empresa familiar com tradição e forte compromisso com a excelência.",
      addressTitle: "Endereço",
      address: "Rua Magno Tadeu Effgen, 139 – Centro<br>Marechal Floriano/ES – Brasil",
      contactTitle: "Contato",
      productsTitle: "PRODUTOS",
      productList: ["Gengibre", "Inhame", "Batata Doce", "Limão"],
      regions: ["BRASIL", "ARGENTINA", "INTERNACIONAL"],
      navLinks: ["Início", "Sobre", "Produtos", "Exportação", "Contato"]
    },
    es: {
      sloganTitle: "Santanas Ginger",
      sloganDesc1: "Ubicada en Marechal Floriano, ES – Brasil, Santanas Ginger se dedica a ofrecer jengibre de alta calidad para los mercados nacionales e internacionales.",
      sloganDesc2: "Empresa familiar con tradición y fuerte compromiso con la excelencia.",
      addressTitle: "Dirección",
      address: "Rua Magno Tadeu Effgen, 139 – Centro<br>Marechal Floriano/ES – Brasil",
      contactTitle: "Contacto",
      productsTitle: "PRODUCTOS",
      productList: ["Jengibre", "Ñame", "Batata dulce", "Limón"],
      regions: ["BRASIL", "ARGENTINA", "INTERNACIONAL"],
      navLinks: ["Inicio", "Acerca de", "Productos", "Exportación", "Contacto"]
    },
    en: {
      sloganTitle: "Santanas Ginger",
      sloganDesc1: "Based in Marechal Floriano, ES – Brazil, Santanas Ginger is committed to providing premium quality ginger for both domestic and international markets.",
      sloganDesc2: "A family owned business with tradition and a strong commitment to excellence.",
      addressTitle: "Address",
      address: "Rua Magno Tadeu Effgen, 139 – Centro<br>Marechal Floriano/ES – Brazil",
      contactTitle: "Contact",
      productsTitle: "PRODUCTS",
      productList: ["Ginger", "Eddoes", "Sweet Potato", "Lime"],
      regions: ["BRAZIL", "ARGENTINA", "INTERNATIONAL"],
      navLinks: ["Home", "About", "Products", "Export", "Contact"]
    }
  };

  const lang = t[langSelected] || t.en;

  footer.innerHTML = `
    <div class="container  text-align-center-mobile">
      <div class="row gy-5">
        <div class="col-12 col-xl-6">
          <div class="pb-3 max-w-lg position-relative">
            <h2 class="text-body-emphasis leading-6 text-4xl tracking-tight fw-bold">
              ${lang.sloganTitle}
            </h2>
            <p class="m-0 mt-3 text-body-secondary text-lg leading-8">
              ${lang.sloganDesc1}
            </p>
            <p class="m-0 mt-2 text-body-secondary text-lg leading-8">
              ${lang.sloganDesc2}
            </p>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="row row-cols-1 row-cols-sm-2 gx-3 gy-5 ">
            <div class="d-flex flex-column  textoenderecoFooter">
              <div style="max-width:35px;" class="p-2 rounded-3 border bg-white ">
                <i class="bi bi-geo-alt text-body-emphasis"></i>
              </div>
              <div class="m-0 mt-3 text-body-emphasis fw-semibold">${lang.addressTitle}</div>
              <div class="m-0 mt-2 text-body-tertiary leading-7">${lang.address}</div>
            </div>

            <div   class="d-flex flex-column textoenderecoFooter">
              <div style="max-width:35px;" class="p-2 rounded-3 border bg-white">
                <i class="bi bi-telephone text-body-emphasis"></i>
              </div>
              <div class="m-0 mt-3 text-body-emphasis fw-semibold">${lang.contactTitle}</div>
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

    <div class="container mt-5  text-align-center-mobile">
      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-4">
        <div>
          <h6 class="fw-bold text-body-emphasis"> <i class="bi bi-boxes text-body-emphasis"></i> ${lang.productsTitle}</h6>
          <ul class="list-unstyled text-body-secondary">
            <a href="./services.html">
              ${lang.productList.map(item => `<li>${item}</li>`).join('')}
            </a>
          </ul>
        </div>
        <div>
          <h6 class="fw-bold text-body-emphasis ">
            <img src=${brasilFlag} width="20" alt="Brazil Flag" class="me-2">${lang.regions[0]}
          </h6>
          <p class="text-body-secondary">
            Hiago Santana<br>
            Email: <a href="mailto:hiago@santanasginger.com" class="text-decoration-none text-body-secondary">hiago@santanasginger.com</a><br>
            Phone: <a href="tel:+5527999207338" class="text-decoration-none text-body-secondary">+55 27 99920 7338</a>
          </p>
        </div>
        <div>
          <h6 class="fw-bold text-body-emphasis">
            <img src=${argentinaFlag} width="20" alt="Argentina" class="me-2">${lang.regions[1]}
          </h6>
          <p class="text-body-secondary">
            Lays Santana<br>
            Email: <a href="mailto:lays@santanasginger.com" class="text-decoration-none text-body-secondary">lays@santanasginger.com</a><br>
            Phone: <a href="tel:+5527999701585" class="text-decoration-none text-body-secondary">+55 27 99970 1585</a>
          </p>
        </div>
        <div>
          <h6 class="fw-bold text-body-emphasis">
            <img src=${worldFlag} width="20" alt="World Icon" class="me-2">${lang.regions[2]}
          </h6>
          <p class="text-body-secondary">
            Patrick Santana<br>
            Email: <a href="mailto:patrick@santanasginger.com" class="text-decoration-none text-body-secondary">patrick@santanasginger.com</a><br>
            Phone: <a href="tel:+5527996561133" class="text-decoration-none text-body-secondary">+55 27 99656 1133</a>
          </p>
        </div>
      </div>
    </div>

    <div class="container text-align-center-mobile">
      <hr class="my-6 text-body-emphasis opacity-10">
      <div class="d-flex flex-column flex-xl-row gap-5 justify-content-between align-items-xl-center">
        <div class="order-first order-xl-last">
          <ul class="nav row gy-4 gx-sm-4 row-cols-2 row-cols-sm-auto">
            ${lang.navLinks.map((item, index) => {
              const pages = ["index.html", "about.html", "services.html", "exportacao.html", "contact.html"];
              return `<li class="nav-item"><a href="./${pages[index]}" class="p-0 text-body-secondary nav-link leading-6 text-sm">${item}</a></li>`;
            }).join('')}
          </ul>
        </div>
        <div>
          <a  href="./index.html" class="link-body-emphasis d-flex align-items-center text-decoration-none imagemLogoFooter ">
            <img src=${logo} height="80" alt="Santanas Ginger Logo" loading="lazy">
          </a>
        </div>
        <div class="order-last order-xl-first">
          <p class="mb-0 text-body-secondary leading-6 text-sm">
            © 2025 <a href="https://www.lucasrd.site" target="_blank" class="text-decoration-none">
              <em>Lucas Roncheti CodeDesigner </em>
            </a>
          </p>
        </div>
      </div>
    </div>
  `;
};



menuList();
footerList()