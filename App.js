let turn="X"
let boxes=document.getElementsByClassName("box")
let isGameOver=false;
const changeTurn=()=>{
    return turn==="X"?"O":"X"
}
const checkWin=()=>{
    let boxTxt=document.getElementsByClassName('boxText')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e=>{
        if((boxTxt[e[0]].innerText===boxTxt[e[1]].innerText)&&(boxTxt[e[2]].innerText===boxTxt[e[1]].innerText)&&(boxTxt[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxTxt[e[0]].innerText+"Won";
            isGameOver=true
        }
    })
}
Array.from(boxes).forEach((element)=>{
    let boxText=element.querySelector(".boxText")
    element.addEventListener('click',()=>{
        if(boxText.innerText==""){
            boxText.innerText=turn
            turn=changeTurn()
            checkWin()
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText="Turn for: "+turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isGameOver=false;
    document.querySelector('.line').getElementsByClassName.width='0vw'
    document.getElementsByClassName('info')[0].innerText="Turn for: "+turn;

})