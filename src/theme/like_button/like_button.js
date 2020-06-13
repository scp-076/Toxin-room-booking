const likeButtonWrap = document.querySelector('.like_button__wrap');
const heart = document.querySelector('.like_button__heart');
const counter = document.querySelector('.like_button__counter');
let count = parseInt(counter.innerHTML);
console.log(count)

likeButtonWrap.addEventListener('click', () => {
    heart.classList.toggle('heart_purple');
    likeButtonWrap.classList.toggle('border-purple');
    if(likeButtonWrap.classList.contains('border-purple')){
        count++;
    } else {
        count--;
    }
    counter.innerHTML = count;
});