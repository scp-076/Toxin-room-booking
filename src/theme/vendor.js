function num2str(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}

export function dropDownSet(dropDownName, cls) {
    let wrap = document.querySelector(cls[0]);
    let input = wrap.querySelector(cls[1]);
    let dropdownMenu = wrap.querySelector(cls[2]);
    let btn_option1_minus = wrap.querySelector(cls[3]);
    let btn_option1_plus = wrap.querySelector(cls[4]);
    let btn_option2_minus = wrap.querySelector(cls[5]);
    let btn_option2_plus = wrap.querySelector(cls[6]);
    let btn_option3_minus = wrap.querySelector(cls[7]);
    let btn_option3_plus = wrap.querySelector(cls[8]);
    let count_option1 = wrap.querySelector(cls[9]);
    let count_option2 = wrap.querySelector(cls[10]);
    let count_option3 = wrap.querySelector(cls[11]);
    let btn_clear = wrap.querySelector(cls[12]);
    let btn_submit = wrap.querySelector(cls[13]);

    if(btn_submit){
        btn_submit.addEventListener('click', () => {
            dropdownMenu.classList.remove('options-shown');
        })
    }

    btn_option1_minus.disabled = true;
    btn_option2_minus.disabled = true;
    btn_option3_minus.disabled = true;

    function setInputValue(count1, count2, count3) {
        if(dropDownName === 'dropdown_rooms'){
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

        }
        if(dropDownName === 'dropdown_guests'){
            let countTotal = Number(count1.value) + Number(count2.value) + Number(count3.value);
            input.value = countTotal + ' ' + num2str(countTotal, ['гость', 'гостя', 'гостей']);
            if(input.value === ''){
                btn_clear.style = 'visibility: hidden;'
            }
        }
        if(count1.value === "0" && count2.value === "0" && count3.value === "0"){
            input.value = '';
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
        if(dropDownName === 'dropdown_guests'){
            btn_clear.style = 'visibility: visible;';
        }

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

    if(btn_clear){
        if(input.value === ''){
            btn_clear.style = 'visibility: hidden;'
        }
        btn_clear.addEventListener('click', () => {
            count_option1.value = "0";
            count_option2.value = "0";
            count_option3.value = "0";
            input.value = null;
            btn_option1_minus.disabled = true;
            btn_option2_minus.disabled = true;
            btn_option3_minus.disabled = true;
            btn_clear.style = 'visibility: hidden;';
        })
    }
}