const info = document.querySelector(".info");
const menu = document.querySelector(".Calculadora");
const htmlHome = document.querySelector("body")
const htmlDev = `
    <div class='es'>
        <h1>Yazalde Felimone</h1>
        <h3>Fala Dev blz?</h3>
        <p>Esse projecto fiz com proposito de passar tempo kkk<br> Me siga no github e ve mas projectos.</p>
        <a href="https://github.com/YazaldeFP">Github: Yazalde Felimone</a>
    </div>
`
function infodev(){
   menu.style.display="none";
    htmlHome.style.background="#696969";
    htmlHome.innerHTML=htmlDev;

}
function inicia(){
    info.addEventListener('click', infodev)
}
inicia()
/*var n1,n2,n3,n4,n5,n6,n7,n8,n9,n0,inp,ingua,mas,vezes,menos,advidir;



function init(){
    index()
    envetListener()
}

function index(){
    n1=document.querySelector('#um');
    n2=document.querySelector('#dois');
    n3=document.querySelector('#tres');
    n4=document.querySelector('#quatro');
    n5=document.querySelector('#cinco');
    n6=document.querySelector('#seis');
    n7=document.querySelector('#sete');
    n8=document.querySelector('#oito');
    n9=document.querySelector('#nove');
    n0=document.querySelector('#zero');
    inp=document.querySelector('input')
    ingua=document.querySelector('.igual')
    mas=document.querySelector('#mas')
    menos=document.querySelector('#menos')
    vezes=document.querySelector('#vezes')
    advidir=document.querySelector('#advidir')
}
function inicia(){
   var v1=inp.value;
    alert(v1)
}
function ingu(){
    var arry;
    arry=string(inp.value+1)
    alert(arry)
}
function envetListener(){
    mas.addEventListener('click', inicia)
    ingua.addEventListener('click', ingu)
}
init()*/
