const moon = document.getElementById('moon'),
    sun = document.getElementById('sun')
;

moon.addEventListener('click', e => { 
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('.container').style.backgroundColor = '#000000';
    document.querySelectorAll('#border').forEach(border => {
        border.style.borderColor = '#FF5A25';
    })
    document.querySelector('button').style.backgroundColor = '#FF5A25';
    document.querySelector('#msg').style.color = '#FF5A25';

    moon.style.display = 'none';
    sun.style.display = 'block';
})

sun.addEventListener('click', e=> {
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('.container').style.backgroundColor = '#fff';
    document.querySelectorAll('#border').forEach(border => {
        border.style.borderColor = '#0000FE';
    })
    document.querySelector('button').style.backgroundColor = '#0000FE';
    document.querySelector('#msg').style.color = '#0000FE';

    moon.style.display = 'block';
    sun.style.display = 'none';
})





























