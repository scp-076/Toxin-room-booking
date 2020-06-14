import img1 from '../../../src/images/star.png';
import img2 from '../../../src/images/star_filled.png';

let stars = document.querySelectorAll('.rate_button__img');

const bindClickListeners = (stars) => {
    stars.forEach((star) => {
        star.addEventListener('click', (e) => {


            let activeStars = Array.from(stars);
            let activeStarsArr = activeStars.filter(star => star.src !== img1);
            activeStarsArr.forEach(star => star.src = img1);

            let clickedStar = e.currentTarget;
            let clickedImageIndex = 0;

            for (let i = 0; i < stars.length; i++) {
                let star = stars[i];
                star.src = img2;
                if(star === clickedStar) {
                    clickedImageIndex = i;
                    break;
                }
            }
            localStorage.setItem("rating-value", clickedImageIndex);

        });
    });
};

const restorePreviousRatingValue = (stars) => {
    let savedValue = localStorage.getItem("rating-value");
    if(!!savedValue){
        savedValue = +savedValue;
        for (let i = 0; i < stars.length; i++) {
            let star = stars[i];
            star.src = img2;
            if(i === savedValue) {
                break;
            }
        }
    }
};

bindClickListeners(stars);

restorePreviousRatingValue(stars);