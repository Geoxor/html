const burger = document.querySelector('.burger');

var active = false;

burger.addEventListener('click', () => {
    if (active === true) {
        document.getElementsByClassName('small')[0].style.display='none';
        active = false;
    }
    else  {
        document.getElementsByClassName('small')[0].style.display='block';
        active = true;
    }
    console.log('test');
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementsByClassName('small')[0].style.display='none';
        active = false;
    }
}

var x = window.matchMedia("(min-width: 915px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

