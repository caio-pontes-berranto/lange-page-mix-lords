var SetaDireita = window.document.getElementById('SetaDireita');
var SetaEsquerda = window.document.getElementById('SetaEsquerda');
var SetaDireita2 = window.document.getElementById('SetaDireita2');
var SetaEsquerda2 = window.document.getElementById('SetaEsquerda2');
var dandadan = window.document.getElementById('dandadan');
var onepiece = window.document.getElementById('onepiece');
var gatiakuta = window.document.getElementById('gatiakuta');
var hachira = window.document.getElementById('hachira');

function rolarDireita(){
    dandadan.style.display = 'none'
    gatiakuta.style.display = 'flex'
    SetaDireita.style.display = 'none'
    SetaDireita2.style.display = 'flex'
}

function rolarDireita2(){
    dandadan.style.display = 'none'
    gatiakuta.style.display = 'flex'
    onepiece.style.display = 'none'
    hachira.style.display = 'flex'
    SetaDireita2.style.display = 'flex'
    SetaEsquerda.style.display = 'none'
    SetaEsquerda2.style.display = 'flex'

}

function rolarEsquerda(){
    dandadan.style.display = 'flex'
    gatiakuta.style.display = 'none'
    SetaDireita.style.display = 'flex'
}

function rolarEsquerda2(){
    dandadan.style.display = 'none'
    onepiece.style.display = 'flex'
    hachira.style.display = 'none'
    SetaDireita2.style.display = 'flex'
    SetaEsquerda2.style.display = 'none'
    SetaEsquerda.style.display = 'flex'
}