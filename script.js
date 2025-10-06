function clue(){
    let random = Math.random();
    let str = '';
    if (random>=0 && random<=0.33){
        str = 'stone';
    } else if (random>=0.33 && random<=0.66){
        str = 'paper';
    } else {
        str = 'scissor';
    }
    return str;
}
let tie = 0;
let win = 0;
let loose = 0;
function stone(){
    console.log(clue());
    let csmove = clue();
    if (csmove === 'stone'){
        document.querySelector(".staus").innerHTML = `your move STONE and computer move ${csmove} hence, TIE`;
        tie++;
    } else if (csmove === 'scissor'){
        document.querySelector(".staus").innerHTML = `your move STONE and computer move ${csmove} hence, YOU WON`;
        win++;
    } else {
        document.querySelector(".staus").innerHTML = `your move STONE and computer move ${csmove} hence, YOU LOOSE`;
        loose++;
    }
    countfinal();
}

function paper(){
    console.log(clue());
    let csmove = clue();
    if (csmove === 'paper'){
        document.querySelector(".staus").innerHTML = `your move PAPER and computer move ${csmove} hence, TIE`;
        tie++;
    } else if (csmove === 'stone'){
        document.querySelector(".staus").innerHTML = `your move PAPER and computer move ${csmove} hence, YOU WON`;
        win++;
    } else {
        document.querySelector(".staus").innerHTML = `your move PAPER and computer move ${csmove} hence, YOU LOOSE`;
        loose++;
    }
    countfinal();
}

function scissor(){
    console.log(clue());
    let csmove = clue();
    if (csmove === 'scissor'){
        document.querySelector(".staus").innerHTML = `your move SCISSOR and computer move ${csmove} hence, TIE`;
        tie++;
    } else if (csmove === 'paper'){
        document.querySelector(".staus").innerHTML = `your move SCISSOR and computer move ${csmove} hence, YOU WON`;
        win++;
    } else {
        document.querySelector(".staus").innerHTML = `your move SCISSOR and computer move ${csmove} hence, YOU LOOSE`;
        loose++;
    }
    countfinal();
}
function countfinal(){
    document.querySelector(".count").innerHTML = `tie : ${tie}  .........  win : ${win}  .........  loose : ${loose}`;
    
}
