/* script.js */

// Animação de fade-in ao rolar a página
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));


// Efeito de Digitação na seção Sobre Mim
function typeWriter(elementId, text, speed) {
  const element = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const aboutText = `Sou estudante de Ciência da Computação, apaixonado por programação, robótica e automação. Tenho experiência com back-end, Raspberry Pi e projetos premiados em tecnologia.`;

// script.js - CÓDIGO ATUALIZADO
//
// Esta função observa a seção "Sobre Mim" e, quando ela entra na tela,
// inicia a animação de digitação e a animação da imagem de perfil.
//

const aboutSection = document.getElementById('sobre');


const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Inicia a animação de digitação do texto
      typeWriter('typed-text', aboutText, 25);

      // Localiza a imagem de perfil na página
      const profilePic = document.querySelector('.profile-pic');
      
      // Se a imagem for encontrada, adiciona a classe 'visible'
      // que a faz aparecer suavemente (animação definida no CSS).
      if (profilePic) {
        profilePic.classList.add('visible');
      }

      // Para de observar a seção. A animação acontece apenas uma vez.
      aboutObserver.unobserve(aboutSection);
    }
  });
}, { threshold: 0.5 });

// Começa a observar a seção "Sobre Mim"
aboutObserver.observe(aboutSection);


// Efeito de Tilt nos cards de projeto
const projectCards = document.querySelectorAll('#projetos ul li');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const angleX = (midY - y) / 10;
    const angleY = (x - midX) / 10;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
  });
});


console.log("🚀 Portfólio carregado com animações e efeitos aprimorados!");

/* Efeito de partículas de fundo */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#58a6ff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#58a6ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});