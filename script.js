// Seleciona todos os títulos h1
const titles = document.querySelectorAll('h1');

// Função para animar os títulos
const animateTitles = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-title');
            observer.unobserve(entry.target); // Remove o observador após a animação disparar
        }
    });
};

// Configura o IntersectionObserver
const observer = new IntersectionObserver(animateTitles, {
    root: null, // Observa a viewport
    threshold: 0.2, // Dispara quando 20% do elemento está visível
});

// Observa cada título h1
titles.forEach(title => {
    observer.observe(title);
});
