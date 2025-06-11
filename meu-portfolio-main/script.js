// Inicializa as animações da biblioteca AOS
AOS.init({
  duration: 1000,
  once: true,
});

const body = document.getElementById('body');
const toggleBtn = document.getElementById('toggleTheme');
const themeOverlay = document.getElementById('themeOverlay');
const techIconsContainer = document.querySelector('.bottom-5');
if (techIconsContainer) techIconsContainer.style.zIndex = '10';

let isTransitioning = false;

function animateThemeTransition(theme) {
  if (isTransitioning) return;
  isTransitioning = true;

  requestAnimationFrame(() => {
    const color = theme === 'dark'
      ? 'radial-gradient(circle at top left, #5b0e19, #1c0b0b)'
      : 'radial-gradient(circle at top left, #d0e8ff, #a0c4ff)';

    themeOverlay.style.background = color;
    themeOverlay.style.transition = 'opacity 1.5s ease';
    themeOverlay.style.opacity = '1';
    themeOverlay.style.zIndex = '1';

    setTimeout(() => {
      body.classList.remove('dark-theme', theme === 'light');
      body.classList.remove('light-theme', theme === 'dark');
      body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
      localStorage.setItem('theme', theme);
    }, 700);

    setTimeout(() => {
      themeOverlay.style.opacity = '0';
      themeOverlay.style.zIndex = '0';
      isTransitioning = false;
    }, 1600);
  });
}

// Aplica tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
});

// Alterna o tema com animação
toggleBtn.addEventListener('click', () => {
  if (isTransitioning) return;
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  animateThemeTransition(nextTheme);
});

// Botões com interações
const emailBtn = document.getElementById('emailBtn');
const cvBtn = document.getElementById('cvBtn');

emailBtn.addEventListener('click', () => {
  alert('Abrindo seu programa de email para enviar para Leo!');
});

cvBtn.addEventListener('click', () => {
  alert('Baixando o currículo de Leonardo Rodrigues...');
});

// Reflexo nos botões
const buttons = document.querySelectorAll('.reflex-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('animate-pulse');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('animate-pulse');
  });
});

// Animação nos ícones de tecnologias
const techIcons = document.querySelectorAll('.bottom-5 img');
techIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('scale-110');
    icon.classList.add('transition-transform');
  });
  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('scale-110');
  });
});

// Log para links externos
const links = document.querySelectorAll('a[target="_blank"]');
links.forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Você abriu o link: ${link.href}`);
  });
});

// Levantar card principal ao passar o mouse
const mainCard = document.querySelector('.glass');
mainCard.classList.add('transition-transform', 'duration-300');
mainCard.addEventListener('mouseenter', () => {
  mainCard.classList.add('-translate-y-2');
});
mainCard.addEventListener('mouseleave', () => {
  mainCard.classList.remove('-translate-y-2');
});
