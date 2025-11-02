const btn = document.getElementById("showDetailsBtn");
const details = document.getElementById("profileDetails");
const toggleText = document.getElementById("toggleText");
const toggleIcon = document.getElementById("toggleIcon");

btn.addEventListener("click", () => {
    const isHidden = details.classList.contains("hidden");
    details.classList.toggle("hidden");
    toggleText.textContent = isHidden ? "Скрыть подробную информацию" : "Показать подробную информацию";
    toggleIcon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
});
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.querySelector('.container').classList.replace('py-3', 'py-2');
    } else {
        header.classList.remove('shadow-md');
        header.querySelector('.container').classList.replace('py-2', 'py-3');
    }
});