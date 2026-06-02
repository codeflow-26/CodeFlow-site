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