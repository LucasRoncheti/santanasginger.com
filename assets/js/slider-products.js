const slides = [{
        title: 'Ginger',
        heading: 'Ginger Cultivation and Quality Assurance',
        description: 'At Santana, we understand that premium ginger is essential for the success of your business or kitchen. Our ginger cultivation and quality assurance services cover a wide range of needs: Careful Harvesting, Post-Harvest Handling, Quality Control, Sustainable Farming Practices, Consistent Supply, and Custom Packaging Solutions.',
        image: './assets/img/bg/bg2.jpg',
        thumb: './assets/img/bg/bg2.jpg'
    },
    {
        title: 'Sweet Potato',
        heading: 'Sweet Potato Cultivation and Supply',
        description: 'Our experienced farmers bring years of expertise to every harvest. We focus on sustainable farming practices and adhere to the highest quality standards. From planting to distribution, we ensure fresh, nutritious, and high-quality sweet potatoes with efficiency and professionalism.',
        image: './assets/img/bg/bg3.jpg',
        thumb: './assets/img/bg/bg3.jpg'
    },
    {
        title: 'Yam',
        heading: 'Yam Cultivation and Distribution',
        description: 'Our dedicated team applies years of expertise to ensure the highest quality yams. With a focus on sustainable farming and rigorous quality standards, we deliver fresh, flavorful, and nutritious yams efficiently and professionally, from planting to delivery. Welcome to Santana, where tradition meets innovation. Our dedication to quality and customer satisfaction defines every product we offer. Explore our diverse range of products designed to meet your needs: Premium Ginger, Sweet Potatoes, Yams, and more.',
        image: './assets/img/bg/bg4.jpg',
        thumb: './assets/img/bg/bg4.jpg'
    },
    {
        title: 'Lime',
        heading: 'Lime Cultivation and Distribution',
        description: 'Our expertise ensures the finest Tahiti limes, cultivated with care and precision. We prioritize sustainable practices and strict quality control to deliver fresh, juicy, and vibrant limes, perfect for your business or kitchen needs.',
        image: './assets/img/bg/limes.jpg',
        thumb: './assets/img/bg/limes.jpg'
    }
];

let currentSlide = 0;

const titleEl = document.getElementById('slide-title');
const headingEl = document.getElementById('slide-heading');
const descriptionEl = document.getElementById('slide-description');
const imageEl = document.getElementById('slide-image');
const thumbnailsEl = document.getElementById('thumbnails');

function updateSlide(index) {
    const slide = slides[index];
    currentSlide = index;

    titleEl.textContent = slide.title;
    headingEl.textContent = slide.heading;
    descriptionEl.textContent = slide.description;
    imageEl.src = slide.image;

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