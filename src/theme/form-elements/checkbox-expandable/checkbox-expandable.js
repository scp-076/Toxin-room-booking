let expandableHeader = document.querySelector('.checkbox-expandable__header');
let checkboxes = document.querySelector('.checkbox-expandable__checkboxes');
let arrow = document.querySelector('.checkbox-expandable__arrow');

expandableHeader.addEventListener('click', () => {
    checkboxes.classList.toggle('checkbox-expandable__checkboxes-active');
    if(arrow.hasAttribute("style")) arrow.removeAttribute("style");
    else arrow.style = "transform: rotate(180deg)";
});