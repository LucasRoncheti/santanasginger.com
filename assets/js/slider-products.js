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


let currentSlide = 0;

const titleEl = document.getElementById('slide-title');
const headingEl = document.getElementById('slide-heading');
const descriptionEl = document.getElementById('slide-description');
const imageEl = document.getElementById('slide-image');
const thumbnailsEl = document.getElementById('thumbnails');
const weightEl = document.getElementById('weight');
const palletsEl = document.getElementById('pallets');
const sizeEl = document.getElementById('size');

function updateSlide(index) {
    const slide = slides[index];
    currentSlide = index;

    titleEl.textContent = slide.title;
    headingEl.textContent = slide.heading;
    descriptionEl.textContent = slide.description;
    imageEl.src = slide.image;
    weightEl.textContent = slide.weight
    palletsEl.textContent = slide.pallets
    sizeEl.textContent = slide.size


    // Atualiza o destaque da miniatura ativa
    document.querySelectorAll('.thumbnail-img').forEach((thumb, i) => {
        thumb.classList.toggle('border-primary', i === currentSlide);
        thumb.classList.toggle('opacity-100', i === currentSlide);
        thumb.classList.toggle('opacity-50', i !== currentSlide);
    });
}

// Botões anterior e próximo
document.getElementById('prev-slide').addEventListener('click', () => {
    const index = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(index);
});

document.getElementById('next-slide').addEventListener('click', () => {
    const index = (currentSlide + 1) % slides.length;
    updateSlide(index);
});

// Gerar miniaturas
slides.forEach((slide, index) => {
    const img = document.createElement('img');
    img.src = slide.thumb;
    img.alt = `Thumbnail ${index + 1}`;
    img.className = `thumbnail-img rounded border border-2 p-1`;
    img.style.width = '60px';
    img.style.cursor = 'pointer';
    img.classList.add(index === 0 ? 'border-secondary' : 'border-secondary', index === 0 ? 'opacity-100' : 'opacity-50');

    img.addEventListener('click', () => {
        updateSlide(index);
    });

    thumbnailsEl.appendChild(img);
});

// Inicializa o primeiro slide
updateSlide(currentSlide);