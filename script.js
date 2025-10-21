//const body=document.querySelector('.body');
const nav=document.querySelector(".nav");

const nav_css=document.querySelector(".nav_css");
const nav_js=document.querySelector(".nav_js");
const section_left=document.querySelector(".section_left");
const section_right=document.querySelector(".section_right");

let array;
nav.addEventListener('click',(e)=>{console.log(e.target)
    if(e.target.innerHTML==='js'){section_left.innerHTML=` <div class="array" >array</div> <div class="">string</div>`;section_left.style.zIndex='3'}
    
    if(e.target.innerHTML==='css'){console.log(e.target.innerHTML);section_left.innerHTML=` <div class="">border</div> <div class="">color</div>`;section_left.style.zIndex='3'}

   
   

});
// import {js_array_innerHtml} from "./data";
// console.log(js_array_innerHtml)
console.log(localStorage.getItem("array_innerHTML"));
 
let  array_js=["string","array","border","color"];
section_left.addEventListener("click",(e)=>{
    array_js.forEach((item,i)=>{  if(e.target.innerText==`${item}` ){
        
       

        section_right.innerHTML=`${localStorage.getItem(`${item}_innerHtml`)}` } })




    // if(e.target.innerHTML==`string` ){


    
    //     section_right.innerHTML=`${localStorage.getItem("string_innerHtml")}` }

    // if(e.target.innerHTML==`array` ){

    
    // section_right.innerHTML=`${localStorage.getItem("array_innerHtml")}` };


})





// section_right.addEventListener("click",(e)=>{
//     if(e.target.className="section_right"){ 
//          section_left.style.zIndex=1}
// })


//new w