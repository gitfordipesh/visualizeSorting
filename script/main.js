/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

// var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#46d6ee; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
var butts_algos=document.querySelector(".algos button");
butts_algos.addEventListener("click",runalgo);


function disable_buttons()
{
    
    butts_algos.classList.add("butt_locked");
    butts_algos.disabled=true;
    inp_as.disabled=true;
    inp_gen.disabled=true;
    inp_aspeed.disabled=true;
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":
            var start = window.performance.now();
            Bubble();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
        case "Selection Sort":
            var start = window.performance.now();
            Selection_sort();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
        case "Insertion Sort":
            var start = window.performance.now();
            Insertion();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
        case "Merge Sort":
            var start = window.performance.now();
            Merge();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
        case "Quick Sort":
            var start = window.performance.now();
            Quick();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
        case "Heap Sort":
            var start = window.performance.now();
            Heap();
            var end = performance.now();
            var timeTaken = end-start;
            document.getElementById('time').innerHTML = "Sort took "+timeTaken+"ms";
            break;
    }
}

function bubbleFunction()
{
    document.getElementById("best").innerHTML = "Ω(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "θ(n^2)"
}

function selectionFunction()
{
    document.getElementById("best").innerHTML = "Ω(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "θ(n^2)"
}

function insertionFunction()
{

    document.getElementById("best").innerHTML = "Ω(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "θ(n^2)"
}

function mergeFunction()
{
    document.getElementById("best").innerHTML = "Ω(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "θ(n*log(n))"
}

function quickFunction()
{
    document.getElementById("best").innerHTML = "Ω(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "θ(n^2)"
}

function heapFunction()
{
    document.getElementById("best").innerHTML = "Ω(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "θ(n*log(n))"
}

