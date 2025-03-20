const list = document.getElementById('menu-list');


const menuList = () => {
    list.innerHTML = `
                             <li class="nav-item ms-xl-auto">
                                <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./index.html" class="px-3  bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold" aria-current="page">
	                                Home
	                            </a>
                            </li>

                            <li class="nav-item">
                                <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href=" ./services.html " class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold ">
	                                Products
	                            </a>
                            </li>

                            <li class="nav-item">
                                <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href=" ./exportacao.html " class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold ">
                                Export
                            </a>

                                <li class="nav-item ">
                                    <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./about.html " class="px-3 bg-green-hover nav-link rounded-3 text-base leading-6 fw-semibold ">
                                    About
                                    </a>
                                </li>

                                
                                   <li class="nav-item ms-xl-auto ">
                                <a style="color: white;" onmouseover="this.style.color='#4caa47'" onmouseout="this.style.color='white'" href="./contact.html " class="px-3  bg-body-secondary-hover border nav-link rounded-3 text-base leading-6 fw-semibold text-center ">
	                                Contact us
	                            </a>
                            </li>
        `
}


menuList();