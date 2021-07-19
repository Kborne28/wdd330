import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

const toggleMenuVisibility = () => {
    document.querySelector('#navigation').classList.toggle('visible')
}

function showNav(depth) {

    let pathPrefix = ''
    for (i = 0; i < depth; i++) {
        console.log('step')
        pathPrefix = pathPrefix + '../'
    }
    console.log(pathPrefix)
    console.log(depth)
    console.log(parseInt(depth))

    document.querySelector('#nav').innerHTML = 
    `
    <ul id='navigation'>
            
            <li><a href='${pathPrefix}week1'>Week 1</a></li>
            <li><a href='${pathPrefix}week2'>Week 2</a></li>
            <li><a href='${pathPrefix}week3'>Week 3</a></li>
            <li><a href='${pathPrefix}week4'>Week 4</a></li>
            <li><a href='${pathPrefix}week5'>Week 5</a></li>
            <li><a href='${pathPrefix}week6'>Week 6</a></li>
            <li><a href='${pathPrefix}week7'>Week 7</a></li>
            <li><a href='${pathPrefix}week8'>Week 8</a></li>
            <li><a href='${pathPrefix}week9'>Week 9</a></li>
            <li><a href='${pathPrefix}week10'>Week 10</a></li>
            <li><a href='${pathPrefix}week11'>Week 11</a></li>
            <li><a href='${pathPrefix}week12'>Week12</a></li>
        </ul>
    `
        
    document.querySelector('#menuButton').addEventListener('click', toggleMenuVisibility)
}
