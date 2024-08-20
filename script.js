document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const headerMenu = document.querySelector('.header-menu');

    menuIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    });
});


function changeLanguage(lang) {
    const content = {
        es: {
            abouttext: `
                <h2>Acerca de Mí</h2>
                <p>Hola, soy <strong>Angela Fernandez</strong>, una estudiante de cuarto año en Tecnología Digital y Multimedia con un fuerte interés en la programación web, desarrollo de aplicaciones, creación multimedia y gestión de redes sociales. He participado activamente en grupos como <strong>TomaUno</strong> e <strong>IAESTE</strong>, completé una pasantía en Túnez y trabajé en la Oficina de Acción Internacional de la UPV.</p>
                <p>He participado en varios proyectos ENHANCE y estaré en un programa de intercambio en la National Technology University de Taiwán en 2024/25.</p>
            `,
            projects: `
                <h2>Proyectos</h2>
                <div class="project-item">
                    <h3>Fundación Servipoli</h3>
                    <p>Creación de Páginas Web y Auxiliar de Apoyo en la Oficina (Septiembre 2023 - Julio 2024). Trabajo en la Oficina de Acción Internacional de la Universitat Politècnica de València.</p>
                </div>
                <div class="project-item">
                    <h3>IAESTE Valencia</h3>
                    <p>Marketing IAESTE Valencia (Septiembre 2022 - Enero 2024). Creación de estrategias de marketing digital como reels y publicaciones para IAESTE Valencia.</p>
                </div>
                <div class="project-item">
                    <h3>TuniStudio</h3>
                    <p>Edición y creación multimedia (Julio 2023). Pasantía en Túnez con IAESTE. Tareas: asistente de grabación y edición de videos para cortometrajes.</p>
                </div>
            `,
            contact: `
                <h2>Contacto</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.294 4.58a3 3 0 003.411 0L21 8M4 7a2 2 0 00-1 1.732V16a2 2 0 001 1.732m16-1.732A2 2 0 0021 16V8a2 2 0 00-1-1.732m-7 5.332a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <p><a href="mailto:angelafernandez12tres@gmail.com">angelafernandez12tres@gmail.com</a></p>
                </div>
                <div class="contact-item">
                    <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 11-8 0 6 6 0 018 0zM5.121 14.828A2.5 2.5 0 007 16.5h10a2.5 2.5 0 001.879-1.672A5.978 5.978 0 0018 14h-6a5.978 5.978 0 00-6.879-1.172z"></path>
                    </svg>
                    <p><a href="https://www.linkedin.com/in/angelafernandez-fernandez">Angela Fernandez - LinkedIn</a></p>
                </div>
            </div>
            <form class="contact-form" action="your-server-endpoint" method="post">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
        
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required>
        
                <label for="message">Mensaje:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
        
                <button type="submit">Enviar</button>
            </form>
            `
        },
        en: {
            abouttext: `
                <h2>About Me</h2>
                <p>Hello, I'm <strong>Angela Fernandez</strong>, a fourth-year student in Digital Technology and Multimedia with a strong interest in web programming, app development, multimedia creation, and social media management. I've been actively involved in groups such as <strong>TomaUno</strong> and <strong>IAESTE</strong>, completed an internship in Tunisia, and worked at the Office of International Action at UPV.</p>
                <p>I have been involved in various ENHANCE projects and will be in an exchange program at the National Technology University of Taiwan in 2024/25.</p>
            `,
            projects: `
                <h2>Projects</h2>
                <div class="project-item">
                    <h3>Fundación Servipoli</h3>
                    <p>Website Creation and Office Support Assistant (September 2023 - July 2024). Work at the Office of International Action at Universitat Politècnica de València.</p>
                </div>
                <div class="project-item">
                    <h3>IAESTE Valencia</h3>
                    <p>Marketing IAESTE Valencia (September 2022 - January 2024). Creation of digital marketing strategies such as reels and posts for IAESTE Valencia.</p>
                </div>
                <div class="project-item">
                    <h3>TuniStudio</h3>
                    <p>Editing and multimedia creation (July 2023). Internship in Tunisia with IAESTE. Tasks: recording assistant and video editing for short films.</p>
                </div>
            `,
            contact: `
                <h2>Contact</h2>
                <p>Email: <a href="mailto:angelafernandez12tres@gmail.com">angelafernandez12tres@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/angelafernandez-fernandez">Angela Fernandez - LinkedIn</a></p>
                <form class="contact-form">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" rows="4" required></textarea><br><br>
                    <button type="submit">Send</button>
                </form>
            `
        }
    };

    document.querySelector('#abouttext').innerHTML = content[lang].abouttext;
    document.querySelector('#projects').innerHTML = content[lang].projects;
    document.querySelector('#contact').innerHTML = content[lang].contact;
}


function showProjectInfo(infoId) {
    var projectInfo = document.getElementById(infoId);
    var isVisible = projectInfo.style.display === "block";

    // Hide all other project info sections
    var allInfos = document.querySelectorAll('.project-info');
    allInfos.forEach(function(info) {
        info.style.display = "none";
    });

    // Toggle the selected project info
    projectInfo.style.display = isVisible ? "none" : "block";
}

// Selección de elementos
// Selección de elementos
// Selección de elementos
const modalButtons = document.querySelectorAll('.project-button');
const closeBtns = document.querySelectorAll('.close-btn');
const modals = document.querySelectorAll('.modal');

// Función para abrir el modal específico
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
};

// Función para cerrar cualquier modal
const closeModal = (modal) => {
    modal.classList.remove('show');
};

// Asignar eventos a los botones "Ver Más"
modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Asignar evento a los botones de cerrar
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        closeModal(modal);
    });
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

let currentSlide = 0;
const carouselSlides = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

function showNextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
    }
}

function showPrevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

function updateCarousel() {
    const slideWidth = document.querySelector('.carousel-slide img').clientWidth + 20; // +20px for margin
    carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.querySelector('.next-btn').addEventListener('click', showNextSlide);
document.querySelector('.prev-btn').addEventListener('click', showPrevSlide);
