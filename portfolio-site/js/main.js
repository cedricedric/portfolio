/******************/
/** Dom elements */
/******************/


function init() {

    const link = document.getElementsByClassName('project__link')
    for(let i = 0; i < link.length; i++ ){
        link[i].addEventListener("mouseover", grow)
    }
    //console.log(this)

    function grow() {
        const linesSmall = document.getElementsByClassName('line-small')
        const linesBig = document.getElementsByClassName('line-big')
        const pictures = document.getElementsByClassName('project__wrapper-thumbnail')
        const bulles = document.getElementsByClassName('cls-1')
       for(let i = 0; i < bulles.length; i++ ) {
            //bulles[i].setAttribute('box-shadow', '0 0 6px 3px rgba(217,240,255,.3), inset 0 0 6px 3px rgba(217,240,255,.3)')
            bulles[i].setAttribute('stroke', '#fff')
            bulles[i].setAttribute('stroke-width', '1')
            bulles[i].setAttribute('stroke-opacity', '0.3')
        }
        for(let i = 0; i < linesSmall.length; i++ ){
            this.nextElementSibling.style.width = 15 +'em';
            linesSmall[i].style.border = '0.2px solid #D9F0FF';
            linesSmall[i].style.boxShadow = '0 0 6px 3px rgba(217,240,255,.3)';
            linesBig[i].style.boxShadow = '0 0 6px 3px rgba(217,240,255,.3)';
            pictures[i].style.boxShadow = '0 0 6px 3px rgba(217,240,255,.3), inset 0 0 6px 3px rgba(217,240,255,.3)';
            console.log(this.nextElementSibling)
        }
        //console.log(e.target, this)
        /*
        const id = setInterval(frame, 1);
        function frame() {
            if (width >= 18.2) {
                clearInterval(id);
            } else {
                width += 0.4;
                lineSmall.style.width = width + 'em';
            }
        }*/

    }

}

init()
/*
function grow() {
    let width = 1;
    const id = setInterval(frame, 1);
    function frame() {
        if (width >= 18.2) {
            clearInterval(id);
        } else {
            width += 0.4;
            lineSmall.style.width = width + 'em';
        }
    }

}
/*let lineSmall =  document.getElementsByClassName('line-small');
const parent = document.querySelector('.work__wrapper-articles')
parent.addEventListener("mouseover", doSomething, false)

function doSomething(e){
    if (e.target !== e.currentTarget){
        console.log(e.currentTarget + e.target)
    }

}




/*

const projectLink = document.getElementsByClassName('project__link');

function grow(){
    for(i = 0; i<projectLink.length; i++){
        move()
    }
}



console.log(projectLink.length)

function move() {
    let width = 1;
    const id = setInterval(frame, 1);
    function frame() {
        if (width >= 18.2) {
            clearInterval(id);
        } else {
            width += 0.4;
            for(i=0; i <lineSmall.length; i++){
                lineSmall[i]
            }
            lineSmall.style.width = width + 'em';
        }
    }
}

function outMove() {
    lineSmall.style.width = 5 +'em' ;
    }

projectLink[0].addEventListener('mouseenter', grow)
//projectLink.addEventListener('mouseleave', outMove)

/*console.log(lineSmall.style.width)*/