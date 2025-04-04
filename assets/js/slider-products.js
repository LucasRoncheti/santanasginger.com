const slides = [{
        title: 'Ginger',
        heading: 'Ginger Cultivation and Quality Assurance',
        description: 'Premium ginger grown with sustainable practices, strict quality control, and custom packaging solutions.',
        image: './assets/img/bg/bg2.jpg',
        thumb: './assets/img/bg/bg2.jpg',
        weight: '13.6kg',
        pallets: '70 ',
        size: '+ 250g'
    },
    {
        title: 'Sweet Potato',
        heading: 'Sweet Potato Cultivation and Supply',
        description: 'Sustainably grown sweet potatoes with high quality standards and efficient distribution.',
        image: './assets/img/bg/bg3.jpg',
        thumb: './assets/img/bg/bg3.jpg',
        weight: '10kg',
        pallets: '110 ',
        size: 'S/M/L2/L2'
    },
    {
        title: 'Eddoes',
        heading: 'Eddoes Cultivation and Distribution',
        description: 'Fresh, nutritious eddoes produced with care, blending tradition, innovation, and sustainability.',
        image: './assets/img/bg/bg4.jpg',
        thumb: './assets/img/bg/bg4.jpg',
        weight: '18kg',
        pallets: '70 ',
        size: 'Sortido'
    },
    {
        title: 'Lime',
        heading: 'Lime Cultivation and Distribution',
        description: 'Juicy Tahiti limes grown with precision and delivered fresh with a focus on quality and sustainability.',
        image: './assets/img/bg/limes.jpg',
        thumb: './assets/img/bg/limes.jpg',
        weight: '4,5kg',
        pallets: '240 ',
        size: '42 48, 54, 60, 63'
    }
];

// Galeria de imagens separadas por produto
const galleries = {
    'Lime': [
        './assets/img/gallery/limao/01.jpeg',
        './assets/img/gallery/limao/02.jpeg',
        './assets/img/gallery/limao/03.jpeg',

    ],
    'Ginger': [
        './assets/img/gallery/gengibre/01.jpeg',
        './assets/img/gallery/gengibre/02.jpeg',
        './assets/img/gallery/gengibre/03.jpeg',
        './assets/img/gallery/gengibre/04.jpeg'
    ],
    'Sweet Potato': [
        './assets/img/gallery/batatadoce/01.jpeg',
        './assets/img/gallery/batatadoce/02.jpeg',
        './assets/img/gallery/batatadoce/03.jpeg',
        './assets/img/gallery/batatadoce/04.jpeg'
    ],
    'Eddoes': [
        './assets/img/gallery/inhame/01.jpeg',
        './assets/img/gallery/inhame/02.jpeg',
        './assets/img/gallery/inhame/03.jpeg',

    ]
};



const titleEl = document.getElementById('slide-title');
const headingEl = document.getElementById('slide-heading');
const descriptionEl = document.getElementById('slide-description');
const imageEl = document.getElementById('slide-image');
const thumbnailsEl = document.getElementById('thumbnails');
const weightEl = document.getElementById('weight');
const palletsEl = document.getElementById('pallets');
const sizeEl = document.getElementById('size');

// Função para mudar a galeria ao clicar no card
let currentGallery = []; // Nova variável para as imagens da galeria
let currentGalleryIndex = 0; // Índice da imagem atual na galeria

function showGallery(productName) {
    const productSlides = slides.find(slide => slide.title === productName);
    const productGallery = galleries[productName];

    if (!productSlides || !productGallery) {
        console.error('Produto ou galeria não encontrados!');
        return;
    }

    // Atualiza dados atuais
    currentGallery = productGallery;
    currentGalleryIndex = 0;

    // Atualiza informações do produto
    titleEl.textContent = productSlides.title;
    descriptionEl.textContent = productSlides.description;
    imageEl.src = currentGallery[currentGalleryIndex];
    weightEl.textContent = productSlides.weight;
    palletsEl.textContent = productSlides.pallets;
    sizeEl.textContent = productSlides.size;

    // Atualiza miniaturas
    thumbnailsEl.innerHTML = ''; // Limpa miniaturas

    currentGallery.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Imagem ${index + 1} ${productName}`;
        img.className = `thumbnail-img rounded border border-2 p-1  `;
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.cursor = 'pointer';
        img.classList.add(index === currentGalleryIndex ? 'border-primary' : 'border-secondary', index === currentGalleryIndex ? 'opacity-100' : 'opacity-50');

        img.addEventListener('click', () => {
            currentGalleryIndex = index;
            imageEl.src = currentGallery[currentGalleryIndex];
            updateThumbnailHighlight();
        });

        thumbnailsEl.appendChild(img);
    });

    updateThumbnailHighlight();
}

function updateThumbnailHighlight() {
    document.querySelectorAll('.thumbnail-img').forEach((thumb, i) => {
        thumb.classList.toggle('border-primary', i === currentGalleryIndex);
        thumb.classList.toggle('opacity-100', i === currentGalleryIndex);
        thumb.classList.toggle('opacity-50', i !== currentGalleryIndex);
    });
}

// Botões anterior e próximo
document.getElementById('prev-slide').addEventListener('click', () => {
    if (currentGallery.length > 0) {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
        imageEl.src = currentGallery[currentGalleryIndex];
        updateThumbnailHighlight();
    }
});

document.getElementById('next-slide').addEventListener('click', () => {
    if (currentGallery.length > 0) {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
        imageEl.src = currentGallery[currentGalleryIndex];
        updateThumbnailHighlight();
    }
});

showGallery('Ginger')