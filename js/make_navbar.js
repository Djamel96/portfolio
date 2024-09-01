document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            about: 'About',
            projects: 'Projects',
            courses: 'Courses',
            contact: 'Contact Me',
            aboutSection: {
                title: 'Djamel Madani',
                content: "Web and mobile application developer"
            },
            description: {
                title: 'Presentation',
                content: `&nbsp;&nbsp;&nbsp;&nbsp;I am an Information Systems Engineer and Web and Mobile Application Developer, passionate about creating cutting-edge solutions. Throughout my career, I have successfully mastered all stages of the web and mobile application development lifecycle, consistently delivering exceptional results. My commitment to excellence is reflected in my pursuit of high quality, strict adherence to project deadlines, and ability to write clean and efficient code. With a keen eye for detail and a drive for optimal performance, I regularly exceed expectations.<br><br>

    &nbsp;&nbsp;&nbsp;&nbsp;One of my strengths lies in my ability to make innovative proposals and offer valuable suggestions to improve product functionality. I thrive in dynamic and collaborative environments, where I effectively contribute to the team's efforts while excelling as an individual.<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;If you are looking for a \<b\>Mobile Application Developer\<\/b\> who combines technical expertise, creativity, and a continuous pursuit of perfection, look no further. I look forward to putting my talents to work for you and devoting all my determination to creating exceptional mobile experiences.`,
            },
            contactMeOn: {
                content: 'You can contact me on:'
            },
            projectSection: {
                title: 'Projects completed',
                content: 'I have been a mobile application specialist since 2018, and here is the list of online applications on PlayStore and AppStore.'
            },
            contactSection: {
                title: 'Contact Me',
                content: "Don't hesitate to contact me any time !"
            }
        },
        fr: {
            about: 'À propos',
            projects: 'Projets',
            courses: 'Cours',
            contact: 'Contactez-moi',
            aboutSection: {
                title: 'À Propos',
                content: "Développeur d'applications web et mobiles"
            },
            description: {
                title: 'Presentation',
                content: `&nbsp;&nbsp;&nbsp;&nbsp;Je suis ingénieur en systèmes d'information et développeur d'applications web et mobiles, passionné par la création de solutions de pointe. Tout au long de ma carrière, j\'ai réussi à maîtriser toutes les étapes du cycle de développement des applications web et mobiles, fournissant constamment des résultats exceptionnels. Mon engagement envers l'excellence se reflète dans ma recherche de qualité supérieure, le respect strict des délais de projet et ma capacité à écrire un code propre et efficace. Avec un sens aigu du détail et une volonté d'obtenir des performances optimales, je dépasse régulièrement les attentes.<br><br>
                       

                        
                          &nbsp;&nbsp;&nbsp;&nbsp;L'un de mes points forts réside dans ma capacité à faire des propositions novatrices et à offrir des suggestions précieuses pour améliorer les fonctionnalités des produits. Je m'épanouis dans des environnements dynamiques et collaboratifs, où je contribue efficacement aux efforts de l'équipe tout en excellant en tant qu'individu.<br><br>
                       

                         
                            &nbsp;&nbsp;&nbsp;&nbsp;Si vous recherchez un <b>développeur d'applications mobiles</b> alliant expertise technique, créativité et recherche permanente de la perfection, ne cherchez plus. Je suis impatient de mettre à votre profit mes talents et de consacrer toute ma détermination à la création d'expériences mobiles exceptionnelles.
                       `,
            },
            contactMeOn: {
                content: 'Vous pouvez me contacter sur :'
            },
            projectSection: {
                title: 'Projets realisés',
                content: 'Je suis spécialiste des applications mobiles depuis 2018, et voici la liste des applications en ligne sur PlayStore et AppStore.'
            },
            contactSection: {
                title: 'Me Contacter',
                content: "N'hésitez pas à me contacter à tout moment !"
            }
        }
    };

    function getBrowserLanguage() {
        //  navigator.language.slice(0, 2); // e.g., "en" or "fr"
    }

    function setLanguage(lang) {
        const texts = translations[lang] || translations['en'];

        document.querySelectorAll('.nav-link').forEach(link => {
            link.textContent = texts[link.getAttribute('data-key')];
        });

        document.querySelector('#dev_title').textContent = texts.aboutSection.content;

        const profileDescription = document.getElementById('profile_description');
        if (profileDescription) {
            profileDescription.innerHTML = `<p style="text-align: justify; color: #4A4A4A;" >${texts.description.content}</p>`;
        }


        document.getElementById('publishedProject').innerHTML = `<h3>${texts.projectSection.title}</h3>`

        document.getElementById('project_description').innerHTML = `<p style="color: #4A4A4A;">${texts.projectSection.content}</p>`;

        document.getElementById('contact_me_on').innerHTML = `<h3>${texts.contactSection.title}</h3>`
        document.getElementById('dont_hesitate').innerHTML = `<p>${texts.contactSection.content}</p>`;
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

    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
