function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    loadTranslations(lang);
}

function loadTranslations(lang) {
    const translations = {
        index: {
            en: {
                title: "Ridstar | Premium Electric Bikes",
                heroText: "The Future of <span class='highlight'>Electric</span> Mobility",
                heroDescription: "Discover the perfect blend of power, style, and sustainability with our premium electric bikes. Experience the revolution in urban transportation."
            },
            bg: {
                title: "Ридстар | Премиум електрически велосипеди",
                heroText: "Бъдещето на <span class='highlight'>електрическата</span> мобилност",
                heroDescription: "Открийте перфектната комбинация от мощност, стил и устойчивост с нашите електрически велосипеди. Изпитайте революцията в градския транспорт."
            }
        },
        about: {
            en: {
                title: "About Us | Ridstar",
                aboutText: "Learn more about our mission and values."
            },
            bg: {
                title: "За нас | Ридстар",
                aboutText: "Научете повече за нашата мисия и ценности."
            }
        },
        contact: {
            en: {
                title: "Contact Us | Ridstar",
                contactText: "Get in touch with us for any inquiries.",
                callUs: "Call Us",
                callDetails: "+1 234 567 890\nMon-Fri, 9am-6pm",
                emailUs: "Email Us",
                emailDetails: "info@ridstar.com\nWe reply within 24 hours",
                visitUs: "Visit Us",
                visitDetails: "123 Bike Street\nSofia, Bulgaria",
                name: "Name",
                email: "Email",
                subject: "Subject",
                selectSubject: "Select a subject",
                message: "Message",
                sendMessage: "Send Message"
            },
            bg: {
                title: "Свържете се с нас | Ридстар",
                contactText: "Свържете се с нас за всякакви запитвания.",
                callUs: "Обадете се на нас",
                callDetails: "+1 234 567 890\nПн-Пет, 9ч-18ч",
                emailUs: "Пишете ни",
                emailDetails: "info@ridstar.com\nОтговаряме в рамките на 24 часа",
                visitUs: "Посетете ни",
                visitDetails: "123 Велосипедна улица\nСофия, България",
                name: "Име",
                email: "Имейл",
                subject: "Тема",
                selectSubject: "Изберете тема",
                message: "Съобщение",
                sendMessage: "Изпрати съобщение"
            }
        }
    };

    // Determine the current page
    const currentPage = document.body.dataset.page;

    // Update the page content based on the selected language
    document.title = translations[currentPage][lang].title;
    document.querySelector('.hero-text h1').innerHTML = translations[currentPage][lang].heroText || '';
    document.querySelector('.hero-text p').innerText = translations[currentPage][lang].heroDescription || '';
    document.querySelector('.about-text').innerText = translations[currentPage][lang].aboutText || '';
    document.querySelector('.contact-text').innerText = translations[currentPage][lang].contactText || '';
    
    // Contact page specific translations
    if (currentPage === 'contact') {
        document.querySelector('.call-us').innerText = translations.contact[lang].callUs;
        document.querySelector('.call-details').innerText = translations.contact[lang].callDetails;
        document.querySelector('.email-us').innerText = translations.contact[lang].emailUs;
        document.querySelector('.email-details').innerText = translations.contact[lang].emailDetails;
        document.querySelector('.visit-us').innerText = translations.contact[lang].visitUs;
        document.querySelector('.visit-details').innerText = translations.contact[lang].visitDetails;
        document.querySelector('.name').innerText = translations.contact[lang].name;
        document.querySelector('.email').innerText = translations.contact[lang].email;
        document.querySelector('.subject').innerText = translations.contact[lang].subject;
        document.querySelector('.select-subject').innerText = translations.contact[lang].selectSubject;
        document.querySelector('.message').innerText = translations.contact[lang].message;
        document.querySelector('.send-message').innerText = translations.contact[lang].sendMessage;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('selectedLanguage') || 'bg'; // Default to English
    document.getElementById('language-select').value = lang; // Set the selector to the stored language
    loadTranslations(lang);
});
