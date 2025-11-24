// Simple JavaScript functions for the starter template

function getStarted() {
    alert('🚀 Great! You\'re ready to start building your amazing project!');
    console.log('Get Started button clicked');
    
    // You can add your custom logic here
    // For example, navigate to another page or show a modal
}

function viewCode() {
    alert('💻 Check out the source code in your project files!');
    console.log('View Code button clicked');
    
    // You can add custom code viewing logic here
    // For example, show a code preview or open GitHub
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add a simple animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    console.log('🎉 IvyCode project loaded successfully!');
});

// Add a simple greeting message
window.addEventListener('load', function() {
    console.log(`
    🌟 Welcome to your IvyCode project! 🌟
    
    This is a simple HTML, CSS, and JavaScript starter template.
    Feel free to customize it according to your needs.
    
    Happy coding! 🚀
    `);
});