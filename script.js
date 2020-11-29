const boxes = document.querySelectorAll('.box')
const card = document.querySelector('#card')

let turn = 'X'
let game = 'on'

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(!box.innerHTML){
            if (game == 'on') {
                
                box.innerHTML = turn
                if (turn == 'X') {
                    turn = 'O'
                    card.innerHTML = "O's turn"
                }else{
                    turn = 'X'
                    card.innerHTML = "X's turn"
        
                }        
            }else{
                reset()
            }
        } 
        
        if(checkWin()){
            card.innerHTML = `${checkWin()} wins`
            game = 'off'
        }
    })
});


const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')

const checkWin = () => {

    if (box1.innerHTML) {
        if (box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML ) {
            box1.style.background = box2.style.background = box3.style.background = "orange"
            return box1.innerHTML
        }
        if (box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML ) {
            box1.style.background = box4.style.background = box7.style.background = "orange"
            return box1.innerHTML
        }
        if (box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML ) {
            box1.style.background = box5.style.background = box9.style.background = "orange"
            return box1.innerHTML
        }
        
    }

    if (box2.innerHTML) {
        if (box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML ) {
            box2.style.background = box5.style.background = box8.style.background = "orange"
            return box2.innerHTML
        }
    }

    if (box3.innerHTML) {
        if (box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML ) {
            box3.style.background = box6.style.background = box9.style.background = "orange"
            return box3.innerHTML
        }
        if (box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML ) {
            box3.style.background = box5.style.background = box7.style.background = "orange"
            return box3.innerHTML
        }
    }

    if (box4.innerHTML) {
        if (box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML ) {
            box4.style.background = box5.style.background = box6.style.background = "orange"
            return box4.innerHTML
        }
    }

    if (box7.innerHTML) {
        if (box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML ) {
            box7.style.background = box8.style.background = box9.style.background = "orange"
            return box7.innerHTML
        }
    }
}


//Reset function
const reset = () => {
    boxes.forEach(box => {
        box.innerHTML = ''
        box.style.background = 'rgb(136, 238, 238)'

    })
    card.innerHTML = "Play now"
    turn = 'X'
    game = 'on'
    
}