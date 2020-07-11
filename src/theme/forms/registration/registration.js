import Inputmask from "inputmask";

const input = document.querySelector('.registration-form__birth-date input');

const im = new Inputmask({mask: '99/99/9999', placeholder: 'dd/mm/yyyy'});
im.mask(input);