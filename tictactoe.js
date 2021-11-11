const cells = document.querySelectorAll('.cell'),
winMessage = document.querySelector('.win'),
reset = document.querySelector('.reset');

let turn = 0;
let someoneWon = false;

const winArray = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9],
];

let Xarray = [];
let Oarray = [];

reset.addEventListener('click', function() {
    turn = 0;
    someoneWon = false;
    Xarray = [];
    Oarray = [];
    winMessage.classList.add('hidden')
    cells.forEach(cell => {
        cell.innerHTML = "";
    });
    winMessage.innerHTML = "";
})

function checkWin() {
    for(i=0; i<8; i++){
        Xintersection = Xarray.filter(x => winArray[i].includes(x));
        Ointersection = Oarray.filter(x => winArray[i].includes(x));
        if(JSON.stringify(Xintersection.sort()) == JSON.stringify(winArray[i])){
            winMessage.classList.remove('hidden')
            winMessage.innerHTML = "X won!";
            someoneWon = true
        } else if(JSON.stringify(Ointersection.sort()) == JSON.stringify(winArray[i])){
            winMessage.classList.remove('hidden')
            winMessage.innerHTML = "O won!";
            someoneWon = true
        }
    }
    if(turn == 9 && !someoneWon){
        winMessage.classList.remove('hidden')
        winMessage.innerHTML = "Draw!"
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', ()=>{
        if(turn < 9 && !Xarray.includes(i+1) && !Oarray.includes(i+1) && winMessage.innerHTML == "") {//winMessage가 비어있다면 if문 추가
            if(turn % 2 == 0) {
                cells[i].innerHTML = "<img src='x.png' class='OorX' width=160px height=160px>";
                Xarray.push(i+1);
            } else {
                cells[i].innerHTML = "<img src='o.png' class='OorX' width=160px height=160px>";
                Oarray.push(i+1);
            }
            
            turn += 1;
            checkWin();
        } 
    });
};