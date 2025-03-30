let btn = document.querySelector('button');
let percent = document.querySelector('.percent');
let growth = document.querySelector('.growth');
let grow = 0 ;
btn.addEventListener('click',function(){
    console.log("hello");
    let set = setInterval(function(){
        grow++;
        percent.innerHTML = grow+'%';
        growth.style.width = grow+'%';
    },50)
    setTimeout(function(){
        clearInterval(set);
        btn.innerHTML = "Downloaded";
        btn.style.opacity =0.6;
    },5000)
})

