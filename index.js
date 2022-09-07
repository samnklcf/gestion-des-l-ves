let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let prec = document.getElementById('prec');
let corps = document.getElementById('corps');



step1.addEventListener("click", (e) => {
    e.preventDefault();
    two.classList.remove('none')
    one.classList.add('none');
});

prec.addEventListener("click", (e) => {
    e.preventDefault();
    two.classList.add('none')
    one.classList.remove('none');
});




// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - code logique-- -- -- -- -- -- -- -- -- --