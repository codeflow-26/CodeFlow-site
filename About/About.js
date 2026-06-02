document.querySelectorAll('.typing').forEach(heading => {
    const text = heading.textContent;
    heading.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            heading.textContent += text[i];
            i++;
            setTimeout(type, 110);
        }
    }
    
    type();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});