const headings = document.querySelectorAll('.dropdown-heading');
const content = document.querySelectorAll('.dropdown-content');
const btns = document.querySelectorAll('.dropdown-btn');

for(let i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', () => {
        headings[i].classList.toggle('dropdown-heading_active')
        content[i].classList.toggle('dropdown-content_opened');
        btns[i].classList.toggle('dropdown-btn_active');
    });
}