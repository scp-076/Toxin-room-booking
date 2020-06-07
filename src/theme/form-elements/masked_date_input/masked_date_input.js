import Inputmask from "inputmask";

const input = document.querySelector('.masked_date_input_block__input');

const im = new Inputmask({mask: '99/99/9999', placeholder: 'dd/mm/yyyy'});
im.mask(input);
