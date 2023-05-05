// const content = document.querySelector('.content');
// const hyunho = document.getElementById('hyunho');

// const hyunho = document.querySelectorAll('#hyunho');
// const hyunho = document.getElementsByClassName('hyunho');

// console.log(content)
// console.log(hyunho)

// const content = document.querySelector('.content')

// content.style.border = '3px solid blue';

// content.style.top = '100px';
// content.style.left = '100px';
// content.style.width = '500px';
// content.style.height = '300px';
// content.style.backgroundColor = 'white';
// content.style.fontSize = '2rem';

// content.textContent += '글자가 적혀요';
// content.innerHTML = "<h1 class='test'>javaScript 쉽죠</h1>"
// content.innerHTML += "<br><p class='textContent'>javaScript 쉽죠</p>"


// const wrap = document.querySelector('.wrap')
// wrap.innerHTML = "<div class='hyunho'></div>"

// const hyunho = document.querySelector('.hyunho')
// hyunho.style.width = '500px'
// hyunho.style.height = '300px'
// hyunho.style.border = '3px solid red';


// hyunho.innerHTML += "<br><div class='textContent'>만들어 볼까요?</div>"
// const textContent = document.querySelector('.hyunho')
// textContent.style.fontSize = '2rem'
// textContent.style.fontWeight = '900'

// 클릭 버튼
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    content.textContent += "클릭 하셨어요";
});

window.addEventListener('keydown', (e)=>{
    console.log(e);
    content.textContent +=  `${e.key}을 누르셨습니다`
})

// alert, confirm 버튼
const alertBtn = document.querySelector('.alertBtn');
const confirmBtn = document.querySelector('.confirmBtn');

alertBtn.addEventListener('click', ()=>{
    window.alert("위험 위험");
});

confirmBtn.addEventListener('click', ()=>{
    let response = window.confirm("확인 or 취소");

    if(response){
        alert("확인을 누르셨습니다.");
    }else{
        alert("취소를 누르셨습니다.");
    }
})