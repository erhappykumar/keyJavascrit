const a=`<style>.data{background:red}  </style><div class="data"><h2 style="background:pink">data one</h2><h2 class="t" style="background:pink">data one</h2>

 </div>
`;

setTimeout(()=>{const h2=document.querySelector('h2');
    const data=document.querySelector(".data");
    //data.style.background="yellow" 

    h2.style.color="red";const t=document.querySelector(".t");t.style.color="purple"
},0.000)

 


// const body=document.querySelector(".body");
// body.innerHTML+=a;
//   function fun1(x){
// document.querySelector(".two").innerHTML=x;
  
// };



// function fun1(x){
//    document.querySelector(".two").style.color=x

// }








 //let h1=document.querySelector(".two");
 
  
 
 
// // setTimeout(()=>{
// h1.addEventListener('click',()=>{   console.log(345); h1.style.background="pink"
//     const body=document.querySelector(".body");
// body.innerHTML+=a;const h2=document.querySelectorAll('h2'); h2[1].style.color="red";
// console.log(h1);
// setTimeout( ()=>{h2[1].addEventListener("click",()=>{ h1.style.color="red";console.log("now",h1);h2[0].style.background="yellow"}) },6000)
 
 

//   })
let updatedArr;
const addLunchToEnd =(arr,str)=>{
  
  updatedArr= arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return updatedArr;
};addLunchToEnd(["Pizza", "Tacos"], "Burger")