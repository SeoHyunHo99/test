const preSliderBtn = document.querySelector('.btn_up');
const nxtSliderBtn = document.querySelector('.btn_down');
const wrap = document.querySelector('.wrap');

let currentpage = 1;

nxtSliderBtn.addEventListener('click', ()=>{
    if(currentpage == 1){
        wrap.style.transform = "translateX(-100vh)";
        currentpage = 2;
        nxtSliderBtn.classList.add("hiddenSliderBtn");
        preSliderBtn.classList.remove("hiddenSliderBtn");
    }
});
preSliderBtn.addEventListener('click', ()=>{
    if(currentpage == 2){
        wrap.style.transform = "translateX(0)";
        currentpage = 1;
        preSliderBtn.classList.add("hiddenSliderBtn");
        nxtSliderBtn.classList.remove("hiddenSliderBtn");
    }
});