document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // 停止觀察已顯示的元素
            }
        });
    }, {
        threshold: 0.15 // 元素 15% 可見時觸發
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
