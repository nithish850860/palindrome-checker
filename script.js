const str = document.getElementById("str");
const btn = document.getElementById("btn");
let display = document.getElementById("display");
let fillterstr;

btn.addEventListener("click",()=>{
    let revestr = fillterstr.split("").reverse().join("");
    
    if(fillterstr === revestr){
        display.style.display = "block";
        display.innerHTML = `Yes, <span>'${str.value}'</span> is a palindrome`
    }
    else{
        display.style.display = "block";
        display.innerHTML = `No, <span>'${str.value}'</span> is not a palindrome`
    }
})

str.addEventListener("keyup",()=>{
    fillterstr = str.value.toLowerCase().replace(/[^A-Z0-9]/ig,"")
    console.log(fillterstr)
    if(fillterstr){
        return btn.classList.add("active");
    }
    btn.classList.remove("active");
})