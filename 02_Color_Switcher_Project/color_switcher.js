const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click', function (e) {
        console.log(e);          // Give about Mouse Click
        console.log(e.target);   // Tells about where arrow has been clicked and give all attributes   

        if (e.target.id === 'grey')
            body.style.backgroundColor = e.target.id;

        else if (e.target.id === 'white')
            body.style.backgroundColor = e.target.id;

        else if (e.target.id === 'yellow')
            body.style.backgroundColor = e.target.id;

        else if (e.target.id === 'blue')
            body.style.backgroundColor = e.target.id;
        else if (e.target.id === 'black')
            body.style.backgroundColor = e.target.id;
    })
})