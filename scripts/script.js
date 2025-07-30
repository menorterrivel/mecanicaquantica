document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Formulário enviado:', formValues);
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Resetar formulário
            this.reset();
        });
    }
    
    // Efeito de hover nos cards de serviço
    const serviceCards = document.querySelectorAll('.card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Botão de WhatsApp flutuante
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/+5563991215595';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.target = '_blank';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
    
    // Estilos para o botão do WhatsApp
    const whatsappStyle = document.createElement('style');
    whatsappStyle.textContent = `
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .whatsapp-float:hover {
            background-color: #128C7E;
            transform: scale(1.1);
        }
        
        .whatsapp-float i {
            margin-top: 5px;
        }
    `;
    document.head.appendChild(whatsappStyle);
});