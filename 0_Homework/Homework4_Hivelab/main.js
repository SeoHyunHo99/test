// 메뉴 밑줄 슬라이딩

let UnderLine = document.getElementById("nav_underline");
let Menu_list = document.querySelectorAll("ul.menu_list > a")

Menu_list.forEach((menu) =>  
    menu.addEventListener("mousemove", (e) => Indicator(e))
);

Menu_list.forEach((menu) =>  
    menu.addEventListener("mouseleave", (e) => Didsapper(e))
);
function Indicator(e) {
    UnderLine.style.left = e.currentTarget.offsetLeft + "px";
    UnderLine.style.width = e.currentTarget.offsetWidth + "px";
    UnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function Didsapper(e) {
    UnderLine.style = delete(e.currentTarget);
}

//------------------------------------------------------------------------

// 페이지 더하기 빼기

function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
        if(parseInt(number) == 1){
            number = 1
        }
        else{
            number = parseInt(number) - 1;
        }
    }else if(type === 'minus')  {
        if(parseInt(number) == 4){
            number = 4
        }
        else{
            number = parseInt(number) + 1;
        }
    }
    
    number = '0'.concat(number)

    // 결과 출력
    resultElement.innerText = number;
}

//------------------------------------------------------------------------
// // 메뉴 밑줄 슬라이딩

// let UnderLine = document.getElementById("nav_underline");
// let Menu_list = document.querySelectorAll("ul.menu_list > a")

// Menu_list.forEach((menu) =>  
//     menu.addEventListener("mousemove", (e) => Indicator(e))
// );

// Menu_list.forEach((menu) =>  
//     menu.addEventListener("mouseleave", (e) => Didsapper(e))
// );
// function Indicator(e) {
//     UnderLine.style.left = e.currentTarget.offsetLeft + "px";
//     UnderLine.style.width = e.currentTarget.offsetWidth + "px";
//     UnderLine.style.top = 
//         e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
// }

// function Didsapper(e) {
//     UnderLine.style = delete(e.currentTarget);
// }