// Testimonial data
const testimonials = [
    {
        name: "Sarah Johnson",
        text: "Best bike shop in town! The staff is incredibly knowledgeable and helpful.",
        rating: 5
    },
    {
        name: "Mike Thompson",
        text: "Great selection of bikes and excellent service. Highly recommended!",
        rating: 5
    },
    {
        name: "Lisa Chen",
        text: "They helped me find the perfect bike for my needs. Amazing experience!",
        rating: 5
    }
];

// Initialize testimonial slider
function initTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    
    testimonials.forEach(testimonial => {
        const testimonialEl = document.createElement('div');
        testimonialEl.className = 'testimonial-item';
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialEl.innerHTML = `
            <div class="testimonial-content">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-rating">${stars}</div>
                <p class="testimonial-author">- ${testimonial.name}</p>
            </div>
        `;
        
        slider.appendChild(testimonialEl);
    });
}

// Animate stats when they come into view
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTestimonials();
    animateStats();
}); 