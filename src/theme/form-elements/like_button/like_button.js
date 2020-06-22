const likeButtonWrap = document.querySelectorAll('.like_button__wrap');

likeButtonWrap.forEach(e => {
    let heart = e.querySelector('.like_button__heart');
    let counter = e.querySelector('.like_button__counter');
    let count = parseInt(counter.innerHTML);
    e.addEventListener('click', () => {
        heart.classList.toggle('heart_purple');
        e.classList.toggle('border-purple');
        counter.classList.toggle('counter-purple');
        if(e.classList.contains('border-purple')){
            count++;
        } else {
            count--;
        }
        counter.innerHTML = count;
    });
});
