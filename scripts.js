// Variáveis globais
let currentSlide = 0;
const totalSlides = 3;
let autoSlideInterval;

// Função para ir para um slide específico
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
    resetAutoSlide();
}

// Função para próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Função para slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoSlide();
}

// Função para atualizar o carrossel
function updateCarousel() {
    const track = document.getElementById("carousel-track");
    const translateX = -(currentSlide * (100 / totalSlides));
    track.style.transform = `translateX(${translateX}%)`;
    
    // Atualizar indicadores
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });
}

// Função para reiniciar auto-slide
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Função para iniciar auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 85000);
}

// Função para parar auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", function() {
    startAutoSlide();
    
    // Pausar auto-slide ao passar mouse sobre o carrossel
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        carousel.addEventListener("mouseenter", stopAutoSlide);
        carousel.addEventListener("mouseleave", startAutoSlide);
    }
    
    // Navegação por teclado
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        }
    });
    
    // Suporte para touch/swipe
    let startX = 0;
    let endX = 0;
    
    if (carousel) {
        carousel.addEventListener("touchstart", function(e) {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        carousel.addEventListener("touchend", function(e) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
});

// Pausar quando a aba não está ativa
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
});
