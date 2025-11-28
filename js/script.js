// Crear partículas decorativas
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Color aleatorio (dorado o púrpura claro)
        const colors = ['#D4AF37', '#8E44AD', '#F1C40F'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Duración y delay aleatorios
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Efecto de escritura para el nombre
    const nameElement = document.querySelector('.guest-name p');
    const originalName = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalName.length) {
            nameElement.textContent += originalName.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Iniciar efecto de escritura después de un breve retraso
    setTimeout(typeWriter, 1500);
    
    // Efecto de confeti al hacer clic en la tarjeta de la invitada
    const guestCard = document.querySelector('.guest-card');
    guestCard.addEventListener('click', createConfetti);
    
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.background = ['#D4AF37', '#8E44AD', '#E91E63', '#4A235A'][Math.floor(Math.random() * 4)];
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});

// Agregar estilos para el confeti
const confettiStyles = document.createElement('style');
confettiStyles.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background: #D4AF37;
        top: 0;
        opacity: 0;
        animation: confettiFall 3s ease-in forwards;
        z-index: 1000;
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyles);