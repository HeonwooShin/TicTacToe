const one = document.getElementById('1'),
two = document.getElementById('2'),
three = document.getElementById('3'),
four = document.getElementById('4'),
five = document.getElementById('5'),
six = document.getElementById('6'),
seven = document.getElementById('7'),
eight = document.getElementById('8'),
nine = document.getElementById('9'),

winMessage = document.querySelector('.win'),
reset = document.querySelector('.reset');

let turn = 0;

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
    Xarray = [];
    Oarray = [];
    one.innerHTML="";
    two.innerHTML="";
    three.innerHTML="";
    four.innerHTML="";
    five.innerHTML="";
    six.innerHTML="";
    seven.innerHTML="";
    eight.innerHTML="";
    nine.innerHTML="";
    winMessage.innerHTML="";
})

function checkWin() {
    for(i=0; i<8; i++){
        Xintersection = Xarray.filter(x => winArray[i].includes(x));
        Ointersection = Oarray.filter(x => winArray[i].includes(x));
        if(JSON.stringify(Xintersection.sort()) == JSON.stringify(winArray[i])){
            winMessage.innerHTML="X is Winner!";
        } else if(JSON.stringify(Ointersection.sort()) == JSON.stringify(winArray[i])){
            winMessage.innerHTML="O is Winner!";
        }
    }
}

one.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(1) && !Oarray.includes(1) && winMessage.innerHTML == "") {//winMessage가 비어있다면 if문 추가
    if(turn % 2 == 0) {
        one.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(1);
    } else {
        one.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(1);
    }
    
    turn += 1;
    checkWin();
}
});

two.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(2) && !Oarray.includes(2) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        two.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(2);
    } else {
        two.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(2);
    }
  
    turn += 1;
    checkWin();
    }
});

three.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(3) && !Oarray.includes(3) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        three.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(3);
    } else {
        three.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(3);
    }
    
    turn += 1;
    checkWin();
    }
});

four.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(4) && !Oarray.includes(4) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        four.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(4);
    } else {
        four.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(4);
    }
    
    turn += 1;
    checkWin();
    }
});

five.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(5) && !Oarray.includes(5) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        five.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(5);
    } else {
        five.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(5);
    }
    
    turn += 1;
    checkWin();
    }
});

six.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(6) && !Oarray.includes(6) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        six.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(6);
    } else {
        six.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(6);
    }
    
    turn += 1;
    checkWin();
    }
});

seven.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(7) && !Oarray.includes(7) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        seven.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(7);
    } else {
        seven.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(7);
    }
    
    turn += 1;
    checkWin();
    }
});

eight.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(8) && !Oarray.includes(8) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        eight.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(8);
    } else {
        eight.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(8);
    }
    
    turn += 1;
    checkWin();
    }
});

nine.addEventListener('click', function(){
    if(turn < 9 && !Xarray.includes(9) && !Oarray.includes(9) && winMessage.innerHTML == "") {
    if(turn % 2 == 0) {
        nine.innerHTML = "<img src='x.png' width=100px height=100px>";
        Xarray.push(9);
    } else {
        nine.innerHTML = "<img src='o.png' width=100px height=100px>";
        Oarray.push(9);
    }
    
    turn += 1;
    checkWin();
    }
});