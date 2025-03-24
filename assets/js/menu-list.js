const list = document.getElementById('menu-list');

const menuList = () => {
    list.innerHTML = `
    <li class="nav-item">
      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./index.html" class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold">
        Home
      </a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="./services.html"  data-bs-toggle="dropdown" aria-expanded="false">
        Products
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./services.html#products">Our Products</a></li>
        <li><a class="dropdown-item" href="./services.html#gallery">Gallery</a></li>
        <li><a class="dropdown-item" href="./services.html#resources">Resources</a></li>
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

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white px-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./about.html#welcome">The Company</a></li>
        <li><a class="dropdown-item" href="./about.html#ourhistory">Our History</a></li>
        <li><a class="dropdown-item" href="./about.html#ourValues">Our Values</a></li>
        <li><a class="dropdown-item" href="./about.html#aboutus">About Us</a></li>
        <li><a class="dropdown-item" href="./about.html#certificates">Certificates</a></li>
        <li><a class="dropdown-item" href="./about.html#team">The Dream Team</a></li>
       
      </ul>
    </li>

    <li class="nav-item ms-xl-auto">
      <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./contact.html" class="px-3 bg-body-secondary-hover border nav-link rounded-3 text-base leading-6 fw-semibold text-center">
        Contact Us
      </a>
    </li>
  `;
};

menuList();