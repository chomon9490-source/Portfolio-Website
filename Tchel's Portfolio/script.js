// DOM Elements

// Add hover effects for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.skill-icon i');
        icon.style.transform = 'scale(1.2) rotateY(180deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.skill-icon i');
        icon.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Add click effect for buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .social-link').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        let rect = this.getBoundingClientRect();
        let size = Math.max(rect.width, rect.height);
        let x = e.clientX - rect.left - size / 2;
        let y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .btn-primary, .btn-secondary, .social-link {
        position: relative;
        overflow: hidden;
    }
    
    .skill-icon i {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(rippleStyle);