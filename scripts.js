"use strict"

// SHOW AND HIDE SIDEBARS //

const rightbar = document.getElementById('h3');
const leftbar = document.getElementById('h4')

const showSide = function(){
    var y = window.scrollY;
    if (y > 789){
        rightbar.classList.remove('hidden');
        leftbar.classList.remove('hidden');

    }
    else{
        rightbar.classList.add('hidden');
        leftbar.classList.add('hidden');
    }
}

window.addEventListener('scroll', showSide);

// --------------------------------------------

// CHANGE COLOR

const soft = document.getElementById('sel');

// window.addEventListener('load', function(){
//     soft.classList.add('purple');
// })

// const load = function(){
//     var x = window.scrollY;
//     if (x > 20){
//         soft.classList.add('purple');
//     }
//     else soft.classList.remove('purple');
// }
// window.addEventListener('scroll', load);


const sleft = document.querySelector('.move1');
const sright = document.querySelector('.move2');

window.onscroll = () => {
    let pos = window.scrollY - 10;
    sleft.style.left = `${pos}px`
    sright.style.right = `${pos}px`
}

const x = sleft.scrollX;
if (x > 30){
    sleft.style.color = 'red';
}


// move text along x axis
//once text reaches a specific pixel value, change iits background color



window