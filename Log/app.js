const btn = document.querySelector('.button')
console.log('hello');

btn.addEventListener('click', () =>{

    const input1 = document.querySelector('.input1').value;
    const input2 = document.querySelector('input2').value;

    let msg1 = document.querySelector('msg1');
    let msg2 = document.querySelector('msg2');

    if (input1 === '') {
        msg1.innerHTML='please enter your name';
    }else{
        msg1.innerHTML = '';
    }
    if (input2 === '') {
        msg2.innerHTML = 'please enter your REG NO.'
    }else{
        msg2.innerHTML = ''
    }

    // console.log('hello');
})