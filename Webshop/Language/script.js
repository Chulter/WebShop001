const langToggles = document.querySelectorAll('.lang-toggle');

const translations = {
    'en': {
        'cim' : 'Best sneaker store ever',
        'stylishSneakers': 'Stylish Sneakers',
        'sneakersDescription': 'Comfortable sneakers for your everyday style.',
        'classicBoots': 'Classic Boots',
        'bootsDescription': 'Elegant boots for any occasion.',
        'sportyShoes': 'Sporty Shoes',
        'sportyShoesDescription': 'Perfect shoes for your active lifestyle.',
        'buyNow': 'Buy Now'
    },
    'hu': {
        'cim' : 'Nagymama legszebb wet álma',
        'stylishSneakers': 'Divatos Cipők',
        'sneakersDescription': 'Kényelmes cipők mindennapi stílusodhoz.',
        'classicBoots': 'Klasszikus Csizmák',
        'bootsDescription': 'Elegáns csizmák bármilyen alkalomra.',
        'sportyShoes': 'Sportcipők',
        'sportyShoesDescription': 'Tökéletes cipők aktív életmódodhoz.',
        'buyNow': 'Vásárlás'
    }
};

let currentLang = 'en';

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}

langToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        currentLang = this.getAttribute('data-lang');
        updateLanguage();
    });
});

updateLanguage();
