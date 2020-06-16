const button = document.querySelectorAll('.button-border__button');

button.forEach(btn => {
    if(btn.disabled){
        btn.parentNode.style = 'opacity: .5;';
    }
})
