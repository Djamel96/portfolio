document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            about: 'About',
            projects: 'Projects',
            courses: 'Courses',
            contact: 'Contact Me',
            aboutSection: {
                title: 'About Us',
                content: 'This is the About section.'
            },
            projectSection: {
                title: 'Our Projects',
                content: 'This is the Projects section.'
            },
            contactSection: {
                title: 'Contact Us',
                content: 'This is the Contact section.'
            }
        },
        fr: {
            about: 'À propos',
            projects: 'Projets',
            courses: 'Cours',
            contact: 'Contactez-moi',
            aboutSection: {
                title: 'À Propos',
                content: 'Ceci est la section À propos.'
            },
            projectSection: {
                title: 'Nos Projets',
                content: 'Ceci est la section Projets.'
            },
            contactSection: {
                title: 'Nous Contacter',
                content: 'Ceci est la section Contact.'
            }
        }
    };

    function getBrowserLanguage() {
        return navigator.language.slice(0, 2); // e.g., "en" or "fr"
    }

    function setLanguage(lang) {
        const texts = translations[lang] || translations['en'];

        document.querySelectorAll('.nav-link').forEach(link => {
            link.textContent = texts[link.getAttribute('data-key')];
        });

        // document.querySelector('#about h1').textContent = texts.aboutSection.title;
        // document.querySelector('#about p').textContent = texts.aboutSection.content;

        // document.querySelector('#project_section h1').textContent = texts.projectSection.title;
        // document.querySelector('#project_section p').textContent = texts.projectSection.content;

        // document.querySelector('#contact h1').textContent = texts.contactSection.title;
        // document.querySelector('#contact p').textContent = texts.contactSection.content;
    }

    setLanguage(getBrowserLanguage());

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
});
