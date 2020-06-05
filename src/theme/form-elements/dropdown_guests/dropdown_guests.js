const wrap = document.querySelector('.dropdown_guests');
const input = wrap.querySelector('.dropdown_guests__input-total');
const dropdownMenu = wrap.querySelector('.dropdown_guests__options');
const btn_option1_minus = wrap.querySelector('.btn-minus-rooms');
const btn_option1_plus = wrap.querySelector('.btn-plus-rooms');
const btn_option2_minus = wrap.querySelector('.btn-minus-beds');
const btn_option2_plus = wrap.querySelector('.btn-plus-beds');
const btn_option3_minus = wrap.querySelector('.btn-minus-bathrooms');
const btn_option3_plus = wrap.querySelector('.btn-plus-bathrooms');
const count_option1 = wrap.querySelector('.dropdown_guests__options__count-bedrooms');
const count_option2 = wrap.querySelector('.dropdown_guests__options__count-beds');
const count_option3 = wrap.querySelector('.dropdown_guests__options__count-bathrooms');

btn_option1_minus.disabled = true;
btn_option2_minus.disabled = true;
btn_option3_minus.disabled = true;

function num2str(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}

function setInputValue(count1, count2, count3) {
    input.value =
        count1.value +
        ' ' +
        num2str(count1.value, ['спальня', 'спальни', 'спален']) +
        ', ' +
        count2.value +
        ' ' +
        num2str(count2.value, ['кровать', 'кровати', 'кроватей']) +
        ', ' +
        count3.value +
        ' ' +
        num2str(count3.value, ['ванная', 'ванных', 'ванных'])
    if(count1.value === "0" && count2.value === "0" && count3.value === "0"){
        input.value = null;
    }
}

function countMinus(option, btn) {
    option.value--;
    if(option.value === "0") {
        btn.disabled = true;
    }
}

function countPlus(option, btn) {
    option.value++;
    btn.disabled = false;
}

input.addEventListener('click', () => {
    dropdownMenu.classList.toggle('options-shown');
});

btn_option1_minus.addEventListener('click', () => {
    countMinus(count_option1, btn_option1_minus);
    setInputValue(count_option1, count_option2, count_option3);

});
btn_option1_plus.addEventListener('click', () => {
    countPlus(count_option1, btn_option1_minus);
    setInputValue(count_option1, count_option2, count_option3);
});
btn_option2_minus.addEventListener('click', () => {
    countMinus(count_option2, btn_option2_minus);
    setInputValue(count_option1, count_option2, count_option3);
});
btn_option2_plus.addEventListener('click', () => {
    countPlus(count_option2, btn_option2_minus);
    setInputValue(count_option1, count_option2, count_option3);
});
btn_option3_minus.addEventListener('click', () => {
    countMinus(count_option3, btn_option3_minus);
    setInputValue(count_option1, count_option2, count_option3);
});
btn_option3_plus.addEventListener('click', () => {
    countPlus(count_option3, btn_option3_minus);
    setInputValue(count_option1, count_option2, count_option3);
});